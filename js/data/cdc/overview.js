/* ==========================================================================
   CDC Overview Data — Verified Official IARE Information
   ========================================================================== */

const cdcOverviewData = {
  metadata: {
    source: "IARE Career Development Center & Skill Development",
    sourceUrl: "https://www.iare.ac.in/?q=pages/skill-development",
    lastVerified: "2026-09",
    academicYear: "2026-27",
    status: "verified"
  },

  institution: {
    name: "Career Development Center",
    shortName: "CDC",
    collegeName: "Institute of Aeronautical Engineering (IARE)",
    location: "Dundigal, Hyderabad - 500 043, Telangana",
    tagline: "Bridging Academic Learning with Future Industry Expectations",
    placementPortalUrl: "https://samvidha.iare.ac.in/"
  },

  vision: "To empower students with industry-relevant technical expertise, quantitative aptitude, logical reasoning, and professional communication to produce top-tier engineering professionals.",

  mission: "To systematically nurture engineering talent through structured skill programs (SkillUP, SkillNext, SkillBridge), hands-on lab sessions, competitive coding, hackathons, and mock interview readiness.",

  corePillars: [
    {
      title: "Career & Employability Skills (CEST)",
      desc: "Structured multi-semester training embedding programming, quantitative aptitude, and soft skills into student growth.",
      icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
    },
    {
      title: "BuildIT Platform & Competitive Coding",
      desc: "In-house online assessment platform conducting weekly programming contests, time-complexity analysis, and 40+ coding patterns.",
      icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    },
    {
      title: "Emerging AI & Cloud Specializations",
      desc: "Integration of Generative AI, AI Pair Programming, Full-Stack Java (Java 17 LTS, Spring Boot REST), Cloud (AWS, Azure), and DevOps.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z"
    },
    {
      title: "Placement-Readiness & PAT Synergies",
      desc: "Seamless transition from CDC skill-building to Placement and Training (PAT) recruitment drives, resume reviews, and Darpan panels.",
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    }
  ],

  ecosystemFlow: [
    { step: 1, label: "ACADEMICS", desc: "Core Engineering Concepts" },
    { step: 2, label: "SKILL DEVELOPMENT", desc: "SkillBridge, SkillUP, SkillNext" },
    { step: 3, label: "PRACTICE", desc: "BuildIT Contests & Drills" },
    { step: 4, label: "PROJECTS", desc: "Industry & Full-Stack Projects" },
    { step: 5, label: "INDUSTRY EXPOSURE", desc: "Bootcamps & Hackathons" },
    { step: 6, label: "CAREER READINESS", desc: "Skill Refresher & Darpan Panels" },
    { step: 7, label: "PLACEMENT", desc: "PAT Campus Recruitment Drives" }
  ]
};

if (typeof window !== 'undefined') {
  window.cdcOverviewData = cdcOverviewData;
}
