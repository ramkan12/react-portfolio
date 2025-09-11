import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";
import project8 from "../assets/projects/project-8.jpg";

export const HERO_CONTENT = `Hi, I'm Riham Khan, a passionate and dedicated senior pursuing a B.S. in Computer Science at the University of 
South Florida, set to graduate in May 2026. I'm actively seeking software engineering opportunities for summer 2025 and beyond to further 
develop my skills and gain hands-on experience in the field. Beyond coding, I love exploring new places and have traveled to many countries 
and states across the U.S.—like here in New York City, capturing memories along the way.`;

export const ABOUT_TEXT = `I'm proficient in Python, JavaScript, TypeScript, SQL, and Go, with expertise in modern full-stack 
technologies including React, Node.js, and cloud platforms. Driven by curiosity, I love exploring emerging technologies, algorithms, and 
system design patterns to sharpen my problem-solving skills. As I grow as a developer, I'm excited to collaborate on dynamic teams, tackle 
challenging projects, and contribute to scalable solutions. Committed to continuous learning, I look forward to gaining real-world experience 
in software engineering. And here's a glimpse of my desk setup, complete with my favorite Olipop flavor: Crisp Apple!`;

export const EDUCATION = [
  {
    year: "August 2022 - Expected May 2026",
    role: "B.S. in Computer Science",
    company: "University of South Florida",
    description: `Senior with full-stack development experience in C++, C#, Python, and Java. Completed coursework in Data Structures, 
    Analysis of Algorithms, Software Engineering, and Database Design.`,
    technologies: ["Python", "C", "C++", "C#", "Javascript", "React.js", "Java", "SQL"],
  },
  {
    year: "Graduated May 2022",
    role: "High School Student",
    company: "Universal Academy of Florida, Tampa, FL",
    description: `Discovered passion for Computer Science through Python coursework and algorithm projects. Built foundational coding and 
    problem-solving skills that inspired pursuit of CS in college.`,
    technologies: ["Python"],
  },

];

export const EXPERIENCES = [
  {
    year: "August 2024 - May 2025",
    role: "Freelance Front-End Developer",
    company: "Independent Contractor",
    description: `Developed custom portfolio websites for clients. Delivered responsive, modern designs that helped clients 
    showcase their work professionally to potential employers.`,
    technologies: ["HTML", "JavaScript", "React", "Tailwind CSS", "Framer Motion", "Node.js", "Vite", "GitHub"],
  },
  {
    year: "May 2024 - August 2024",
    role: "Technical Assistant",
    company: "Global Vision, Ft. Lauderdale, FL",
    description: `Supported SQL database operations and reporting for ERP systems serving enterprise clients in retail and luxury 
    goods sectors.`,
    technologies: ["SQL", "ERP Systems"],
  },
  {
    year: "May 2022 - August 2023",
    role: "UI/UX Designer Intern",
    company: "Inner Vision Inc., St. Petersburg, FL",
    description: `Designed app wireframes and user interface mockups in Figma for a mobile application, conducting design research 
    to inform usability decisions.`,
    technologies: ["Figma", "UI/UX Design"],
  },
];


export const PROJECTS = [
  {
    title: "Clock In/Clock Out Website",
    image: project2,
    description: "Full-stack employee time tracking application with Go backend and React TypeScript frontend. Features JWT authentication, geolocation verification for fraud prevention, and vacation management with real-time status updates.",
      technologies: ["Go", "Gin Framework", "SQLite", "React", "TypeScript", "JWT Authentication", "RESTful APIs", "Geolocation API"],
  },
  {
    title: "AI Resume Analyzer & Generator",
    image: project3,
    description: "Python web application using Streamlit and OpenAI's GPT API to analyze resumes and provide personalized feedback. Features PDF text extraction and real-time AI-powered suggestions tailored to specific job roles.",
    technologies: ["Python", "Streamlit", "OpenAI GPT API", "PyPDF2", "File I/O", "Natural Language Processing"],
  },
  {
    title: "Smart Expense Tracker Desktop Application",
    image: project4,
    description: "Desktop financial management application using Python with multi-tab GUI interface. Features SQLite database integration, budget tracking, and interactive matplotlib visualizations for spending analysis.",
    technologies: ["Python", "Tkinter", "SQLite", "matplotlib", "pandas", "tkcalendar"],
  },
  {
    title: "J.E.F.F. Voice Assistant",
    image: project5,
    description: "Python intelligent assistant with natural language processing, web automation, and conversation capabilities. Features time/date functions, calculations, and modular architecture for feature expansion.",
    technologies: ["Python", "SpeechRecognition", "gTTS", "webbrowser", "datetime", "random", "requests"],
  },
  
  {
    title: "Dijkstra's Algorithm",
    image: project6,
    description: "Implemented Dijkstra's shortest path algorithm in C++ with vertex/edge management and priority queue optimization. Demonstrates understanding of graph theory, algorithm design, and efficient data structures.",
    technologies: ["C++", "Algorithm Design", "Data Structures", "Graph Theory"],
  },
  {
    title: "Regina George Discord Bot",
    image: project7,
    description: "Discord bot with witty, sarcastic responses built using Python and discord.py. Features dynamic custom phrases and demonstrates asynchronous programming and API integration skills.",
    technologies: ["Python", "discord.py", "API Integration", "Asynchronous Programming"],
  },
  {
    title: "Autonomous Arduino Dump Truck",
    image: project8,
    description: "Developed autonomous navigation system using three ultrasonic sensors for 360-degree obstacle detection with differential steering control and audio feedback. Implemented intelligent turning logic based on sensor data comparison.",
    technologies: ["C++", "Arduino", "Embedded Systems", "Autonomous Navigation", "Sensor Integration"],
  }
];

export const CONTACT = {
  address: "Tampa Bay Area, FL",
  phoneNo: "+12 4555 666 00 ",
  email: "khanriham38@gmail.com",
};