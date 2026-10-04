/* ==========================================================================
   CDC Faculty Development Programs (FDP) Data — Verified Information
   ========================================================================== */

const cdcFacultyDevelopmentData = {
  metadata: {
    source: "IARE Official CDC Faculty Development Records",
    sourceUrl: "https://www.iare.ac.in/?q=pages/skill-development",
    lastVerified: "2026-09",
    academicYear: "2026-27",
    status: "verified"
  },

  description: "Faculty Development Programs (FDPs) conducted to upskill CDC training faculty and chief mentors in modern technologies, automated code evaluation, and outcome-based pedagogy.",

  fdpPrograms: [
    {
      title: "Generative AI & LLM Tools in Technical Education",
      targetAudience: "CDC Chief Mentors & Computer Science Faculty",
      keyTopics: [
        "Integrating AI pair programming tools into lab pedagogy",
        "Prompt engineering for automated code feedback",
        "Ethical AI usage in academic coding assessments"
      ]
    },
    {
      title: "Java 17 LTS & Spring Boot Microservices Up-skilling",
      targetAudience: "SkillUP & SkillNext Technical Mentors",
      keyTopics: [
        "Modern Java 17 LTS syntax & performance improvements",
        "Spring Boot RESTful microservices architecture",
        "Hibernate ORM optimization & query tuning"
      ]
    },
    {
      title: "Cloud Native & DevOps Pipeline Mentorship",
      targetAudience: "Technical Skill Mentors",
      keyTopics: [
        "Containerization with Docker & Kubernetes orchestration",
        "Automated CI/CD pipelines with Jenkins",
        "AWS Academy curriculum alignment"
      ]
    },
    {
      title: "Outcome-Based Evaluation & BuildIT Item Design",
      targetAudience: "Aptitude & Technical Mentors",
      keyTopics: [
        "Designing 40+ pattern-based coding assessment items",
        "Benchmarking time & space complexity edge cases",
        "Effective student feedback during Darpan panels"
      ]
    }
  ]
};

if (typeof window !== 'undefined') {
  window.cdcFacultyDevelopmentData = cdcFacultyDevelopmentData;
}
