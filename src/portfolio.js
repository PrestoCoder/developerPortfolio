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
  username: "Rohan Chhibba",
  title: "Hi all, I'm Rohan",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / ExpressJS / MongoDB / PostgreSQL and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1WGzcAtnx7M3zqSidY-0GpvPX44OIvDzr/edit?usp=sharing&ouid=111577009277274091869&rtpof=true&sd=true", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/PrestoCoder",
  linkedin: "https://www.linkedin.com/in/rohan-chhibba-a47466162/",
  gmail: "rchhibba@asu.edu",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER, MACHINE LEARNING ENTHUSIAST", 
  skills: [
    emoji(
      "⚡ Code Full Stack solutions, delivering responsive and dynamic user interfaces for web and mobile applications."
    ),
    emoji("⚡ Diving deep into Computer Vision and NLP."),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    // {
    //   skillName: "html-5",
    //   fontAwesomeClassname: "fab fa-html5"
    // },
    // {
    //   skillName: "css3",
    //   fontAwesomeClassname: "fab fa-css3-alt"
    // },
    // {
    //   skillName: "sass",
    //   fontAwesomeClassname: "fab fa-sass"
    // },
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
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
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
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
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
      schoolName: "Arizona State University",
      logo: require("./assets/images/ASU_logo_white.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2023 - May 2025",
      desc: "Research Assistant in Computer Vision, Graduate Teaching Assistant",
      descBullets: [
        "Cloud Computing",
        "Data Processing at Scale",
        "Fundamentals of Statistical Learning and Pattern Recognition",
        "Data Mining",
        "Semantic Web Mining"        
      ]
    },
    {
      schoolName: "Birla Institute of Technology and Sciences, Pilani",
      logo: require("./assets/images/BITS_Pilani-Logo.png"),
      subHeader: "Bachelor of Engineering in Electrical and Electronics",
      duration: "August 2016 - May 2020",
      desc: "",
      descBullets: ["Object Oriented Programming",
        "Data Structures and Algorithms", 
        "Probability and Statistics", 
        "Linear Algebra",
        "Computer Programming"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend - ReactJS, Javascript, HTML/CSS", //Insert stack or technology you have experience in
      progressPercentage: "92%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend - ExpressJS, Flask, MongoDB, SQL",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming - Java, C++, Javascript, Python, C#",
      progressPercentage: "95%"
    },
    
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graduate Teaching Assistant",
      company: "ASU",
      companylogo: require("./assets/images/ASU_logo_white.png"),
      date: "Jan 2024 onwards",
      // desc: "Pioneered state-of-the-art slot games with advanced Javascript, PHP, captivating over 1.5 million users worldwide.",
      // descBullets: [
      //   "Incorporated Asynchronous Javascript to choreograph cocos-2dx game engine’s sprites, deploying Docker images using Jenkins.",
      //   "Architected 5 contributions to BigFish GDK, developing features and concepts using design patterns like GoF and SOLID.",
      //   "Slashed committing/debugging duration by 50%, automating and integrating committing and linting.",
      //   "Reduced total development time by 30 days, performing successful Proof of Concept for novel game functionality.",
      //   "Boosted user engagement by 15% through successful delivery of Winterland, the studio's most advanced community game."
      // ]
    },
    {
      role: "Software Engineer II",
      company: "Aristocrat",
      companylogo: require("./assets/images/aristocrat-circle.png"),
      date: "Jan 2021 – Nov 2022",
      // desc: "Pioneered state-of-the-art slot games with advanced Javascript, PHP, captivating over 1.5 million users worldwide.",
      // descBullets: [
      //   "Incorporated Asynchronous Javascript to choreograph cocos-2dx game engine’s sprites, deploying Docker images using Jenkins.",
      //   "Architected 5 contributions to BigFish GDK, developing features and concepts using design patterns like GoF and SOLID.",
      //   "Slashed committing/debugging duration by 50%, automating and integrating committing and linting.",
      //   "Reduced total development time by 30 days, performing successful Proof of Concept for novel game functionality.",
      //   "Boosted user engagement by 15% through successful delivery of Winterland, the studio's most advanced community game."
      // ]
    },
    {
      role: "Software Engineer (Research) Intern",
      company: "BITS, Pilani",
      companylogo: require("./assets/images/BITS_Pilani-Logo.png"),
      date: "Aug 2019 - Nov 2020",
      // desc: "Constructing a GPS Simulator using Python and MATLAB",
      // descBullets: [
      //   "Designed and created a GPS/GNSS simulator using Python, retrieving GPS data from RINEX file, arranging data according to the GPS standard signal structure, including C/A code modulation on L1 carrier signal.",
      //   "Mitigated ionospheric scintillation by 0.5%, by combining two time frequency algorithms using Python- EMD, VMD, Publication.",
      //   "Optimized extraction of S4, TEC scintillation data from GPS signals by 90%, automating the process through code."
      // ]
    },
    {
      role: "Data Science Intern",
      company: "IIT, Delhi",
      companylogo: require("./assets/images/IIT.png"),
      date: "Dec 2019 - Jan 2020",
      // desc: "Studied generalization mechanism of Convolutional Neural Networks",
      // descBullets: [
      //   "Studied generalization mechanism of Convolutional Neural Networks, based on human cognizance of unfamiliar noise by training CNNs on two language MNIST - Hindi and English.",
      //   "Correlated accuracy with controlled variation in noise, based on 10 types of disturbance, for ex. sinusoidal disturbance, Gaussian disturbance."
      // ]
    },
    
    {
      role: "Software Engineer Intern",
      company: "HPCL Ltd.",
      companylogo: require("./assets/images/HPCL.png"),
      date: "Jun 2018 - Aug 2018",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      // descBullets:[
      //   "Automatized Line walker notification reporting, assessing 5 month data using python(NumPy, Pandas).",
      //   "Curated reports and analysis based on 12 different time intervals, optimizing report generation time by 90%."
      // ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "PROJECTS AND RESEARCH WORK",
  projects: [
    {
      image: require("./assets/images/logo-react-js.png"),
      projectName: "BLOG WEB APPLICATION",
      projectDesc: "Blog Web Application using ReactJS and Appwrite.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/PrestoCoder/Blog_ReactJS/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/youtube_clone.png"),
      projectName: "Youtube Clone",
      projectDesc: "MERN Stack Youtube Clone",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/PrestoCoder/Youtube_Clone"
        }
      ]
    },
    {
      image: require("./assets/images/apache.png"),
      projectName: "Hot Spot/Zone Analysis",
      projectDesc: "Hot Spot/Zone Analysis using Apache Spark and Hadoop",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/PrestoCoder/Hot-Spot-Analysis"
        }
      ]
    },
    {
      image: require("./assets/images/segment.jpeg"),
      projectName: "Shaded route detection",
      projectDesc: "Shaded route detection using Image Segmentation",
      footerLink: [
        {
          name: "Visit Website(Private repository)",
          url: "https://github.com/LongchaoDa/Shaded_planning/tree/dev"
        }
      ]
    },
    {
      image: require("./assets/images/alzheimer.webp"),
      projectName: "Preclinical Alzheimer Detection",
      projectDesc: "Preclinical Alzheimer Detection, Graduate Research Associate",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/PrestoCoder/Preclinical-Stage-Alzheimers-Disease-Detection"
        }
      ]
    },
    {
      image: require("./assets/images/nn.pbm"),
      projectName: "Shallow & Deep Learning in Neural Networks",
      projectDesc: "Shallow & Deep Learning in Neural Networks",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/PrestoCoder/Shallow_Deep_Learning"
        }
      ]
    },
    {
      image: require("./assets/images/bayes.png"),
      projectName: "Bayesian Decision Theory",
      projectDesc: "Comparison of PCA-Based Classification with Bayesian Decision Theory",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/PrestoCoder/Bayesian_Decision_Theory"
        }
      ]
    },
    {
      image: require("./assets/images/randomForest.png"),
      projectName: "Random Forest Classification Experiment",
      projectDesc: "Tuning Random Forest classifier by experimenting with hyperparameters",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/PrestoCoder/DecisionTreeClassificationProject"
        }
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-623-759-5186",
  email_address: "rchhibba@asu.edu"
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
  isHireable
};
