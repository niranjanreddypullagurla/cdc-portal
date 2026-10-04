/* ==========================================================================
   CDC Career Readiness & Skill Refresher Program Data — 100% Verified
   ========================================================================== */

const cdcCareerReadinessData = {
  metadata: {
    source: "IARE Official Skill Refresher Program & CEST Ecosystem",
    sourceUrl: "https://www.iare.ac.in/?q=pages/skill-refresher-program",
    lastVerified: "2026-09",
    academicYear: "2026-27",
    status: "verified"
  },

  skillRefresherProgram: {
    name: "Skill Refresher Program",
    targetAudience: "B.Tech VI Semester Students",
    duration: "1-Month Summer Intensive Refresher (Workshop Mode)",
    conductingBody: "CDC / SDD (Skill Development Department)",
    overview: "Skill Refresher is a one-month summer refresher program conducted in a workshop mode for VI semester students. Aptitude, Technical Training, Communication Skills, and Mock Interviews are integral parts of MNC selection procedures. The program enables students to revise, revive, and reconstruct their preparation in synchronization with corporate industry demands.",
    pillars: [
      {
        title: "Quantitative Aptitude & Reasoning",
        topics: [
          "Time, Distance, and Speed",
          "Time and Work Problems",
          "Number Theory & Algebra",
          "Profit, Loss, & Interest Calculations",
          "Permutations, Combinations, & Probability",
          "Data Interpretation & Logical Grids"
        ]
      },
      {
        title: "Technical Refresher & Coding Drills",
        topics: [
          "Data Structures & Core Java Revision",
          "SQL Query Optimization & Database Drills",
          "40+ Coding Pattern Review on BuildIT",
          "Timed Technical Speed Assessments"
        ]
      },
      {
        title: "Professional Communication Skills",
        topics: [
          "Language & Interpersonal Communication",
          "Speaking Skills & Accent Neutralization",
          "Presentation & Group Discussion Dynamics",
          "Grammatical Error Detection & Vocabulary Power",
          "Corporate Email & Written Communication"
        ]
      },
      {
        title: "Interview Preparation & Darpan Panels",
        topics: [
          "Resume Review & Formatting against ATS Rules",
          "GitHub Profile & Project Presentation",
          "LinkedIn Branding & Professional Visibility",
          "Mock Technical & HR Interviews with Panel Scoring"
        ]
      }
    ]
  },

  darpanReviewProcess: {
    name: "Darpan & Resume Review Panels",
    venue: "PAT Office / CDC Blocks",
    description: "Rigorous face-to-face review sessions where faculty panels evaluate student resumes, portfolio projects, technical depth, and soft skills under realistic interview conditions.",
    verifiedSchedules: [
      {
        date: "30 September 2026",
        venue: "PAT Office (Block 2)",
        panels: ["Panel-3: Darpan Review", "Panel-5: Resume Review"],
        branchesCovered: ["CSE", "EEE", "CSE (AI&ML)"]
      }
    ]
  }
};

if (typeof window !== 'undefined') {
  window.cdcCareerReadinessData = cdcCareerReadinessData;
}
