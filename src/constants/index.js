import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";


export const HERO_CONTENT = `Welcome to my portfolio! I am a recent BTech graduate with a strong passion for frontend development and a keen interest in React. As a fresher, I am excited to dive into the tech world, leveraging my knowledge to create dynamic and responsive web applications.`;

export const ABOUT_TEXT = `I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly web applications. As a fresher, I'm eager to bring innovative ideas to life through dynamic and responsive web applications`;

export const EXPERIENCES = [
  {
    year: "Jul 2023 - Oct 2023",
    role: "Web Development Intern",
    company: "Internshala Trainings, Virtual",
    description: `Completed an 8-week internship focused on web development, working with HTML, CSS, Bootstrap, DBMS, PHP, JavaScript, and React. Developed a final project by integrating these technologies and achieved top performance in the final assessment.`,
    technologies: ["HTML", "CSS", "Bootstrap", "DBMS", "PHP", "JavaScript", "React"],
  },
  {
    year: "Aug 2022 - Sep 2022",
    role: "Programming Intern (C and C++)",
    company: "Internshala Trainings, Virtual",
    description: `Completed an 8-week internship on programming with C and C++, gaining a solid foundation in object-oriented programming. Created a Cricket Game Application as a final project and ranked among the top performers.`,
    technologies: ["C", "C++", "Object-Oriented Programming"],
  },
  {
    year: "Aug 2021 - Sep 2021",
    role: "Ethical Hacking Intern",
    company: "Internshala Trainings, Virtual",
    description: `Completed an 8-week internship on ethical hacking, learning about information security, web application penetration testing (VAPT), and advanced web attacks. Worked on a final project focused on vulnerability assessments and secure code development.`,
    technologies: ["Ethical Hacking", "VAPT", "OWASP", "SQL Injections", "Web Security"],
  },
];

export const PROJECTS = [
  // {
  //   title: "E-Commerce Website",
  //   image: project1,
  //   description:
  //     "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
  //   technologies: ["Spryker", "B2B Commerce", "MACH Architecture"],
  //    github: "https://github.com/username/E-commerce",
  // },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Framer Motion", "tailwind CSS"],
     github: "https://github.com/muskanchoudhary001/Portfolio-React",
    link: "https://muskanchoudhary.vercel.app/",
  },
  {
    title: "Hangman Game",
    image: project3,
    description:
      "Developed a responsive Hangman game utilizing HTML, CSS, and JavaScript, showcasing proficient front-end development skills. Implemented functionality allowing users to guess letters of a randomly generated word within a limited number of attempts, enhancing user engagement and interaction. Integrated a dynamic hangman illustration feature, progressively revealing incorrect guesses on the gallows, demonstrating creativity and attention to detail in design implementation.",
    technologies: ["HTML", "CSS", "Javascript"],
     github: "https://github.com/muskanchoudhary001/HangmanGame",
    link: "https://hangman-games-lovat.vercel.app/",
  },
  {
    title: "Voice Enabled Note Application",
    image: project4,
    description:
      "A web application that allows users to transcribe speech into text using voice commands. The app includes features such as start, stop, copy, and reset functions, providing a seamless way to take notes by speaking. It leverages Web Speech API for voice recognition.",
    technologies: ["React", "CSS", "Web Speech API", "JavaScript"],
    github: "https://github.com/muskanchoudhary001/Voice_Enabled_Note_Applicatiion",
    link: "https://voice-enabled-note-applicatiion.vercel.app/",
},

];

export const CONTACT = {
  linkedIn: "https://www.linkedin.com/in/pankaj-rao-1a2066183/ ",
  // phoneNo: "+91 8930966990 ",
  email: "pankajpritam10@gmail.com",
};
