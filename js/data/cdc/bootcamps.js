/* ==========================================================================
   CDC Bootcamps Catalog Data — Verified Official IARE Information
   ========================================================================== */

const cdcBootcampsData = {
  metadata: {
    source: "IARE Career Development Center — Bootcamp Program Directory",
    sourceUrl: "https://www.iare.ac.in/?q=pages/skill-development",
    lastVerified: "2026-09",
    academicYear: "2026-27",
    status: "verified"
  },

  description: "Specialized intensive short-term technical training bootcamps organized by CDC to provide hands-on mastery in high-demand industry domains.",

  bootcamps: [
    {
      id: "bootcamp-fullstack",
      name: "Java Full-Stack & Spring Boot Bootcamp",
      purpose: "Intensive hands-on sprint to build end-to-end web applications using Java 17 LTS, Spring Boot REST, and modern frontend frameworks.",
      durationHours: "60 Hours Intensive",
      targetStudents: "B.Tech V & VI Semester Students",
      topics: [
        "Spring Boot RESTful API Architecture",
        "Hibernate ORM & MySQL Persistence",
        "JWT Authentication & Security",
        "Frontend Integration with JavaScript ES6+",
        "Deployment to Cloud Platforms"
      ],
      skills: ["Java 17 LTS", "Spring Boot", "REST APIs", "MySQL", "Hibernate"],
      relatedProgram: "SkillUP / SkillNext",
      image: "assets/images/skillup_banner.png"
    },
    {
      id: "bootcamp-cloud-devops",
      name: "AWS & DevOps Automation Bootcamp",
      purpose: "Mastering cloud deployment, containerization with Docker, Kubernetes cluster orchestration, and CI/CD pipelines.",
      durationHours: "45 Hours",
      targetStudents: "B.Tech VI & VII Semester Students",
      topics: [
        "AWS EC2, S3, IAM, and Serverless Lambda",
        "Git Version Control & Jenkins CI/CD Pipelines",
        "Docker Containerization & Image Registries",
        "Kubernetes Pod Management & Deployment",
        "Infrastructure as Code Basics"
      ],
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Git"],
      relatedProgram: "SkillUP VI Semester Top-Up",
      image: "assets/images/skillnext_banner.png"
    },
    {
      id: "bootcamp-generative-ai",
      name: "Generative AI & Pair Programming Workshop",
      purpose: "Practical application of LLM APIs, prompt engineering, RAG (Retrieval-Augmented Generation), and AI pair programming tools.",
      durationHours: "30 Hours",
      targetStudents: "B.Tech V, VI & VII Semester Students",
      topics: [
        "Prompt Engineering Patterns & Strategies",
        "Building RAG Pipelines with Vector Databases",
        "AI Pair Programming with Copilot & Claude Code",
        "Integrating LLM APIs into Web Applications",
        "Ethical AI & Guardrails"
      ],
      skills: ["Generative AI", "RAG", "Prompt Engineering", "Python", "Vector DBs"],
      relatedProgram: "SkillNext Advanced Track",
      image: "assets/images/skillnext_banner.png"
    },
    {
      id: "bootcamp-competitive-coding",
      name: "BuildIT Competitive Coding & DSA Sprint",
      purpose: "Speed coding, algorithmic optimization, and 40+ pattern mastery to crack first-round technical screening assessments.",
      durationHours: "50 Hours",
      targetStudents: "B.Tech III, IV & V Semester Students",
      topics: [
        "Time & Space Complexity Analysis",
        "Dynamic Programming & Greedy Algorithms",
        "Graph Traversal & Tree Algorithms",
        "Bit Manipulation & Mathematical Puzzles",
        "BuildIT Live Assessment Drills"
      ],
      skills: ["DSA", "Competitive Coding", "Python", "C++", "BuildIT"],
      relatedProgram: "SkillUP / SkillNext III & IV Semester",
      image: "assets/images/hackathon_event.png"
    }
  ]
};

if (typeof window !== 'undefined') {
  window.cdcBootcampsData = cdcBootcampsData;
}
