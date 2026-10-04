/* ==========================================================================
   CDC SkillUP Program Data — 100% Verified from Official IARE Website
   ========================================================================== */

const cdcSkillUpData = {
  id: "skillup",
  name: "SkillUP Program",
  tagline: "Empowering Advanced Learners with 800+ Hours of Full-Stack & Industry Training",
  targetGroup: "Advanced Learners",
  trainingHours: "800+ Training Hours",
  targetSemesters: "B.Tech III, IV, V and VI Semester",
  duration: "2-Year Comprehensive Program (Starting III Semester)",
  heroImage: "assets/images/skillup_banner.png",

  metadata: {
    source: "IARE Official SkillUP Program Page",
    sourceUrl: "https://www.iare.ac.in/?q=pages/skillup",
    lastVerified: "2026-09",
    academicYear: "2026-27",
    status: "verified"
  },

  overview: "SkillUP is a 2-year institutional flagship program designed to empower advanced learners starting from B.Tech III semester. With 800+ training hours spread across four semesters, the program systematically transforms students into proficient software engineers equipped with DSA, Java Full Stack, Cloud, DevOps, Quantitative Aptitude, and Professional Communication.",

  semesterProgression: [
    {
      semester: "III Semester",
      title: "Data Structures, Algorithms & Competitive Coding",
      description: "Entry-level focus on mastering data structures and algorithms with competitive coding in Python. Students build algorithmic thinking and learn time/space complexity.",
      topics: [
        "Fundamentals of programming & algorithmic complexity",
        "Important concepts of data structures & algorithms",
        "Problem solving using more than 40 coding patterns",
        "Usage of multiple coding platforms (BuildIT, HackerRank)",
        "Efficient implementation of mathematical algorithms"
      ]
    },
    {
      semester: "IV Semester",
      title: "Database Design, MySQL & Core Java Fundamentals",
      description: "Introduction to database design with MySQL, alongside solid Core Java fundamentals.",
      topics: [
        "Database design, normalization, & schema building",
        "MySQL data types, joins, functions, & complete query series",
        "Core Java concepts: Java Generics & Collections Framework",
        "Lambda expressions, multithreading, & file handling"
      ]
    },
    {
      semester: "V Semester",
      title: "Java Full Stack Development & Industry Projects",
      description: "Web development with JSP, Servlets, Hibernate, and Spring framework built on Java 17 LTS, with Spring Boot RESTful APIs.",
      topics: [
        "Java Server Pages (JSP), Servlets, & JSTL",
        "Hibernate & Spring Framework (Java 17 LTS)",
        "Spring Boot RESTful APIs & Web Services",
        "JavaScript basics for dynamic interactive web pages",
        "Completion of at least 2 industry/application-oriented projects"
      ]
    },
    {
      semester: "VI Semester",
      title: "Cloud, DevOps, Puzzles & Aptitude Refresher",
      description: "Top-up courses in Cloud Application Development, DevOps, Programming Puzzles, Networks, and Aptitude.",
      topics: [
        "Cloud Application Development (AWS, Google Cloud, Azure, Aneka)",
        "DevOps pipeline: Git, Jenkins, Maven, Docker, Kubernetes",
        "Computer Networks: OSI reference model, TCP/IP, sockets",
        "Programming Puzzles: Digits, blood relations, seating arrangements",
        "Quantitative Aptitude, Reasoning, & Professional Communication"
      ]
    }
  ],

  skillsCovered: [
    "Competitive Coding",
    "Database Design and MySQL",
    "Java Full Stack Development",
    "Cloud Application Development",
    "DevOps",
    "Computer Networks",
    "Programming Puzzles",
    "Quantitative Aptitude and Reasoning",
    "Professional Communication"
  ],

  projectsAndAssessment: {
    projectsRequired: "Minimum 2 Industry / Application-Oriented Projects",
    assessmentPlatform: "BuildIT Platform (In-house Programming Assessment)",
    evaluationMode: "Automated test cases, code quality checks, and faculty code reviews"
  },

  faq: [
    {
      question: "Who is eligible for the SkillUP Program?",
      answer: "SkillUP is aimed at Advanced Learners enrolled in B.Tech III, IV, V, and VI Semesters. Specific selection criteria are determined by CDC for each academic cycle."
    },
    {
      question: "What is the total duration and training hours?",
      answer: "SkillUP spans 2 academic years (Semesters III through VI) comprising over 800+ total training hours."
    },
    {
      question: "Are projects mandatory in SkillUP?",
      answer: "Yes, students complete at least two industry or application-oriented projects in addition to their regular academic curriculum."
    }
  ]
};

if (typeof window !== 'undefined') {
  window.cdcSkillUpData = cdcSkillUpData;
}
