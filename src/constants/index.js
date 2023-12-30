import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    weather,
    pyp,
    sociopedia,
    ichat,
    portfolio
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "MERN Stack Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Programmer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },

  ];
  
  const experiences = [
    {
      title: "Web Designer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      // date: "March 2020 - April 2021",
      points: [
        "I developed a Starbucks Landing page with full of functionality",
        "The whole design is maintained and created by myself",
        "Technologies used to develop this webpage are HTML ,CSS and Javascript",
      ],
    },
    {
      title: "Front End Web Developer",
      company_name: "Responsive Designs",
      icon: tesla,
      iconBg: "#E6DEDD",
      // date: "Jan 2021 - Feb 2022",
      points: [
        "Created different Responsive Web Designs and templates",
        "These designs contain a lot of functionalities which makes them userfriendly",
        "Latest technologies used to develop these designs and templates are HTML ,CSS and Javascript ,Ejs and React",
      ],
    },
    {
      title: "Backend Developer",
      company_name: "Database Operations",
      icon: shopify,
      iconBg: "#383E56",
      // date: "Jan 2022 - Jan 2023",
      points: [
        "Created Web-Applications to do different operation on database.",
        "In these templates user have a full access to create update and delete the data from the database.",
        "These web templates are created different technologies like NodeJS,Express and MongoDB.",
        "In these we have a user friendly UI with full of functionalities which make it easy for user to do differnt tasks",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Weather Application",
      description:
        "Web-based platform that allow users to search for the weather of any city around the world. It will tell us the exact weather of that particular place at particular instant of time.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://thindnavdeep.github.io/Weather-web-application/",
    },
    {
      name: "Previous Year Paper",
      description:
        "Web application that enables users to search the question papers of particular subject. Basically it was developed for the student so that they can prepare important questions of any subject.In this admin have to upload the latest paper of any subject",
      tags: [
        {
          name: "NodeJS",
          color: "blue-text-gradient",
        },
        {
          name: "ExpressJS",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
        {
          name: "Ejs",
          color: "blue-text-gradient",
        },
        {
          name: "Css",
          color: "text-purple-600",
        },
      ],
      image: pyp,
      source_code_link: "https://pyp-pu.cyclic.app/",
    },
    {
      name: "SocioPedia",
      description:
        "A socialmedia Web-Appliaction that allow users to intract with different people. Users have a access to upload their images and thoughts. It provides full of authentication so that each user only have a access to their own account",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "TailWind",
          color: "pink-text-gradient",
        },
        {
          name: "NodeJS",
          color: "blue-text-gradient",
        },
        {
          name: "ExpressJS",
          color: "pink-text-gradient",
        },
        {
          name: "Mongoose",
          color: "blue-text-gradient",
        },
        {
          name: "Css",
          color: "text-pink-400",
        },
      ],
      image: sociopedia,
      source_code_link: "https://github.com/Thindnavdeep/Mern_Application",
    },
    {
      name: "I chat⭐",
      description:
        "Web Application that allow user to do group chat with their friends anonymously. It is a fully responsive chat application with full of functionalities. To start chat you just need to share the link of the web-application.",
      tags: [
        {
          name: "Ejs",
          color: "blue-text-gradient",
        },
        {
          name: "Css",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "NodeJS",
          color: "blue-text-gradient",
        },
        {
          name: "ExpressJS",
          color: "text-pink-400",
        },
        {
          name: "SocketIO",
          color: "blue-text-gradient",
        },
      ],
      image: ichat,
      source_code_link: "https://chat-web-application-two.vercel.app/",
    },
    {
      name: "PortFolio",
      description:
        "Web based platform that shows the collection of best work samples and materials that showcase your work experience and skills to the potential clients and employers.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "TailWind",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "Css",
          color: "blue-text-gradient",
        },
        {
          name: "ThreeJS",
          color: "text-pink-400",
        },
        {
          name: "EmailJS",
          color: "blue-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://navdeepthind-portfolio.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  