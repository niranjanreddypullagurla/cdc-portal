/* ==========================================================================
   CDC Achievements Data — Verified Official IARE Placement & Coding Metrics
   ========================================================================== */

const cdcAchievementsData = {
  metadata: {
    source: "IARE Official Achievements Directory",
    sourceUrl: "https://iare.ac.in/?q=pages/achievements",
    lastVerified: "2026-09",
    academicYear: "2026-27",
    status: "verified"
  },

  placementStats: [
    { label: "Annual Placements Recorded", value: "500+", context: "Annual verified hiring statistics" },
    { label: "Recruiting Companies Visiting IARE", value: "62+", context: "Core and software corporate partners" },
    { label: "Training Hours Delivered in SkillUP / SkillNext", value: "800+", context: "Per learner over 4 semesters" },
    { label: "Coding Patterns Mastered", value: "40+", context: "Algorithmic problem-solving patterns" }
  ],

  codingLeaderboards: [
    {
      platform: "BuildIT Platform",
      achievement: "Over 100+ weekly programming contests conducted with active participation from 600+ students per event."
    },
    {
      platform: "CodeChef & HackerRank",
      achievement: "Institutional global coding rankings with student badges across Python, Java, Data Structures, and SQL tracks."
    },
    {
      platform: "Inter-Collegiate Hackathons",
      achievement: "LEXICON 2.0 (36-Hour Hackathon) hosting 250+ participants from 16 engineering colleges at IARE CDC campus."
    }
  ]
};

if (typeof window !== 'undefined') {
  window.cdcAchievementsData = cdcAchievementsData;
}
