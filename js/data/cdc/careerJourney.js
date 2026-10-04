/* ==========================================================================
   CDC Career Journey Data — Interactive Semester Timeline
   ========================================================================== */

const cdcCareerJourneyData = {
  metadata: {
    source: "IARE Career Development Center — Semester Progression Framework",
    sourceUrl: "https://www.iare.ac.in/?q=pages/careers-and-employability-skills-training-cest",
    lastVerified: "2026-09",
    academicYear: "2026-27",
    status: "verified"
  },

  semesters: [
    {
      sem: "Semester I & II",
      year: "1st Year B.Tech",
      phase: "Foundational Exploration",
      focus: "Programming Logic & Basics",
      description: "Students establish core mathematical and logical foundations. Introduction to basic computer programming concepts, problem decomposition, and algorithmic thinking.",
      highlights: [
        "C Programming & Computational Thinking",
        "Elementary Problem Solving",
        "Basic Communication Skills & Grammar",
        "BuildIT Orientation & Platform Familiarization"
      ],
      programsActive: ["SkillBridge Prep", "Foundational CEST"]
    },
    {
      sem: "Semester III",
      year: "2nd Year B.Tech",
      phase: "Core Technical & DSA Initiation",
      focus: "Data Structures & Python / Core Java",
      description: "Official start of SkillUP and SkillNext 2-year programs. Entry-level focus on Data Structures, Algorithms, and Competitive Coding with Python & Core Java.",
      highlights: [
        "Data Structures & Algorithms (Arrays, Stacks, Queues, Trees)",
        "Competitive Coding with Python & Core Java Fundamentals",
        "40+ Coding Patterns & Complexity Analysis",
        "Quantitative Aptitude & Logical Reasoning Drills"
      ],
      programsActive: ["SkillUP (Sem III)", "SkillNext (Sem III)", "SkillBridge"]
    },
    {
      sem: "Semester IV",
      year: "2nd Year B.Tech",
      phase: "Database & Object-Oriented Mastery",
      focus: "MySQL Database Design & Java OOPs",
      description: "Deep dive into Database Design, SQL queries, MySQL optimization, and advanced Core Java concepts including Generics, Collections Framework, and Multithreading.",
      highlights: [
        "Database Design, Normalization, & MySQL Queries",
        "Java Generics, Collections Framework, Lambdas, & File Handling",
        "Hands-on Competitive Coding on BuildIT & LeetCode",
        "Interpersonal Communication & Reading Comprehension"
      ],
      programsActive: ["SkillUP (Sem IV)", "SkillNext (Sem IV)"]
    },
    {
      sem: "Semester V",
      year: "3rd Year B.Tech",
      phase: "Full-Stack Development & Applied Projects",
      focus: "Java Full Stack (Spring Boot REST) & Industry Projects",
      description: "Building production-grade web applications with JSP, Servlets, Hibernate, and Spring Boot REST APIs using Java 17 LTS. Execution of at least two industry-oriented projects.",
      highlights: [
        "JSP, Servlets, Hibernate, & Spring Framework (Java 17 LTS)",
        "Spring Boot REST APIs & JavaScript Frontend Integration",
        "Execution of 2+ Industry/Application-Oriented Projects",
        "Resume Building, GitHub Repository Curation, & LinkedIn Branding"
      ],
      programsActive: ["SkillUP (Sem V)", "SkillNext (Sem V)", "AI Experience Center"]
    },
    {
      sem: "Semester VI",
      year: "3rd Year B.Tech",
      phase: "Specialized Top-Ups & Summer Refresher",
      focus: "Cloud, DevOps, AI Specialization & Skill Refresher",
      description: "Exposure to Cloud Application Development (AWS/Azure/Aneka), DevOps pipelines (Git, Jenkins, Docker, Kubernetes), and participation in the 1-Month Summer Skill Refresher Program.",
      highlights: [
        "Cloud Application Development (AWS, Azure, Aneka)",
        "DevOps Automation (Git, Jenkins, Maven, Docker, Kubernetes)",
        "1-Month Skill Refresher Program (Aptitude, Tech & Soft Skills)",
        "Mock Interview Drives & Darpan Resume Review Panels"
      ],
      programsActive: ["SkillUP (Sem VI)", "SkillNext (Sem VI)", "Skill Refresher Program"]
    },
    {
      sem: "Semester VII & VIII",
      year: "4th Year B.Tech",
      phase: "PAT Recruitment Drives & Career Placement",
      focus: "Campus Recruitment & Industry Placement",
      description: "Integration with Placement and Training (PAT) office. On-campus recruitment drives by 62+ software and core companies, mock technical rounds, HR interviews, and offer evaluations.",
      highlights: [
        "62+ Core & Software MNC Campus Placement Drives",
        "Mock Technical & HR Interviews by External Experts",
        "Product-Based & Core Engineering Interview Drills",
        "Final Internship & Offer Letter Transition"
      ],
      programsActive: ["PAT Campus Placement Drives", "SkillNext Advanced"]
    }
  ]
};

if (typeof window !== 'undefined') {
  window.cdcCareerJourneyData = cdcCareerJourneyData;
}
