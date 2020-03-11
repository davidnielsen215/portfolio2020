const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
const PORT = process.env.PORT || 5000;

const app = express()

sgMail.setApiKey('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')

app.use(cors())

app.get('/send-email', (req,res) => {
    const { recipient, sender, topic, text } = req.query; 
    const msg = {
        to: recipient, 
        from: sender,
        subject: topic,
        text: text,
    }

    sgMail.send(msg)
    .then((msg) => console.log('email sent'));
});

app.listen(PORT, () => {
    console.log(`[+] Starting server on port ${PORT}`);
});