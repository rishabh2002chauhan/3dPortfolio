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
    student,
    instaClone,
    randomQuote,
    markdown,
    drumMachine,
    calculator,
    vercel,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "College Student",
      icon: student,
    },
    {
      title: "Web Developer",
      icon: web,
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "git",
    //   icon: git,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
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
      name: "Random Quote Generator",
      description:
        "Built a random quote generator using reactjs which uses an api for fetching random quotes.Used animate.CSS library for animating text. The api is triggered when the button saying 'New Quote' is clicked.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Animate.css",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: randomQuote,
      source_code_link: "https://github.com/",
      deploy_link: "https://calculator-gilt-nine.vercel.app/",
    },
    {
      name: "Markdown Editor",
      description:
        "Built a responsive Markdown editor for writing markdown files using reactjs, bootstrap and marked library for parsing markdown text.The markdown editor can be used for creating markdown(.md) files which can be used as intro documents in projects",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: markdown,
      source_code_link: "https://github.com/",
      deploy_link: "https://calculator-gilt-nine.vercel.app/",
    },
    {
      name: "Drum Machine",
      description:
        "Built a responsive drum machine website which triggers drum sounds on pressing respective buttons on screen/Keyboard.Used Jquery to apply css on elements of same class.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "JQuery",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: drumMachine,
      source_code_link: "https://github.com/",
      deploy_link: "https://calculator-gilt-nine.vercel.app/",
    },
    {
      name: "Calculator",
      description:
        "Built a calculator webpage using reactjs.Used Css Grid and Flexbox for designing the webpage.The calculator handles several cases such as operation stacking, more than one decimal and always something before decimal.The javascript function 'eval()' is used for calculating results.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: calculator,
      source_code_link: "https://github.com/rishabh2002chauhan/calculator",
      deploy_link: "https://calculator-gilt-nine.vercel.app/",
    },
    {
      name: "Instagram Clone",
      description:
        "Built an Instagram clone which supports basic Instagram functionalities like creating a post and follow/unfollow a user.Used Firebase for backend and Zustand for state management.",
      tags: [
        {
          name: "Reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "ChakraUI",
          color: "pink-text-gradient",
        },
        {
          name: "Zustand",
          color: "orange-text-gradient",
        },
      ],
      image: instaClone,
      source_code_link: "https://github.com/rishabh2002chauhan/instaClone",
      deploy_link: "https://dragon-zeta-rose.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };