export const projects = [
  {
    name: "Immutable Digital Contract & Audit Trail System",
    image: "/project/somsri.png",
    description:
      "Internal manufacturing contract system that generates immutable specification sheets and maintains an append-only audit trail to ensure production transparency and prevent post-production disputes.",

    features: [
      "Factory workflow management",
      "Immutable specification sheet locking",
      "PDF contract generation for client/company",
      "Append-only audit trail for production events",
    ],

    tech: [
      "Nuxt 3",
      "Nestjs",
      "PostgreSQL",
      "Docker",
      "ImmuDB",
      "Tailwind CSS",
    ],

    demos: [],
    githubs: [],
    note: "Source code cannot be shared due to company policy.",
  },
  {
    name: "ICT Job Skill Recommendation System",
    image: "/project/ict.png",
    description:
      "A full-stack web application that analyzes job market trends and recommends relevant ICT skills for users.",

    features: [
      "Job trend visualization",
      "Skill recommendation system",
      "Job search by skill",
      "Web scraping job data",
    ],

    tech: ["Nuxt 3", "FastAPI", "MySQL", "Python", "Tailwind CSS"],

    githubs: [
      {
        name: "Github Frontend",
        url: "https://github.com/Zozimboii/ICT-Skill-Recommendation-Frontend",
      },
      {
        name: "Github Backend",
        url: "https://github.com/Zozimboii/ICT-Skill-Recommendation-Backend",
      },
    ],
    demos: [
      {
        name: "System Concept &Skill Trends & Job Search",
        url: "https://youtu.be/FI7PBpGdnkY",
      },
      {
        name: "AI Skill Analysis & User Assessment",
        url: "https://youtu.be/lKsy3q15cvY",
      },
      {
        name: "User Dashboard & System Management",
        url: "https://youtu.be/nREshTdHzn0",
      },
    ],
  },

  {
    name: "Music Player Mobile App",
    image: "/project/music.png",

    description:
      "A Flutter-based music player application with authentication and playlist management.",

    features: [
      "User login / signup",
      "Playlist creation",
      "Music player interface",
    ],

    tech: ["Flutter", "Dart", "C++", "Firebase"],

    githubs: [
      { name: "Github", url: "https://github.com/Zozimboii/Music-Player" },
    ],
    demos: [
      { name: "UI Demo", url: "https://www.youtube.com/shorts/NPY9mpHrUZA" },
      {
        name: "Login System",
        url: "https://www.youtube.com/watch?v=lMjltLcFiEk",
      },
    ],
  },
  {
    name: "Food Ordering Web App",
    image: "/project/shopfood.png",

    description:
      "A comprehensive full-stack e-commerce platform for restaurants, featuring a dynamic menu system, real-time cart calculations, and a robust relational database for order management.",

    features: [
      "Dynamic product filtering by category (Maindish/Drink)",
      "Real-time persistent shopping cart with automated total calculation",
      "User profile management with secure image upload and data persistence",
      "Automated order ID generation and transaction history tracking",
      "RESTful API documented and tested using Swagger UI",
    ],

    tech: [
      "Vue 3",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Tailwind CSS",
      "Swagger",
    ],

    githubs: [
      {
        name: "Github Frontend",
        url: "https://github.com/Zozimboii/ShopFood-Front-end",
      },
      {
        name: "Github Backend",
        url: "https://github.com/Zozimboii/ShopFood-Back-end",
      },
    ],
    demos: [
      { name: "SWAGGER TEST FOODSHOP", url: "https://youtu.be/oCvbD9eg_-Y" },
      {
        name: "FOODSHOP VIDEO DEMO",
        url: "https://youtu.be/REF7OBksKoc",
      },
    ],
  },
  {
    name: "Full-Stack Task Management System",
    image: "/project/todolists.png",
    description:
      "A comprehensive task management application featuring a RESTful API backend and a responsive Vue.js frontend, focusing on seamless state management and persistent data storage.",

    features: [
      "Real-time task CRUD operations",
      "Dynamic search filtering with pattern matching",
      "Status toggle with persistent database updates",
      "Responsive design with Tailwind CSS",
    ],

    tech: ["Vue 3", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],

    githubs: [
      {
        name: "Github Frontend",
        url: "https://github.com/Zozimboii/todo-list-front-end",
      },
      {
        name: "Github Backend",
        url: "https://github.com/Zozimboii/todo-list-back-end",
      },
    ],
    demos: [
      { name: "Test UI", url: "https://youtu.be/ayRj2IyyVZA" },
      {
        name: "Test Postman API",
        url: "https://youtu.be/A9fvUznlIos",
      },
    ],
  },
];
