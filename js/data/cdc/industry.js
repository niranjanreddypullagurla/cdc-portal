/* ==========================================================================
   CDC Industry-Academia Data — Verified Official Partnerships & MOUs
   ========================================================================== */

const cdcIndustryData = {
  metadata: {
    source: "IARE Official Industry Collaborations & MOU Records",
    sourceUrl: "https://www.iare.ac.in/?q=pages/careers-and-employability-skills-training-cest",
    lastVerified: "2026-09",
    academicYear: "2026-27",
    status: "verified"
  },

  mouHighlights: [
    {
      partner: "National Research Development Corporation (NRDC)",
      purpose: "Commercialization of technology, patenting, research incubation, and successful technology transfer to industry.",
      scope: "Institutional Research & Innovation Ecosystem"
    }
  ],

  recruitingPartners: [
    "Microsoft", "Zscaler", "JPMorgan Chase & Co", "Autodesk", "Amazon", "Juspay", 
    "Amadeus", "EPAM", "ZeroCodeHR", "Sears", "DBS", "Accolite Digital", 
    "ARCADIS IBI", "Capgemini", "Lumen", "IBM", "Accenture", "Virtusa", 
    "Cognizant", "UST", "Byteridge", "JSW", "LTIMindtree", "Ernst & Young", 
    "Wiley Edge", "TATA Consultancy Services", "TATA Technologies", "TATA Advanced Systems", 
    "Infosys", "Wipro", "MPhasis", "Quest Global", "NTT Data", "Hexaware", "Optum", "Tech Mahindra"
  ],

  industrySessions: [
    {
      title: "Industry Expert Guest Lectures",
      frequency: "Regular Semester Schedule",
      description: "Sessions delivered by corporate tech leads and solution architects covering production engineering practices, cloud architectures, and AI deployment."
    },
    {
      title: "Capstone Industry Mentorship",
      frequency: "Semester V & VI",
      description: "Direct review of student project architectures by external industry mentors to align with production software standards."
    }
  ]
};

if (typeof window !== 'undefined') {
  window.cdcIndustryData = cdcIndustryData;
}
