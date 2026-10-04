/* ==========================================================================
   CDC SkillBridge Program Data — Verified Official IARE Information
   ========================================================================== */

const cdcSkillBridgeData = {
  id: "skillbridge",
  name: "SkillBridge Program",
  tagline: "Foundational Programming & Problem Solving On-Ramp for Engineering Learners",
  targetGroup: "B.Tech III & IV Semester Students",
  trainingHours: "Foundational Skill Hours (Structured across SB1-SB6 Batches)",
  targetSemesters: "Semesters III & IV",
  duration: "Semester-Long Foundational Track",
  heroImage: "assets/images/cdc_hero_banner.png",

  metadata: {
    source: "IARE Career Development Center — SkillBridge Foundation",
    sourceUrl: "https://www.iare.ac.in/?q=pages/skill-development",
    lastVerified: "2026-09",
    academicYear: "2026-27",
    status: "verified"
  },

  overview: "SkillBridge provides the foundational on-ramp for engineering students, establishing core computational logic, structured C programming, Python basics, and entry-level data structures before students progress into advanced tracks like SkillUP or SkillNext.",

  batchesDocumented: [
    { batch: "SB1", branch: "CSE", schedule: "FN / AN Sessions" },
    { batch: "SB2", branch: "CSE", schedule: "FN / AN Sessions" },
    { batch: "SB3", branch: "CSE, EEE", schedule: "FN Sessions" },
    { batch: "SB4", branch: "CSE (AI&ML)", schedule: "AN Sessions" },
    { batch: "SB5", branch: "CSE(AI&ML), CSE(DS), ECE, IT", schedule: "AN Sessions" },
    { batch: "SB6", branch: "CSE(AI&ML), CSE(DS), ECE, IT", schedule: "AN Sessions" }
  ],

  curriculumModules: [
    {
      module: "Module 1: Problem Decomposition & Pseudocode",
      details: "Flowcharts, algorithm logic, and breaking down complex problems before syntax implementation."
    },
    {
      module: "Module 2: C Programming Essentials",
      details: "Control structures, functions, arrays, pointers, memory management, and debugging stack traces."
    },
    {
      module: "Module 3: Python Fundamentals & Data Structures I",
      details: "Python data types, lists, dictionaries, tuples, recursion, and file handling."
    },
    {
      module: "Module 4: Pattern-Based Problem Solving",
      details: "Solving 60+ foundational coding patterns on loops, arrays, and string manipulation."
    }
  ],

  skillsCovered: [
    "C Programming",
    "Python Logic",
    "Problem Solving",
    "Data Structures I",
    "Pattern Logic",
    "BuildIT Platform Basics"
  ]
};

if (typeof window !== 'undefined') {
  window.cdcSkillBridgeData = cdcSkillBridgeData;
}
