export const projects = [
  {
    name: "ICT Skill Recommendation System",
    image: "/project/ict.png",
    description:
      "A full-stack web application that analyzes job market trends and recommends relevant ICT skills for users.",

    features: [
      "Job trend visualization",
      "Skill recommendation system",
      "Job search by skill",
      "Web scraping job data",
    ],

    tech: ["Nuxt 3", "FastAPI", "MySQL", "Python"],

    github: "https://github.com/Zozimboii/ICT-Skill-Recommendation-Frontend",
    demo: [],
  },

  {
    name: "Food Ordering Web App",
    image: "/project/shopfood.png",

    description:
      "A web application that allows users to browse food menus and place orders with an interactive UI.",

    features: ["Food menu browsing", "Cart system", "Order management"],

    tech: ["Vue", "JavaScript", "CSS", "PgAdmin", "HeidiSQL"],

    github: "https://github.com/Zozimboii/ShopFood-Front-end",
    demo: [],
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

    tech: ["Flutter", "Dart"],

    github: "https://github.com/Zozimboii/Music-Player",
    demos: [
      { name: "UI Demo", url: "https://www.youtube.com/shorts/NPY9mpHrUZA" },
      {
        name: "Login System",
        url: "https://www.youtube.com/watch?v=lMjltLcFiEk",
      },
    ],
  },
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

    tech: ["Nuxt3", "Nestjs", "PostgreSQL", "Docker", "ImmuDB"],

    demos: [],
    github: null,
    note: "Source code cannot be shared due to company policy.",
  },
];
