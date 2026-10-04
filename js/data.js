/* ==========================================================================
   CDC Development Portal — Single Master Data Aggregator (CDC_DATA)
   Bundles all 100% verified CDC modules into window.CDC_DATA
   ========================================================================== */

const CDC_DATA = {
  get overview() {
    return window.cdcOverviewData || {};
  },
  get careerJourney() {
    return window.cdcCareerJourneyData || {};
  },
  get skillup() {
    return window.cdcSkillUpData || {};
  },
  get skillnext() {
    return window.cdcSkillNextData || {};
  },
  get skillbridge() {
    return window.cdcSkillBridgeData || {};
  },
  get bootcamps() {
    return window.cdcBootcampsData || {};
  },
  get topups() {
    return window.cdcTopUpsData || {};
  },
  get careerReadiness() {
    return window.cdcCareerReadinessData || {};
  },
  get hackathons() {
    return window.cdcHackathonsData || {};
  },
  get certifications() {
    return window.cdcCertificationsData || {};
  },
  get resources() {
    return window.cdcResourcesData || {};
  },
  get industry() {
    return window.cdcIndustryData || {};
  },
  get facultyDevelopment() {
    return window.cdcFacultyDevelopmentData || {};
  },
  get team() {
    return window.cdcTeamData || {};
  },
  get achievements() {
    return window.cdcAchievementsData || {};
  },
  get gallery() {
    return window.cdcGalleryData || {};
  },
  get handbook() {
    return window.cdcHandbookData || {};
  },
  get placementIntegration() {
    return window.cdcPlacementIntegrationData || {};
  }
};

if (typeof window !== 'undefined') {
  window.CDC_DATA = CDC_DATA;
}
