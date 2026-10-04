/* ==========================================================================
   CDC SkillNext Program Data — 100% Verified from Official IARE Website
   ========================================================================== */

const cdcSkillNextData = {
  id: "skillnext",
  name: "SkillNext Program",
  tagline: "Empowering Active Learners with Advanced Industry Skills & Emerging Tech Specializations",
  targetGroup: "Active Learners",
  trainingHours: "800+ Training Hours",
  targetSemesters: "B.Tech III, IV, V and VI Semester",
  duration: "Multi-Semester Innovation & Employability Program",
  heroImage: "assets/images/skillnext_banner.png",

  metadata: {
    source: "IARE Official SkillNext Program Page",
    sourceUrl: "https://www.iare.ac.in/?q=pages/skillnext-program",
    lastVerified: "2026-09",
    academicYear: "2026-27",
    status: "verified"
  },

  overview: "SkillNext empowers active learners with next-generation technologies, advanced industry skills, and innovation-driven learning experiences. Spread across 800+ training hours from III to VI semesters, SkillNext enables learners to specialize in high-demand domains such as Artificial Intelligence, Data Science, Generative AI, Cloud Computing, Cyber Security, and Mobile Application Development.",

  progressionPhases: [
    {
      phase: "Entry Phase (III & IV Semesters)",
      title: "Core Software Engineering & Competitive Coding",
      description: "Students establish strong software development foundations in Data Structures, Algorithms, Core Java, MySQL database solutions, and creative coding.",
      details: [
        "III Semester: Data Structures & Algorithms + Core Java concepts",
        "IV Semester: Competitive Coding, MySQL database solutions, & multi-platform coding",
        "System design concepts, database optimization, & REST API development",
        "Cloud-native architectures & scalable software engineering methodologies"
      ]
    },
    {
      phase: "Advanced Phase (V & VI Semesters)",
      title: "Emerging Domain Specializations & Deep-Tech",
      description: "Specialization in cutting-edge technology domains with practical implementation through case studies, hackathons, and industry projects.",
      details: [
        "Creative Coding, Java Full Stack, Web and Mobile App Development",
        "Artificial Intelligence, Machine Learning, & Deep Learning",
        "Data Science & Generative AI applications",
        "Cloud Computing, Cyber Security, & DevOps automation",
        "Industry-oriented courses, project-based learning, & hackathons"
      ]
    },
    {
      phase: "Employability & Career Readiness",
      title: "Interview Mastery, Portfolio & Personal Branding",
      description: "Comprehensive preparation for technical and corporate selection processes.",
      details: [
        "Professional Communication & Accent Neutralization",
        "Quantitative Aptitude & Logical Reasoning Drills",
        "Resume Building, GitHub Portfolio Curation, & LinkedIn Branding",
        "Interview Preparation, Mock Technical Rounds, & HR Drills"
      ]
    }
  ],

  skillsCovered: [
    "Competitive Coding",
    "Database Solutions (MySQL)",
    "Java Full Stack Development",
    "Cloud Application Development",
    "DevOps",
    "Web and Mobile App Development",
    "Artificial Intelligence & Machine Learning",
    "Generative AI & Data Science",
    "Cyber Security",
    "Quantitative Aptitude & Reasoning",
    "Professional Communication",
    "Industry Projects & Innovation Challenges"
  ],

  differentiatorsFromSkillUp: [
    {
      aspect: "Target Learner Profile",
      skillUp: "Advanced Learners seeking structured 2-year full-stack engineering track.",
      skillNext: "Active Learners focusing on emerging tech specializations (AI, ML, Cloud, Cyber Security, Mobile)."
    },
    {
      aspect: "Advanced Domain Exposure",
      skillUp: "Core focus on Java Full Stack (Spring Boot REST), AWS/Azure, DevOps, and Puzzles.",
      skillNext: "Additional exposure to Generative AI, Deep Learning, Data Science, Cyber Security, & Mobile App Dev."
    },
    {
      aspect: "Personal Branding & Portfolio",
      skillUp: "Emphasis on 2 application projects and BuildIT coding proficiency.",
      skillNext: "Expanded focus on GitHub repository curation, LinkedIn branding, product hackathons, and career readiness."
    }
  ],

  faq: [
    {
      question: "What makes SkillNext different from SkillUP?",
      answer: "While both programs offer 800+ hours across III-VI semesters, SkillNext focuses on active learners with extra emphasis on emerging deep-tech specializations like Generative AI, Machine Learning, Cyber Security, and Mobile App Development."
    },
    {
      question: "How are students assessed in SkillNext?",
      answer: "Assessment is continuous, combining coding challenges on BuildIT, hackathon participation, project demos, and mock interview performances."
    }
  ]
};

if (typeof window !== 'undefined') {
  window.cdcSkillNextData = cdcSkillNextData;
}
