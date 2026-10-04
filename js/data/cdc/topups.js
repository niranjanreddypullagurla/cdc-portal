/* ==========================================================================
   CDC Top-Ups Data — Separate Dedicated Top-Up Course Catalog
   ========================================================================== */

const cdcTopUpsData = {
  metadata: {
    source: "IARE Official SkillUP VI Semester Curriculum — Top-Up Courses",
    sourceUrl: "https://www.iare.ac.in/?q=pages/skillup",
    lastVerified: "2026-09",
    academicYear: "2026-27",
    status: "verified"
  },

  description: "Top-Up courses are specialized modules embedded in the VI semester to provide domain enrichment beyond core computer science subjects.",

  topUps: [
    {
      id: "topup-cloud-app",
      name: "Cloud Application Development",
      targetSemester: "VI Semester",
      focus: "Developing and deploying software into leading cloud platforms including AWS, Azure, and Aneka Cloud.",
      topicsCovered: [
        "Cloud Computing Overview & Architecture",
        "Amazon AWS EC2, S3, RDS Deployment",
        "Microsoft Azure Cloud Services",
        "Aneka Cloud Computing Network Setup",
        "Building Scalable & Resilient Cloud Native Apps"
      ]
    },
    {
      id: "topup-devops",
      name: "DevOps & Software Delivery Automation",
      targetSemester: "VI Semester",
      focus: "Automating software engineering workflows across development and operations teams.",
      topicsCovered: [
        "Version Control with Git & GitHub Workflow",
        "Continuous Integration with Jenkins & Maven",
        "Automated Testing Integration with Selenium",
        "Containerization using Docker",
        "Container Orchestration with Kubernetes"
      ]
    },
    {
      id: "topup-puzzles",
      name: "Programming Puzzles & Logical Challenges",
      targetSemester: "VI Semester",
      focus: "Enhancing analytical problem-solving and independent cognitive thinking for high-level technical tests.",
      topicsCovered: [
        "Digits & Combinatorial Puzzles",
        "Blood Relations & Deduction",
        "Complex Seating Arrangements & Logic Grids",
        "Algorithmic Brain Teasers"
      ]
    },
    {
      id: "topup-computer-networks",
      name: "Computer Networks & Protocol Stack",
      targetSemester: "VI Semester",
      focus: "Hands-on understanding of network connectivity, hardware configuration, and protocol stacks.",
      topicsCovered: [
        "LAN, WAN, & Wireless Network Architectures",
        "OSI 7-Layer Reference Model & TCP/IP Protocol Suite",
        "Application, Transport, & Internet Layers",
        "Socket Programming & Network Security Essentials"
      ]
    }
  ]
};

if (typeof window !== 'undefined') {
  window.cdcTopUpsData = cdcTopUpsData;
}
