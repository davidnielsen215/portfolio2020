import React, { useState, useEffect } from "react";
import axios from 'axios';
import Particles from "react-particles-js";
import Socialicons from "../components/Socialicons";
import Layout from "../components/Layout";

function Home(){
  const [information, setInformation] = useState("");
  const paramConfig = {
    particles: {
      number: {
        value: 60,
        
      },
      color: {
        value: "#ffffff"
      },
      opacity: {
        value: 0.1
      },
      size: {
        value: 3.3,
        random: false,
        
      },
      line_linked: {
        enable: true
      },
      move: {
        random: true,
        speed: 2.4,
        direction: "random",
        // out_mode: "out"
      }
    }
  };
  useEffect(() =>{
    axios.get('/api/information')
    .then( response => {
      setInformation(response.data);
    })
  }, [])
  return (
    <Layout>
      <div className="mi-home-area mi-padding-section">
        <Particles className="mi-home-particle" params={paramConfig} />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-12">
              <div className="mi-home-content">
                <h1>
                  David <span className="color-theme">Nielsen</span>
                </h1>
                <p style={{color: 'white'}}>{information.aboutContent}</p>
                <Socialicons bordered />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
