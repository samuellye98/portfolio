export const projectData = [
  {
    name: 'A.L.I.C.E.',
    summary:
      'Analyzing Language Interface Created for Everyone (A.L.I.C.E.) is a visualization dashboard for text documents using state of the art natural langugae processing models.',
    github: 'https://github.com/luketankw/ALICE',
    description: [
      'Automatic text summarization methods are greatly needed to address the ever-growing amount of text data available online to both better help discover relevant information and to consume relevant information faster.',
      'Analyzing Language Interface Created for Everyone (A.L.I.C.E.) is purposed to summarize text documents and output informative visualization displays that quickly and easily communicate the contents of the text to the user.',
      'The key components of A.L.I.C.E. are the Frontend (React, D3), Backend (Flask, Machine Learning models), as well as Containers (Docker, Openshift).',
    ],
    image: require('../../static/images/projects/alice.png'),
    date: 2020,
    skills: [
      'Docker',
      'Flask',
      'Keras',
      'MongoDB',
      'Openshift',
      'React',
      'Redux',
      'Tensorflow',
    ],
  },
  {
    name: 'OpenCerts',
    summary:
      'A digital certificate framework to issue and verify education credentials on the blockchain.',
    github: 'https://github.com/OpenCerts',
    link: 'https://opencerts.io',
    description: [
      'My first project at Govtech Singapore as part of the Distributed Ledger Team. OpenCerts is an open-source platform, built using the OpenAttestation standard, for issuing and validating tamper-resistant digital academic certificates.',
      'My initial task was to maintain code of the online website to ensure mobile and cross-platform responsiveness. I also helped to write documentation for the OpenCerts procedure and implement unit and integration tests for the online website.',
      'Near the end of my internship, I worked on a decentralized document renderer. This renderer is a static website that will take in the OpenCerts document in the unwrapped form and generates its corresponding HTML code for rendering.',
    ],
    image: require('../../static/images/projects/opencerts.png'),
    date: 2019,
    skills: ['React', 'Redux', 'Typescript'],
  },
  {
    name: 'SGWorkPass',
    summary:
      'A beta-version mobile app to check the validity of work passes / long term passes issued by the Singapore Ministry of Manpower (MOM).',
    github: null,
    link: 'https://www.mom.gov.sg/eservices/sgworkpass',
    description: [
      'I worked with a small team of engineers and designers to create a beta product of SGWorkPass using smart contracts on the Ethereum blockchain to store cryptographic proofs of individual documents.',
      "At the end of the project, we created a working mobile application that could store a work pass and instantly verify any work pass' validity by scanning its QR code. We also created a Telegram chat bot to act as a server-side interface.",
    ],
    image: require('../../static/images/projects/workpass.png'),
    date: 2019,
    skills: ['AWS', 'Expo', 'React', 'Redux', 'TypeScript'],
  },
  {
    name: 'Minibot',
    summary:
      'A React-based web application that allows users to run simple algorithms on their minibot, control their minibot and send custom scripts.',
    github: 'https://github.com/cornell-cup/cs-reminibot',
    link: null,
    description: [
      'Minibot is a modular robotics kit meant for children and students from age 6 - 18, developed in partnership with Cornell Cup Robotics and DaVinci Robotics.',
      'I contributed extensively to the React frontend and Blockly interface of the web app that allows users to save and send custom scripts for their Minibots.',
    ],
    image: require('../../static/images/projects/minibot.png'),
    date: '2019 - 2020',
    skills: ['Javascript', 'Python', 'React'],
  },
  {
    name: 'Cornell Lambda Phi Epsilon Website',
    summary:
      'Re-designed and developed a website for Lambda Phi Epsilon International Fraternity Inc. (Alpha Kappa Chapter) at Cornell University.',
    link: 'https://culambdas.com',
    github: null,
    description: [
      'The original website used Wix and was not as responsive and customizable. Therefore, I embarked on this project with a fellow brother in my fraternity to redesign a website that would be more user-friendly and maintainable by future generations.',
      'I built this web application using React and hosted it using Github Pages.',
    ],
    image: require('../../static/images/projects/culambdas.jpg'),
    date: 2021,
    skills: ['React'],
  },
  {
    name: 'Cornell Secret Santa',
    summary:
      'A React web-app to match Cornell students for a Secret Santa gift exchange.',
    github: null,
    link: 'https://cornell-secret-santa.web.app/',
    description: [
      'At Cornell, academic, professional and social pressures can suddenly become overwhelming and exhausting.',
      'We wanted to create a Christmas event that would bring the community together to destress before finals and allow students to meet new people and make new friends through a campus-wide Secret Santa.',
      'In 2 weeks, I collaborated with a group of 6 students to build a React web app and a matching algorithm in Python. Our event ended up attracting around 100 participants.',
    ],
    image: require('../../static/images/projects/secretsanta.png'),
    date: 2019,
    skills: ['CSS3', 'Flask', 'HTML5', 'React'],
  },
  {
    name: 'Cornell Cup Robotics Website',
    summary:
      'Re-designed and developed a website for the Cornell Cup Robotics Team at Cornell University.',
    github: 'https://github.com/cornell-cup/cornell-cup.github.io',
    link: 'https://cornellcuprobotics.com/index.html',
    description: [
      'I built a new website for my project team - Cornell Cup Robotics Team - at Cornell University, primarily using HTML, CSS, JavaScript, and Jekyll.',
    ],
    image: require('../../static/images/projects/ccup.png'),
    date: '2019 - 2020',
    skills: ['CSS3', 'HTML5', 'Javascript', 'Node', 'Jekyll'],
  },
  {
    name: 'Corsell',
    summary:
      'Hackathon project created at BigRed//Hacks (2018) to bring a student e-commerce platform to Cornell University',
    github: 'https://github.com/samuellye98/corsell',
    link: null,
    description: [
      'The initial version of Corsell was a web app created during BigRed//Hacks (2018) using Flask, Jinja, Node.js, and PostgreSQL.',
      'The current work in progress version is developed using Expo, Firebase, and React Native. Features such as logging in/out, and uploading item descriptions and photos are available. Search and chat feature to be implemented in the future.',
    ],
    image: require('../../static/images/projects/corsell.png'),
    date: '2018 - 2019',
    skills: ['Expo', 'Firebase', 'Javascript', 'React', 'Redux'],
  },
];
