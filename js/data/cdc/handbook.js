/* ==========================================================================
   CDC Handbook Data — Official Institutional Student Handbook 2026-2027
   ========================================================================== */

const cdcHandbookData = {
  metadata: {
    source: "IARE Student Handbook 2026-2027 (Official Institutional Publication)",
    sourceUrl: "https://www.iare.ac.in/?q=basicpage/brochure-and-information-booklets",
    lastVerified: "2026-09",
    academicYear: "2026-27",
    status: "verified"
  },

  documentInfo: {
    title: "IARE Student Handbook 2026-2027",
    subtitle: "Official Publication of Institute of Aeronautical Engineering",
    totalPages: 72,
    fileSize: "2.2 MB",
    pdfPath: "C:\\Users\\Niranjan Reddy\\Downloads\\Telegram Desktop\\IARE_STUDENT_HANDBOOK_2026-2027.pdf",
    downloadFileName: "IARE_STUDENT_HANDBOOK_2026-2027.pdf"
  },

  summaryText: "The IARE Student Handbook is an official publication providing authoritative details on academic regulations, student code of conduct, Career Development Center (CDC) initiatives, Placement and Training (PAT), BuildIT platform rules, HyFlex learning, and institutional contact directories.",

  keySections: [
    { section: "Section 1: Overview & Academic Excellence", pages: "Pages 1 – 7", topic: "Genesis, Vision, Mission, Rankings, 500+ Placements, & 62+ MoU Partners." },
    { section: "Section 2: Code of Conduct & Policies", pages: "Pages 8 – 14", topic: "Academic Integrity, Dress Code, Mobile Policy, & Disciplinary Regulations." },
    { section: "Section 3: Academic Information & Curriculum", pages: "Pages 15 – 26", topic: "Courses Offered, Semester Structure, & Attendance Requirements." },
    { section: "Section 4: Student Resources", pages: "Pages 27 – 34", topic: "Library, Computer Centre, IARE Connect, & E-Learning Platforms." },
    { section: "Section 5.6: Career Development Centre (CDC)", pages: "Pages 35 – 37", topic: "SkillUP, SkillNext, SkillBridge, & Competency Building Framework." },
    { section: "Section 5.7: Placement and Training (PAT)", pages: "Pages 37 – 38", topic: "PAT Office, Campus Placement Drives, & Company Coordinators." },
    { section: "Section 5.8: BuildIT Programming Platform", pages: "Page 38", topic: "BuildIT platform rules, weekly contests, & proficiency testing." },
    { section: "Section 5.9: Bootcamp Program", pages: "Page 39", topic: "Intensive technical bootcamps & skill refresher workshops." },
    { section: "Section 11 & 12: Directory & Key Contacts", pages: "Pages 58 – 64", topic: "Official Deans, HODs, CDC Officers, & PAT Contact Directory." }
  ]
};

if (typeof window !== 'undefined') {
  window.cdcHandbookData = cdcHandbookData;
}
