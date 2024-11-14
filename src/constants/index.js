import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";
import project8 from "../assets/projects/project-8.jpg";

export const HERO_CONTENT = `Hi, I’m Riham Khan, a passionate and dedicated junior pursuing a B.S. in Computer Science at the University of 
South Florida, set to graduate in May 2026. I’m actively seeking a software engineering internship for summer 2025 to further develop my 
skills and gain hands-on experience in the field. Beyond coding, I love exploring new places and have traveled to many countries and states 
across the U.S.—like here at the Washington Monument, capturing memories along the way.`;

export const ABOUT_TEXT = `I'm proficient in Python, C, C++, C#, SQL, JavaScript, and React.js, with a solid foundation in both front-end and 
back-end technologies. Driven by curiosity, I love exploring new programming languages, algorithms, and data structures to sharpen my 
problem-solving skills. As I grow as a developer, I’m excited to collaborate on dynamic teams, tackle challenging projects, and contribute 
to meaningful solutions. Committed to hands-on learning, I look forward to gaining real-world experience in software engineering. And here’s 
a glimpse of my desk setup, complete with my favorite Olipop flavor: Crisp Apple!`;

export const EXPERIENCES = [
  {
    year: "August 2022 - Expected May 2026",
    role: "B.S. in Computer Science",
    company: "University of South Florida",
    description: `Currently a third-year student, building a strong foundation in software development, data structures, and algorithms. 
                  Proficient in multiple programming languages, including Python, C++, and JavaScript, with hands-on experience in projects 
                  ranging from web development to embedded systems using Arduino. 
                  Actively seeking opportunities to apply my skills in a real-world environment through internships.`,
    technologies: ["Python", "C", "C++", "C#", "Javascript", "React.js"],
  },
  {
    year: "Graduated May 2022",
    role: "High School Student",
    company: "Universal Academy of Florida, Tampa, FL",
    description: `Discovered a passion for Computer Science through coursework in Python, completing projects focused on problem-solving 
                  and algorithms. Engaged in self-study and school activities that deepened my interest in software development. Built 
                  foundational skills in coding, critical thinking, and problem-solving, inspiring me to pursue Computer Science in college.`,
    technologies: ["Python"],
  },

];

export const PROJECTS = [
  {
    title: "Arduino Ultrasonic and Motor- Driven Dump Truck ",
    image: project1,
    description:
      "As Software Lead, I programmed an Arduino-based dump truck toy with ultrasonic sensors for obstacle detection and a buzzer for feedback. I collaborated with hardware and design leads to manage motor control and wiring. This project enhanced my skills in embedded systems, C++ programming, and teamwork.",
    technologies: ["C++", "Arduino.ino"],
  },
  {
    title: "Dijkstra’s Algorithm",
    image: project2,
    description:
      "For my Data Structures final project, I implemented Dijkstra's Algorithm in C++ to calculate the shortest path in a graph. I developed components for vertex and edge management, applying priority queue logic for efficiency. This project strengthened my understanding of graph theory, algorithm design, and C++ programming.",
    technologies: ["C++", "Algorithm Design"],
  },
  {
    title: "React Portfolio Website",
    image: project3,
    description:
      "Built a personal portfolio website using React.js with a modern, responsive design, styled with Tailwind CSS and animated with Framer Motion. This site showcases my projects and technical skills in web development. It highlights my proficiency in front-end development and serves as a display for various projects.",
    technologies: ["HTML", "Javascript", "Framer Motion", "React", "Tailwind CSS", "Node.js", "Vite", "GitHub"],
  },
  {
    title: "Regina George Discord Bot",
    image: project4,
    description:
      "Created a Discord bot inspired by Mean Girls’ Regina George, featuring witty, sarcastic responses. Built with Python and discord.py, the bot delivers dynamic, custom phrases and movie quotes. This project demonstrates my skills in asynchronous programming, API integration, and creative bot design.",
    technologies: ["Python", "discord.py", "dotenv"],
  },
  {
    title: "J.E.F.F. Google Voice Assistant",
    image: project5,
    description:
      "This Python-based voice assistant brings my little paper-made dinosaur to life, handling tasks like web browsing, email, and spoken responses. Using speech_recognition to capture commands and gTTS to “speak” through the dinosaur, it responds interactively to user prompts. This project enhanced my skills in Python, voice recognition, and automation while adding a playful touch.",
    technologies: ["Python", "gTTS", "pyAudio", "SpeechRecognition", "smtplib", "Webbrowser", "OS Module", "MPG123"],
  },
  {
    title: "Clock In/Clock Out Website",
    image: project6,
    description:
      "I developed a web application for my dad’s business to streamline employee time tracking. This React-based platform allowed employees to clock in and out, with a weekly log that provided a summary of work hours and performance for easy review. Guided by my experienced cousin, I gathered requirements, designed wireframes, and implemented features to track attendance, punctuality, and work time—all tailored to meet the business’s specific needs.",
    technologies: ["HTML", "Javascript", "Moment.js", "React", "Tailwind CSS", "Node.js", "GitHub"],
  },
  {
    title: "React Portfolio Websites for Clients",
    image: project7,
    description:
      "I'm building custom portfolio websites for fellow college students, using React, JavaScript, and Tailwind CSS to create modern, responsive designs. Each site is tailored to highlight the unique skills and experiences of my clients, helping them showcase their work professionally. As my client base grows, this project allows me to refine my front-end development skills and gain experience in delivering personalized, high-quality websites.",
    technologies: ["HTML", "Javascript", "Framer Motion", "React", "Tailwind CSS", "Node.js", "Vite", "GitHub"],
  },
  {
    title: "Topic Tide: Game Data Insights Platform",
    image: project8,
    description: "I'm currently collaborating with my cousins and a senior developer to build a robust platform for gathering and analyzing game-related data from sources like Reddit and Twitter. This project uses machine learning to organize and process large datasets, providing valuable insights that we report back to game developers, such as those for Minecraft With a focus on database management and data processing, this long-term project aims to deliver a competitive, data-driven solution for the gaming industry.",
    technologies: ["HTML", "Javascript", "MongoDB", "React", "Tailwind CSS", "Node.js", "Express.js", "Vite", "GitHub"],
  },
];

export const CONTACT = {
  address: "Tampa Bay Area, FL",
  phoneNo: "+12 4555 666 00 ",
  email: "khanriham38@gmail.com",
};