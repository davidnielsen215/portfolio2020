import Mock from "../mock";
import reactLogo from '../../images/react_logo.png'

const database = {
  information: {
    name: 'David Nielsen',
    aboutContent: "Full Stack Software Developer",
    age: 23,
    phone: '(575) 997-7631',
    nationality: null,
    language: 'English, Spanish',
    email: 'davidnielsen215@gmail.com',
    address: null,
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: 'https://www.facebook.com/davenj8',
      twitter: 'https://twitter.com/davidnielsn',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/david-nielsen-a02702188',
      dribbble: '',
      github: 'https://github.com/davidnielsen215'
    },
    brandImage: '/images/header-img2.jpg',
    aboutImage: '/images/coderboi.jpg',
    aboutImageLg: '/images/coderboi.jpg',
    cvfile: '/files/empty.pdf'
  },
  services: [
    {
      title: "Web Design",
      icon: 'color-pallet',
      details: "Styling modern, responsive applications using best practices with React.js."
    },
    {
      title: "Web Development",
      icon: 'code',
      details: "From database contruction, server response API's, and full stack deployment."
    },
    {
      title: "Mobile Application",
      icon: 'mobile',
      details: "Developement of both iOS and Android mobile applications using React-Native."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company'
      }
    },
    {
      id: 2,
      content: "David is extremely professional with his work & never fails to meet deadlines. With his positive attitude, he is sure to add major contribution to any team or company",
      author: {
        name: 'Spencer Benson',
        designation: 'UX Designer'
      }
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client'
      }
    }
  ],
  skills: [
    {
      title: "React",
      value: 85
    },
    {
      title: "MongoDB",
      value: 80
    },
    {
      title: "Redux",
      value: 75
    },
    {
      title: "Express + API's",
      value: 85
    },
    {
      title: "Javascript",
      value: 70
    },
    {
      title: "CMS",
      value: 65
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "React.js",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
    {
      id: 2,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://facebook.com'
    },
    {
      id: 3,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: 'https://pinterest.com'
    },
    {
      id: 4,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 5,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    },
    {
      id: 6,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/images/portfolio-image-6.jpg",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"]
    },
    {
      id: 7,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/images/portfolio-image-7.jpg",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: 'https://twitter.com'
    },
    {
      id: 8,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/images/portfolio-image-8.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"]
    },
    {
      id: 9,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/images/portfolio-image-9.jpg",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"]
    },
    {
      id: 10,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 11,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://facebook.com'
    },
    {
      id: 12,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: 'https://pinterest.com'
    },
    {
      id: 13,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
    {
      id: 14,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    },
    {
      id: 15,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/images/portfolio-image-6.jpg",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"]
    },
    {
      id: 16,
      title: "Beautiful Pendrive",
      subtitle: "Pendrive with great design & flexible.",
      imageUrl: "/images/portfolio-image-7.jpg",
      largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
      url: 'https://twitter.com'
    },
    {
      id: 17,
      title: "Sticker",
      subtitle: "Clip sticker mockup design.",
      imageUrl: "/images/portfolio-image-8.jpg",
      largeImageUrl: ["/images/portfolio-image-8-lg.jpg"]
    },
    {
      id: 18,
      title: "Packet",
      subtitle: "Beautiful packet & product design.",
      imageUrl: "/images/portfolio-image-9.jpg",
      largeImageUrl: ["/images/portfolio-image-9-lg.jpg"]
    },
    {
      id: 19,
      title: "T-shirt Mockup",
      subtitle: "A beautiful t-shirt mockup.",
      imageUrl: "/images/portfolio-image-1.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://dribbble.com'
    },
    {
      id: 20,
      title: "Coffee Mug",
      subtitle: "Awesome coffee mug design.",
      imageUrl: "/images/portfolio-image-4.jpg",
      largeImageUrl: [
        "/images/portfolio-image-4-lg.jpg",
        "/images/portfolio-image-4-lg2.jpg"
      ],
      url: 'https://facebook.com'
    },
    {
      id: 21,
      title: "Tea & Coffee Mug",
      subtitle: "Beautiful mug with logo.",
      imageUrl: "/images/portfolio-image-2.jpg",
      url: 'https://pinterest.com'
    },
    {
      id: 22,
      title: "Pen Holder",
      subtitle: "A pen holder with beautiful design.",
      imageUrl: "/images/portfolio-image-3.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: '#'
    },
    {
      id: 23,
      title: "Mug",
      subtitle: "Mug with awesome style",
      imageUrl: "/images/portfolio-image-5.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2019 - Present",
        position: "Full Stack Web Developer",
        company: "Vlorm, Albuquerque NM",
        details: "Vlorm is a retailing technology that saves local retail businesses from failing due to internet competition. Responsibilites include developing user account platforms, managing dashboard statistics, and loading/exporting user data via REST API's all while maintaning best security & encryption standards."
      },
      {
        id: 2,
        year: "2019",
        position: "Freelance Developer",
        company: "Remote Work",
        details: "Developed CRUD mobile application for social media platform with ability to consentually track other user's location, maintain relationships, and influence content creation and sponsorship."
      },
      {
        id: 3,
        year: "2017 - 2018",
        position: "Sales Associate",
        company: "Fry's Electronics, Tempe AZ",
        details: "Educated customers on technology and component specifications associated with modern Audio/Video devices including Display, Bluetooth, and Wifi features."
      },
    ],
    techExperience: [
      {
        id: 1,
        year: "react",
        tech: "React",
        project: "Full Stack Applications",
        details: "Ability to design and develop platform for customer login / signup through storing information in database. Allows for user to register account, check statistcis, and purchase services. "
      },
      {
        id: 2,
        year: "mongo",
        tech: "MongoDB",
        project: "Database",
        details: "Database construction and API configuration through MongoDB for granting access to validated users, encrypting user passwords, and assigning individual user data properties to personalize their experience in a secure environment."
      },
      {
        id: 3,
        year: "express",
        tech: "Express",
        project: "Middleware + Web Query",
        details: "Through express, the routing of user information from database to server is quickly handled through rest api's. CORS authorization configuration and routing middleware for fast sites and secure data"
      },
      {
        id: 4,
        year: "node",
        tech: "Node.js",
        project: "JavaScript",
        details: "All of the Javascript code is written in a Node environment for easier compiling and faster develpment. React components developed in JSX"
      },
      {
        id: 5,
        year: "redux",
        tech: "Redux",
        project: "State Management",
        details: "State management using Redux and React-Context for global state changes preventing compiler collapses, slower rendering, and cumbersome components."
      },
      {
        id: 7,
        year: "drupal",
        tech: "Content Management System",
        project: "Drupal + Wordpress",
        details: "Developed multiple websites using drupal and wordpress CMS'. Plugin || Module configuration allowed for required site tasks to be developed and completed. "
      },
      {
        id: 8,
        year: "hubspot",
        tech: "CRM",
        project: "HubSpot + Axios",
        details: "Ability to save customers in CRM through API's create and dispatch transactional emails to designated clients. Email content may include validation tokens, transaction receipts, and personalized marketing material"
      },
      {
        id: 9,
        year: "secure",
        tech: "Encryption + Security",
        project: "Bcrypt + JWT + dotEnv",
        details: "Bcrypt password encryption for user security. Correct storage of sensitive information (API keys, JWT secrets, and licenses) in environmental files hiding source code from unauthorized entities"
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "2019",
        graduation: "Full Stack Javascript Web Development",
        university: "V School, Salt Lake City UT",
        details: "Graudated from technical program with completion of all course assignments and curriculum requirements in modern web technology."
      },
      {
        id: 2,
        year: "2016 - 2018",
        graduation: "Associates Degree",
        university: "Eastern Arizona College",
        details: "Acquired Associates Degree from Eastern Arizona College maintaining a 3.1 GPA"
      }
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: ['+012-3456-7891', '+012-3456-7892'],
    emailAddress: ['admin.sitename@example.com', 'info.sitename@example.com'],
    address: "121 King Street, Melbourne, Victoria 3000, Australia"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});