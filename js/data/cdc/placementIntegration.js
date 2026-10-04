/* ==========================================================================
   CDC Placement Integration Data — Bridge between CDC & PAT Placement Portal
   ========================================================================== */

const cdcPlacementIntegrationData = {
  metadata: {
    source: "IARE Career Development Center & Placement & Training (PAT) Office",
    sourceUrl: "https://www.iare.ac.in/?q=pages/careers-and-employability-skills-training-cest",
    lastVerified: "2026-09",
    academicYear: "2026-27",
    status: "verified"
  },

  relationshipModel: {
    cdcRole: "Build Skills — Nurturing technical, quantitative, logical, and soft skills across Semesters III-VI through SkillUP, SkillNext, and SkillBridge.",
    patRole: "Prepare & Execute Recruitment — Organizing Darpan panels, mock interview drives, resume reviews, company coordination, and campus hiring.",
    portalRole: "Discover Opportunities — Live opportunity tracking, company registration, test schedules, and placement offer letters."
  },

  patOfficer: {
    name: "Dr. M Pala Prasad Reddy",
    title: "Placement and Training Officer (PAT)",
    office: "Room 2202, Block 2",
    email: "pat@iare.ac.in",
    phone: "9491602701"
  },

  upcomingMockDrives: [
    {
      title: "B.Tech V Semester Darpan & Resume Review",
      date: "30 September 2026",
      venue: "PAT Office (Block 2)",
      panels: ["Panel-3: Darpan Interview", "Panel-5: Resume Review"],
      participatingBranches: ["CSE", "EEE", "CSE (AI&ML)", "CSE (DS)", "ECE", "IT"]
    }
  ],

  placementPortalLink: "https://samvidha.iare.ac.in/"
};

if (typeof window !== 'undefined') {
  window.cdcPlacementIntegrationData = cdcPlacementIntegrationData;
}
