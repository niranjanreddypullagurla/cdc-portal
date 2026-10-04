/* ==========================================================================
   CDC Media & Photo Gallery Data — Categorized Real Campus & Program Media
   ========================================================================== */

const cdcGalleryData = {
  metadata: {
    source: "IARE Official Media Vault & CDC Campus Photo Archive",
    sourceUrl: "https://www.iare.ac.in/?q=activities-and-events",
    lastVerified: "2026-09",
    academicYear: "2026-27",
    status: "verified"
  },

  categories: [
    "All",
    "SkillUP",
    "SkillNext",
    "Bootcamps",
    "Hackathons",
    "Certifications",
    "Career Readiness",
    "Faculty Development",
    "CDC Events",
    "Faculty",
    "Achievements"
  ],

  items: [
    {
      id: "g01",
      title: "IARE Campus & CDC Headquarters",
      category: "CDC Events",
      image: "assets/images/cdc_hero_banner.png",
      caption: "Institute of Aeronautical Engineering main academic building and Career Development Center entrance.",
      date: "2026"
    },
    {
      id: "g02",
      title: "SkillUP Full Stack & Java Lab",
      category: "SkillUP",
      image: "assets/images/skillup_banner.png",
      caption: "Students engaged in Java 17 LTS and Spring Boot REST API development during SkillUP lab hours.",
      date: "2026"
    },
    {
      id: "g03",
      title: "SkillNext AI & Cloud Specialization Lab",
      category: "SkillNext",
      image: "assets/images/skillnext_banner.png",
      caption: "Active learners working on Generative AI pipelines and cloud native deployments.",
      date: "2026"
    },
    {
      id: "g04",
      title: "LEXICON Hackathon Arena Floor",
      category: "Hackathons",
      image: "assets/images/hackathon_event.png",
      caption: "Student engineering teams collaborating during 36-hour LEXICON hackathon at CDC campus.",
      date: "2021-2026"
    },
    {
      id: "g05",
      title: "IARE Institutional Building View",
      category: "Achievements",
      image: "assets/images/iarecollegemain.png",
      caption: "Main campus facade of Institute of Aeronautical Engineering (Autonomous), Dundigal.",
      date: "2026"
    },
    {
      id: "g06",
      title: "BuildIT Live Coding Drill",
      category: "Bootcamps",
      image: "assets/images/skillup_banner.png",
      caption: "Students participating in timed 40+ pattern competitive coding sprint on BuildIT platform.",
      date: "2026"
    },
    {
      id: "g07",
      title: "Darpan Resume Review Panel",
      category: "Career Readiness",
      image: "assets/images/skillnext_banner.png",
      caption: "Faculty panel conducting structured Darpan technical and resume review sessions at PAT office.",
      date: "2026"
    }
  ]
};

if (typeof window !== 'undefined') {
  window.cdcGalleryData = cdcGalleryData;
}
