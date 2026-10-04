/* ==========================================================================
   CDC Certifications Support Data — Verified Information
   ========================================================================== */

const cdcCertificationsData = {
  metadata: {
    source: "IARE Career Development Center — Certification Support Directory",
    sourceUrl: "https://www.iare.ac.in/?q=pages/skill-development",
    lastVerified: "2026-09",
    academicYear: "2026-27",
    status: "verified"
  },

  disclaimer: "CDC facilitates training, coursework, lab infrastructure, and faculty mentorship to prepare students for industry-recognized global certifications. Certifications are issued by respective external global technology providers.",

  certifications: [
    {
      id: "cert-aws-cloud",
      title: "AWS Certified Cloud Practitioner / Solutions Architect",
      provider: "Amazon Web Services (AWS)",
      domain: "Cloud Computing",
      relatedProgram: "SkillUP / SkillNext VI Semester Cloud Track",
      trainingSupport: "Hands-on cloud lab sessions, AWS Academy portal access, and practice exam drills.",
      eligibility: "Open to B.Tech V & VI Semester Students",
      officialLink: "https://aws.amazon.com/certification/"
    },
    {
      id: "cert-oracle-java",
      title: "Oracle Certified Professional: Java SE Developer",
      provider: "Oracle",
      domain: "Java Software Engineering",
      relatedProgram: "SkillUP IV & V Semester Java Full Stack",
      trainingSupport: "Core Java 17 LTS curriculum, object-oriented concepts, and mock certification tests.",
      eligibility: "Open to B.Tech IV & V Semester Students",
      officialLink: "https://education.oracle.com/java-certification"
    },
    {
      id: "cert-cisco-ccna",
      title: "Cisco Certified Network Associate (CCNA)",
      provider: "Cisco Systems",
      domain: "Computer Networking & Security",
      relatedProgram: "SkillUP VI Semester Networking Track",
      trainingSupport: "Cisco Networking Academy lab exercises, packet tracer simulations, and routing protocols.",
      eligibility: "Open to B.Tech VI Semester Students",
      officialLink: "https://www.cisco.com/c/en/us/training-events/vendor-certifications/ccna.html"
    },
    {
      id: "cert-azure-fund",
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      provider: "Microsoft",
      domain: "Cloud Architecture",
      relatedProgram: "SkillNext Cloud Track",
      trainingSupport: "Azure cloud portal exercises, cloud architecture concepts, and exam prep modules.",
      eligibility: "Open to B.Tech V & VI Semester Students",
      officialLink: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/"
    },
    {
      id: "cert-nptel-coursera",
      title: "NPTEL & Coursera Specializations",
      provider: "IITs / NPTEL & Coursera",
      domain: "Multi-Disciplinary Emerging Technologies",
      relatedProgram: "SkillNext Specialization Modules",
      trainingSupport: "Credit transfer guidance, faculty mentoring, and assignment problem-solving support.",
      eligibility: "All B.Tech Learners",
      officialLink: "https://nptel.ac.in/"
    }
  ]
};

if (typeof window !== 'undefined') {
  window.cdcCertificationsData = cdcCertificationsData;
}
