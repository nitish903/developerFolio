/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nitish Kadu",
  title: "Hi, i am NITISH",
  subTitle: emoji(
    "As a seasoned developer with a strong foundation in MongoDB, Angular and React. I have honed my skills in building dynamic, responsive, and scalable web applications."
  ),
  resumeLink:
    "https://drive.google.com/file/d/17gfyE0DUQxsn1R0xlGANE1jelZ5V-V--/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nitish903",
  linkedin: "www.linkedin.com/in/nitish-kadu-sbu",
  gmail: "mailto:nitishsatish.kadu@stonybrook.edu",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  leetcode: "https://leetcode.com/u/nitish_kadu/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Crafting Innovative Solutions at the Intersection of Technology and Data",
  skills: [
    emoji(
      "⚡ Built a solid foundation in Object-Oriented Programming (OOP) in C++ and pursued a degree in computer engineering from Mumbai University."
    ),
    emoji("⚡ Co-developed a cloud-based inventory management app using Flutter, marking a crucial step in my journey as a software engineer."),
    emoji(
      "⚡Enhanced front-end development skills with React and Next.js during an internship at Luna PR, managing projects for fintech, blockchain, and NFT clients."
    ),
    emoji(
      "⚡ Gained extensive experience at Jio Platforms Limited as a front-end and database developer, mastering user interface design, API integration, and MongoDB database management. "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Stony Brook University",
      logo: require("./assets/images/sbu.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2024 - present",
      desc: "Coursework",
      descBullets: [
        "Analysis of Algorithm", "Distributed Systems", "Data Science Fundamentals"
      ]
    },
    {
      schoolName: "Mumbai University",
      logo: require("./assets/images/mu.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "July 2018 - May 2022",
      desc: "Cousework",
      descBullets: ["Machine Learning","Big Data Analytics","Operating Systems", "DBMS", "NLP"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Database Mongo DB / Oracle", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Angular / React / Node",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "JIO Platforms Ltd",
      companylogo: require("./assets/images/jio.png"),
      date: "June 2018 – Present",
      desc: "Worked on ITSM module for CloudXP, focusing on hybrid cloud management. As a MongoDB developer, handled integration, user creation, data manipulation, and query tuning. Integrated with REST APIs, microservices, and batch jobs. Collaborated using Java, Spring Boot, and tools like Studio3T. Also developed UI components with Angular.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Freelance Front-End Developer",
      company: "Luna PR",
      companylogo: require("./assets/images/luna.jpeg"),
      date: "July 2021 – July 2022",
      desc: "Developed responsive web apps with React.js and Next.js. Improved page load times by 50% and reduced maintenance costs by 40%. Implemented Redux, server-side rendering, and integrated RESTful APIs. Optimized codebase, boosting performance by 30%. Ensured cross-browser compatibility and delivered high-quality products ahead of deadlines."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PRODUCTS THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/jio.png"),
      projectName: "Cloud XP",
      projectDesc: "Developed Jio CloudXP, an AI-powered hybrid cloud management platform for enterprises to optimize cloud operations.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.jio.com/jcms/cloudxp/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/luna.jpeg"),
      projectName: "LUNA PR",
      projectDesc: "Developed and deployed LUNA PR portfolio website using Next js,on Vercel",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.lunapr.io/"
        }
      ]
    },
    {
      image: require("./assets/images/goku.jpg"),
      projectName: "GOKU INU",
      projectDesc: "Developed a React website for Goku, an ERC20 anime-based token with unique tokenomics, utility, and community-driven features.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://gokuinu-g511t7wn5-gokutoken.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/zg.webp"),
      projectName: "Zambeesi Gold",
      projectDesc: "Used Next JS, Chakra UI library to create web application for Zambesi Gold",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://zambesi-gold.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/NFT.png"),
      projectName: "NFT ADVISORY",
      projectDesc: "Built a blockchain-based platform supporting NFT creators, protecting art ownership, and boosting digital presence for all experience levels.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nft-advisory.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/geodyst.png"),
      projectName: "Geodyst",
      projectDesc: "Created several UI prototypes for Geodyst",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://geodyst.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/favIcon.png"),
      projectName: "Law Counsellor",
      projectDesc: "React Web application prepared for Law counsellor LLP migrating their email and career service in react web applications.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.lawcounsellors.co.in/"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+16313560682",
  email_address: "nitishsatish.kadu@stonybrook.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
