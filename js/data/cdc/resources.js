/* ==========================================================================
   CDC Learning Resources Data — Verified Official Platforms
   ========================================================================== */

const cdcResourcesData = {
  metadata: {
    source: "IARE Official e-Learning Resources & ICT Services Directory",
    sourceUrl: "https://www.iare.ac.in/",
    lastVerified: "2026-09",
    academicYear: "2026-27",
    status: "verified"
  },

  internalPlatforms: [
    {
      name: "BuildIT Platform",
      url: "http://buildit.iare.ac.in/",
      category: "In-House Coding & Assessment Engine",
      description: "IARE's proprietary automated competitive programming and assessment platform. Hosts weekly contests, 40+ coding pattern drills, and real-time execution benchmarking."
    },
    {
      name: "Samvidha Portal",
      url: "https://samvidha.iare.ac.in/",
      category: "Academic & Governance Management",
      description: "Student management portal for tracking attendance, semester course registrations, academic progression, and placement credentials."
    },
    {
      name: "Akanksha Learning Hub",
      url: "https://akanksha.iare.ac.in/",
      category: "Course Content & Digital Repository",
      description: "Digital course material repository featuring lecture notes, lab manuals, assignment banks, and video lectures."
    },
    {
      name: "Aksha e-Learning Portal",
      url: "https://aksha.iare.ac.in/",
      category: "Interactive Learning & Assessments",
      description: "Online quiz and continuous assessment system for engineering subjects and aptitude drills."
    }
  ],

  curatedExternalPlatforms: [
    {
      name: "LeetCode",
      url: "https://leetcode.com/",
      domain: "Data Structures & Algorithms",
      description: "Recommended for problem solving across 40+ coding patterns."
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/",
      domain: "Competitive Coding & SQL Drills",
      description: "Domain-specific domain tracks for Python, Java, C++, and MySQL."
    },
    {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/",
      domain: "CS Fundamentals & Interview Prep",
      description: "Articles, system design basics, and interview experience archives."
    },
    {
      name: "GitHub",
      url: "https://github.com/",
      domain: "Version Control & Project Portfolio",
      description: "Repository hosting for student capstone and full-stack projects."
    }
  ]
};

if (typeof window !== 'undefined') {
  window.cdcResourcesData = cdcResourcesData;
}
