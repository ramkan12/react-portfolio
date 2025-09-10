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
    description:
      "I developed a web application for my dad’s business to streamline employee time tracking. This React-based platform allowed employees to clock in and out, with a weekly log that provided a summary of work hours and performance for easy review. Guided by my experienced cousin, I gathered requirements, designed wireframes, and implemented features to track attendance, punctuality, and work time—all tailored to meet the business’s specific needs.",
    technologies: ["HTML", "Javascript", "Moment.js", "React", "Tailwind CSS", "Node.js", "GitHub"],
  },
  {
    title: "React Portfolio Website",
    image: project3,
    description:
      "Built a personal portfolio website using React.js with a modern, responsive design, styled with Tailwind CSS and animated with Framer Motion. This site showcases my projects and technical skills in web development. It highlights my proficiency in front-end development and serves as a display for various projects.",
    technologies: ["HTML", "Javascript", "Framer Motion", "React", "Tailwind CSS", "Node.js", "Vite", "GitHub"],
  },
  {
    title: "Expense Tracker",
    image: project4,
    description: `Developed a Python-based application designed to help users manage their monthly budgets and minimize unnecessary expenses. 
                  The tool tracks and categorizes spending, offering real-time data entry, budget comparison, and automated summaries. 
                  Users benefited from detailed visualizations and actionable insights, enabling better financial decision-making.`,
    technologies: ["Python", "pandas", "matplotlib", "tkinter", "sqlite", "Excel"],
  },
  {
    title: "J.E.F.F. Google Voice Assistant",
    image: project5,
    description:
    "This Python-based voice assistant brings my little paper-made dinosaur to life, handling tasks like web browsing, email, and spoken responses. Using speech_recognition to capture commands and gTTS to “speak” through the dinosaur, it responds interactively to user prompts. This project enhanced my skills in Python, voice recognition, and automation while adding a playful touch.",
    technologies: ["Python", "gTTS", "pyAudio", "SpeechRecognition", "smtplib", "Webbrowser", "OS Module", "MPG123"],
  },
  {
    title: "Dijkstra’s Algorithm",
    image: project6,
    description:
    "For my Data Structures final project, I implemented Dijkstra's Algorithm in C++ to calculate the shortest path in a graph. I developed components for vertex and edge management, applying priority queue logic for efficiency. This project strengthened my understanding of graph theory, algorithm design, and C++ programming.",
    technologies: ["C++", "Algorithm Design"],
  },
  {
    title: "Regina George Discord Bot",
    image: project7,
    description:
      "Created a Discord bot inspired by Mean Girls’ Regina George, featuring witty, sarcastic responses. Built with Python and discord.py, the bot delivers dynamic, custom phrases and movie quotes. This project demonstrates my skills in asynchronous programming, API integration, and creative bot design.",
    technologies: ["Python", "discord.py", "dotenv"],
  },
  {
    title: "Arduino Ultrasonic and Motor- Driven Dump Truck ",
    image: project8,
    description:
      "As Software Lead, I programmed an Arduino-based dump truck toy with ultrasonic sensors for obstacle detection and a buzzer for feedback. I collaborated with hardware and design leads to manage motor control and wiring. This project enhanced my skills in embedded systems, C++ programming, and teamwork.",
    technologies: ["C++", "Arduino.ino"],
  },
];

export const CONTACT = {
  address: "Tampa Bay Area, FL",
  phoneNo: "+12 4555 666 00 ",
  email: "khanriham38@gmail.com",
};