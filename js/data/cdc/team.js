/* ==========================================================================
   CDC Team & Mentors Data — 100% Verified from Official IARE Website
   ========================================================================== */

const cdcTeamData = {
  metadata: {
    source: "IARE Official Team Members — Careers and Employability Skills",
    sourceUrl: "https://www.iare.ac.in/?q=pages/skill-team-members-careers-and-employability-skills",
    lastVerified: "2026-09",
    academicYear: "2026-27",
    status: "verified"
  },

  dean: {
    id: "t01",
    name: "Dr. B Padmaja",
    designation: "Dean & Chief Mentor",
    department: "Career Development Center (CDC)",
    phone: "9618150625",
    email: "b.padmaja@iare.ac.in",
    roleDescription: "Oversees overall strategic vision, curriculum architecture, industry partnerships, and multi-semester progression across SkillUP, SkillNext, and SkillBridge programs.",
    badge: "Dean & Chief Mentor"
  },

  chiefMentors: [
    {
      id: "t02",
      name: "Mr. E Krishna Rao Patro",
      designation: "Chief Mentor / Advisor",
      department: "Career Development Center",
      phone: "9701037695",
      email: "patro@iare.ac.in",
      roleDescription: "Drives software development, deployment strategies, and technical readiness programs for student placement acceleration.",
      badge: "Chief Mentor"
    },
    {
      id: "t03",
      name: "Dr. Ch. V. Rama Padmaja",
      designation: "Chief Mentor",
      department: "Career Development Center",
      phone: "9989346633",
      email: "cvrpadmaja@iare.ac.in",
      roleDescription: "Mentors technical curriculum development, competitive coding initiatives, and academic skill integration.",
      badge: "Chief Mentor"
    }
  ],

  trainingMentors: [
    {
      id: "t04",
      name: "Mr. M Sambaraj",
      designation: "Arithmetic Skills Mentor",
      department: "Career Development Center",
      phone: "9704413836",
      email: "m.sambaraju@iare.ac.in",
      roleDescription: "Leads quantitative aptitude, numerical reasoning, speed math, and problem-solving drills across all semesters.",
      badge: "Training Mentor"
    },
    {
      id: "t05",
      name: "Dr. Sudeepthi Dondapati",
      designation: "Soft Skills Mentor",
      department: "Career Development Center",
      phone: "9440163950",
      email: "d.sudeepthi@iare.ac.in",
      roleDescription: "Directs professional communication, accent neutralization, group discussion dynamics, and corporate etiquette.",
      badge: "Training Mentor"
    },
    {
      id: "t06",
      name: "Mr. Srinivas Govada",
      designation: "Technical Skill Mentor",
      department: "Career Development Center",
      phone: "9849141122",
      email: "srinivasgovada@iare.ac.in",
      roleDescription: "Mentors students in Data Structures, C/C++ problem solving, and BuildIT pattern coding challenges.",
      badge: "Training Mentor"
    },
    {
      id: "t07",
      name: "Prof. M Venkata Rao",
      designation: "Technical Skill Mentor",
      department: "Career Development Center",
      phone: "9290292406",
      email: "m.venkatarao@iare.ac.in",
      roleDescription: "Guides Java Full-Stack development, Spring Boot REST APIs, and database engineering projects.",
      badge: "Training Mentor"
    }
  ],

  supportingMentors: [
    {
      id: "t08",
      name: "Mr. B Ramesh",
      designation: "Supporting Mentor",
      department: "Career Development Center",
      phone: "9701834141",
      email: "b.ramesh@iare.ac.in",
      roleDescription: "Provides lab session supervision, student attendance tracking, and BuildIT contest coordination.",
      badge: "Supporting Mentor"
    }
  ],

  patOfficer: {
    id: "t09",
    name: "Dr. M Pala Prasad Reddy",
    designation: "Placement and Training Officer (PAT)",
    department: "Placement and Training Centre",
    room: "Room 2202",
    phone: "9491602701",
    email: "pat@iare.ac.in",
    roleDescription: "Connects CDC-trained students with top corporate recruiters, coordinates on-campus recruitment drives, and manages interview logistics.",
    badge: "PAT Convener"
  }
};

if (typeof window !== 'undefined') {
  window.cdcTeamData = cdcTeamData;
}
