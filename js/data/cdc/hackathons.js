/* ==========================================================================
   CDC Hackathons & Events Data — Verified Official IARE Event Records
   ========================================================================== */

const cdcHackathonsData = {
  metadata: {
    source: "IARE Official Activities and Events Directory",
    sourceUrl: "https://www.iare.ac.in/?q=activities-and-events",
    lastVerified: "2026-09",
    academicYear: "2026-27",
    status: "verified"
  },

  description: "Verified CDC-hosted and CDC-participating hackathons, coding contests, and programming proficiency assessments.",

  events: [
    {
      id: "lexicon-2",
      title: "LEXICON 2.0 — 36 Hours Hackathon",
      category: "Hackathon",
      status: "Historical Event",
      date: "18 – 19 December, 2021",
      duration: "36 Hours Continuous",
      venue: "IARE Career Development Center",
      participation: "250+ Students from 16 Different Engineering Colleges",
      description: "Inter-collegiate 36-hour hackathon where student teams built working prototypes solving real-world challenges across web, cloud, and IoT domains.",
      image: "assets/images/hackathon_event.png"
    },
    {
      id: "lexicon-1",
      title: "LEXICON 1.0 — 24 Hours Hackathon",
      category: "Hackathon",
      status: "Historical Event",
      date: "29 – 30 March, 2019",
      duration: "24 Hours Continuous",
      venue: "IARE Career Development Center",
      participation: "150+ Student Participants",
      description: "Flagship inaugural 24-hour hackathon bringing together creative engineering minds for rapid software development and product pitches.",
      image: "assets/images/hackathon_event.png"
    },
    {
      id: "hackathon-24h-2021",
      title: "24 Hours Skill Center Hackathon",
      category: "Hackathon",
      status: "Historical Event",
      date: "23 October, 2021",
      duration: "24 Hours",
      venue: "Skill Development Center",
      participation: "IARE Students",
      description: "Intensive 24-hour sprint focused on rapid web application prototyping and competitive problem solving.",
      image: "assets/images/hackathon_event.png"
    },
    {
      id: "buildit-assessment-2021",
      title: "BuildIT Programming Proficiency Assessment Test",
      category: "Assessment Test",
      status: "Historical Event",
      date: "4 September, 2021 (6:30 PM – 9:30 PM)",
      duration: "90 Minutes",
      platform: "BuildIT Platform",
      participation: "Institutional B.Tech Students",
      description: "Standardized 90-minute programming proficiency evaluation measuring code speed, time complexity, and data structure usage.",
      image: "assets/images/skillup_banner.png"
    },
    {
      id: "buildit-weekly-contests",
      title: "BuildIT Weekly Programming Contests",
      category: "Recurring Contest",
      status: "Recurring Institutional Series",
      date: "Weekly Contests (2016 – Present)",
      duration: "Weekly 2-Hour Drills",
      platform: "BuildIT Platform (buildit.iare.ac.in)",
      participation: "300 – 600+ Active Students per Contest",
      description: "Continuous weekly competitive programming series with cash awards for top performers to build consistent problem-solving discipline.",
      image: "assets/images/cdc_hero_banner.png"
    }
  ]
};

if (typeof window !== 'undefined') {
  window.cdcHackathonsData = cdcHackathonsData;
}
