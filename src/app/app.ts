import { Component, ElementRef, ViewChild, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  name = 'Morgan Martin';
  title = 'Software Developer'; 
  discordUsername = '387640644551573515'; 

  copyDiscord() {
  navigator.clipboard.writeText(this.discordUsername);
  alert('Discord username copied to clipboard!');
  }
  currentYear = new Date().getFullYear();
  profileImage = 'assets/images/1770637885478.jpg'; 

  introPart1 = 'I am a full-stack developer focused on building reliable software solutions for complex industrial and offshore environments. I specialize in system optimization.';
  introPart2 = 'I am currently seeking a year-long placement in software engineering or system development where I can apply my expertise to real-world, mission-critical projects.';

  about = 'I am a passionate creator focused on solving problems through code.';

  linkedin = 'https://linkedin.com/in/morgan-m-martin';
  github = 'https://github.com/MorganMart1n';

  techStack = [
    { category: 'Languages', items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'PHP', 'SQL','MongoDB'] },
    { category: 'Frameworks', items: ['JavaFX', 'Angular(This website!)', 'React/React Native', 'NodeJS', 'Express', 'Bootstrap','DeepFace'] },
    { category: 'Tools', items: ['Git', 'Figma', 'Linux Cli', 'Azure (Cloud)','Powershell', 'Docker','Android Studio','Uni-Tree Go-1','Gemini AI-Model'] },
    { category: 'Technical Concepts', items: [ 'system behaviour validation', 'Unit Testing','System Testing','Workflow Optimisation', 'REST APIs','Agile/Waterfall Methodologies'] }
  ];


projects = [
  { 
    title: 'Rig-OP', 
    description: 'Offshore operational reporting system designed to streamline and centralize key functions within an offshore environment.',
    tech: ['MongoDB', 'Express.js','React Native', 'Node.js'],
    details: `
    Rig-OP is a personal digital transformation project focused on improving operational efficiency within the offshore energy sector — an industry that remains significantly underdeveloped from a technological perspective.

    The platform centralises multiple offshore workflows into a single operational system. Maintenance management allows personnel to log tasks against specific machinery and operational areas, supported by a risk-assessment prioritisation model that intelligently identifies high-risk equipment and ensures proactive maintenance before failures occur.

    The system also includes integrated inventory and ordering functionality, enabling users to monitor available materials and request parts when required, helping minimise operational downtime and improve job readiness.

    A structured ticket submission system allows teams to report issues and track resolutions efficiently, while a dedicated support module provides both emergency and non-emergency assistance. This includes AI-assisted guidance aligned with company procedures and equipment documentation, delivering immediate operational support directly to offshore personnel.

    This project was developed following research into real-world offshore workflows and operational challenges, with the goal of reducing inefficiencies, improving safety awareness, and supporting data-driven decision-making in offshore operations.
    `,
    isActive: 'Still in Active Development'
  },
  {
    title:'ROI Digital Optimizer',
    description:'Enabled stake holders to look at cost adjusted values, for the ROI of improving legacy systems',
    tech:['React','Express.js','Node.js','MongoDB'],
    details: `
Led a team in developing a full-stack web application using React, Express, Node, and MongoDB, serving as an ROI calculator for operational and financial data. The platform lets users input business metrics and receive detailed financial insights, including total investment costs, risk-adjusted values, and benefit-cost ratios.

With tiered usage models, the system supports both early-stage adoption and advanced operational analysis, enabling organisations to explore digital transformation opportunities at multiple levels. The application provides stakeholders with clear visualisations and reports that highlight cost efficiencies, potential risks, and high-value initiatives, helping them prioritise actions with the greatest impact.

Beyond the financial metrics, the platform guides users in optimising workflows, identifying bottlenecks, and understanding the operational consequences of strategic decisions. Overall, this solution empowers businesses to make data-driven choices, reduce waste, and accelerate technology-driven improvements, enhancing productivity and long-term return on investment.
    
    `,
    isActive: 'Completed Project',
    gif:'/images/fennex.gif'
  },
  { 
    title: 'Sidenote', 
    description: 'Personalised note taking application, focusing on effiency, stability, saftey and useability.',
    tech: ['Java', 'JavaFX'],
    details: ` Sidenote is a personal digital productivity project designed as a response to the limitations and frustrations of paid, bloated note-taking software. The app prioritises user autonomy, performance, and privacy, rejecting unnecessary data collection, intrusive AI features, and restrictive corporate practices.

    The platform provides a fully customisable note-taking environment, allowing users to tailor the appearance, style, and overall feel of the application to their personal workflow. Future updates will introduce integrated drawing capabilities, enhancing the flexibility and creative potential of the system.

    Security and concurrency are central to the application’s design. Notes are encrypted to ensure privacy, while optimised concurrency models maintain high performance even under heavy workloads. The system is engineered to be highly usable, enabling users to interact seamlessly with their notes without frustration or latency.

    This project was developed in response to real-world frustrations with existing software, with the goal of providing a free, reliable, and highly customisable alternative that empowers users to manage their notes, ideas, and workflows exactly how they want.`,
    isActive: 'Still in Active Development',
    gif: '/images/slide.gif'
  },
    { 
    title: 'Fit-Plan', 
    description: 'Proactive platform focusing on improving new-comers to the gym, proving instructional guides, tracking and achievement systems to allow an ecosystem of improvement! ',
    tech: ['JavaScript', 'Express.js', 'Node.js','MongoDB'],
    details:`Developed a full-stack fitness platform using Node, Express, MongoDB, and EJS, designed to help users personalise, track, and gamify their fitness routines. The platform allows users to browse exercises pulled from a dedicated exercise API, categorised by muscle group, body region, and exercise type, providing clear instructions and structured data for safe and effective workouts. Users can create custom workout playlists by selecting exercises, tailoring routines to their personal goals, and log key metrics such as repetitions, sets, and weights. These metrics are stored and visualised over time, enabling progress tracking and insights into performance improvements.
    
      To encourage engagement and motivation, the platform includes a gamified achievement system with Bronze, Silver, and Gold tiers, as well as a leaderboard to showcase top-performing users. Coordinated frontend and backend integration within a small development team to ensure seamless functionality and a responsive user experience, built with Bootstrap for clean design and smooth interactivity. Fitplan combines technical depth with user-centric features, promoting consistent fitness habits, friendly competition, and measurable progress.
    
      
      `,
    gif: '/images/fitplan.gif',
    isActive: 'Completed Project',
    
  },
  { 
    title: 'Facial Emotion Recognition (FER)', 
    description: 'Utilised DeepFace, and python to enable facial Tracking on a Uni-Tree Go-1, to react according to the subjects emotional state.',
    tech: ['Python', 'DeepFace', 'Uni-Tree Go-1'],
    details: `Utilised DeepFace and Python to implement real-time facial tracking on a Uni-Tree Go-1 robot. The system detects and interprets the emotional state of the user such as happiness, surprise, or frustration and allows the robot to respond appropriately.
    
    The goal of this project was to enhance classroom engagement by integrating the Uni-Tree Go-1 robot as a companion that encourages laughter, joy, and emotional interaction. By reacting to the user’s emotions, the robot helps create a more enjoyable and interactive learning environment, boosting mood and making the experience more fun and motivating for students.`,
    isActive: 'Completed Project',
    gif: '/images/Go1.jpeg'
  },
    { 
    title: 'Objectify', 
    description: 'Lead a project in connecting music recommendations via extracting arributes from an image and correlating them with Spotifys Music Data',
    tech: ['TypeScript', 'JavaScript', 'Gemini AI-Model'],
    details: `
    Served as team leader in the development of Objectify, an AI-powered application that connects visual understanding with music discovery. The project explores how artificial intelligence can translate visual emotion and aesthetic into meaningful musical recommendations, creating an interactive experience that bridges computer vision and creative media.

Objectify allows users to upload an image, which is analysed using Google’s Gemini model to extract semantic and emotional attributes such as colour palette, atmosphere, subject composition, and perceived mood. These extracted characteristics are then mapped to Spotify’s audio feature data, including energy, tempo, genre, and emotional tone, enabling the system to generate a curated set of ten musically aligned recommendations that reflect the visual content. The result is both a structured interpretation of the image and a dynamically generated playlist representing its emotional identity.

As team leader, coordinated development direction, system architecture decisions, and collaboration between AI and API integration components. Contributed to interface design, data integration pipelines, prompt engineering, and backend communication between Gemini and Spotify services, ensuring reliable real-time results and seamless cross-API orchestration. The project emphasised experimentation with multimodal AI systems, demonstrating how machine learning can enhance creative exploration while delivering an intuitive and engaging user experience.

Built using JavaScript, Node.js, HTML, and CSS, alongside RESTful API integrations with the Gemini and Spotify platforms, Objectify showcases practical implementation of AI inference, data correlation, and modern web development within a collaborative team environment.
    
    
    
    `,
    isActive: 'Completed Project'
  },
      { 
    title: 'Core-29 Co₂ Project ', 
    description: 'Lead a Team to  transforming sustainable choices into a win: swap high-carbon items, optimize travel with A*, and climb the leaderboard for a greener future.',
    tech: ['PHP', 'JavaScript', 'SQL'],
    details: `
    Developed a multi-objective sustainability platform during the RGU Hackathon, where teams were challenged to address real-world environmental problems within a limited timeframe. Our team successfully implemented solutions covering all three core objectives, using PHP, JavaScript, SQL, HTML, and CSS to deliver a fully functional web-based system.

The first objective focused on reducing product-related CO₂ emissions by enabling users to substitute high-emission items with environmentally friendly alternatives. Each database entry was linked to a specific CO₂ emission value, allowing the system to analyse and recommend comparable items with similar strength, functionality, or purpose but significantly lower carbon impact. This feature promotes informed decision-making and encourages sustainable consumption habits.

The second objective addressed travel-related emissions through intelligent route optimisation. By leveraging geographical and public transport data, the platform implemented the A-star search algorithm to calculate and recommend routes that minimise CO₂ emissions. The system prioritises sustainable travel methods such as walking, cycling, and public transport, providing users with environmentally efficient alternatives to traditional routes.

The third objective introduced a gamified carbon reduction tracking system designed to drive engagement. Users are assigned scores based on their overall CO₂ emission reductions, with lower emissions translating into higher rankings. A public leaderboard fosters friendly competition and motivation, encouraging users to make more sustainable choices consistently.

Overall, the project demonstrates the integration of algorithmic problem-solving, database-driven environmental modelling, and gamified user engagement within a time-constrained hackathon environment, delivering a practical and impactful sustainability solution.
    
    
    
    
    `,
    isActive: 'Completed Project'
  }
];

selectedProject: any = null;

openProject(project: any) {
  this.selectedProject = project;

  document.body.style.overflow = 'hidden';
}

closeProject() {
  this.selectedProject = null;
  document.body.style.overflow = 'auto';
}
  @ViewChild('waveScene', { static: false }) waveScene!: ElementRef<HTMLDivElement>;

  constructor() {

    afterNextRender(() => {
      this.initAnimation();
    });
  }

  getTotalSkills(): number {
    return this.techStack.reduce((acc, group) => acc + group.items.length, 0);
  }

  private initAnimation(): void {
  const scene = this.waveScene?.nativeElement;
  if (!scene) return;

  let targetX = 0;
  let targetY = 0;

  let currentX = 0;
  let currentY = 0;

  let ticking = false;

  const updateTransform = () => {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    scene.style.transform = `
      rotateX(${65 + currentY}deg)
      rotateY(${currentX}deg)
    `;

    ticking = false;

    const profile = document.querySelector('.profile-frame') as HTMLElement;
if (profile) {
  profile.style.transform = `translate(${currentX * -0.5}px, ${currentY * -0.5}px)`;
}
  };

  document.addEventListener('mousemove', (e: MouseEvent) => {
    const px = (e.clientX / window.innerWidth - 0.5);
    const py = (e.clientY / window.innerHeight - 0.5);

    targetX = px * 20;
    targetY = py * -12;

    if (!ticking) {
      requestAnimationFrame(updateTransform);
      ticking = true;
    }
  });
}
}