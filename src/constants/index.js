import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Software Simulation Intern (Virtual)",
        company_name: "JPMorgan Chase & Co.",
        icon: meta,
        iconBg: "#accbe1",
        date: "Sep 2024",
        points: [
            "Completed the first phase of a virtual internship program, focusing on financial software simulations.",
            "Utilized Python to develop and enhance solutions for financial data analysis and reporting.",
            "Gained hands-on experience with financial models, algorithm optimization, and data visualization techniques.",
            "Collaborated on simulated projects that emphasized real-world applications of financial technology.",
            "Demonstrated problem-solving skills by addressing critical challenges in a simulated professional environment.",

        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/xing24xing',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/khushi-pandey3/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'SnapeShare - Social Media Platform',
        description: 'SnapeShare is a feature-rich platform designed to revolutionize social media interactions. It allows users to post images with Cloudinary integration, engage in real-time chats using WebSockets, and interact with content through likes, dislikes, saves, and comments.',
        link: 'https://snapesharing.onrender.com/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Xero - Minimalist Front Page Design',
        description: 'Xero is a clean and responsive front-page design built for modern web applications. It focuses on delivering a minimalistic and efficient user experience.',
        link: 'https://xerot.netlify.app/',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Zentry - Dynamic 3D Web Page',
        description: 'Zentry is a visually immersive front page that integrates 3D animations using Three.js and dynamic transitions powered by GSAP to captivate users.',
        link: 'https://awwardwinning.netlify.app/',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'ChatterGig - Real-Time Chat Application',
        description: 'ChatterGig is a modern communication platform enabling real-time conversations with advanced features like emoji support and secure authentication, including login, signup, and logout.',
        link:'https://chattergig.onrender.com/',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'MovieScope - Movie Review Application',
        description: 'MovieScope is a full-stack MERN application designed for movie enthusiasts to explore, review, and discuss their favorite movies. It offers an interactive platform for users to share opinions and discover new films',
        link: 'https://github.com/xing24xing/MovieReview.git',
    },
];