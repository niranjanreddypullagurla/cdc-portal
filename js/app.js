/* ==========================================================================
   IARE CDC PORTAL — MASTER PRODUCTION APPLICATION CONTROLLER (app.js)
   Renders 18 Verified Views with Formatted Course Cards & Active Subnav Tracking
   ========================================================================== */

(() => {
  "use strict";

  const viewRoot = document.getElementById("view-root");
  const navLinks = document.querySelectorAll("[data-nav]");
  const subNavLinks = document.querySelectorAll("[data-subnav]");
  const navToggle = document.getElementById("nav-toggle");
  const mainNav = document.getElementById("main-nav");
  const launchBtn = document.getElementById("launch-portal-btn");
  const lightbox = document.getElementById("lightbox");
  const lightboxBody = document.getElementById("lightbox-body");

  let directoryFilter = { query: "", subject: "All" };

  /* ------------------------------------------------------------------ *
   * ROUTER & ACTIVE NAV TRACKING
   * ------------------------------------------------------------------ */
  function parseRoute() {
    const hash = window.location.hash.replace(/^#\/?/, "");
    const [route, param] = hash.split("/");
    return { route: route || "home", param: param || null };
  }

  function setActiveNav(routeName) {
    navLinks.forEach((link) => {
      const isMatch = link.dataset.nav === routeName;
      link.classList.toggle("active", isMatch);
    });

    subNavLinks.forEach((link) => {
      const isMatch = link.dataset.subnav === routeName;
      link.classList.toggle("active", isMatch);
      if (isMatch) {
        link.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    });
  }

  function closeMobileNav() {
    if (mainNav) mainNav.classList.remove("open");
    if (navToggle) navToggle.setAttribute("aria-expanded", "false");
  }

  function router() {
    const { route } = parseRoute();
    closeMobileNav();
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    setActiveNav(route);

    switch (route) {
      case "career-journey":
        renderCareerJourney();
        break;
      case "skillup":
        renderSkillUp();
        break;
      case "skillnext":
        renderSkillNext();
        break;
      case "skillbridge":
        renderSkillBridge();
        break;
      case "bootcamps":
        renderBootcamps();
        break;
      case "top-ups":
        renderTopUps();
        break;
      case "career-readiness":
        renderCareerReadiness();
        break;
      case "hackathons":
        renderHackathons();
        break;
      case "certifications":
        renderCertifications();
        break;
      case "resources":
        renderResources();
        break;
      case "industry":
        renderIndustry();
        break;
      case "faculty-development":
        renderFacultyDevelopment();
        break;
      case "team":
      case "faculty":
        renderTeam();
        break;
      case "achievements":
        renderAchievements();
        break;
      case "gallery":
      case "media":
        renderGallery();
        break;
      case "handbook":
        renderHandbook();
        break;
      case "placement-integration":
      case "placement":
        renderPlacementIntegration();
        break;
      case "home":
      case "overview":
      default:
        renderHome();
        break;
    }
  }

  window.addEventListener("hashchange", router);

  /* ------------------------------------------------------------------ *
   * SHARED UI HELPERS
   * ------------------------------------------------------------------ */
  function svgCheck() {
    return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  }

  function svgArrowRight() {
    return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`;
  }

  function renderSubtleSourceFootnote(sourceText, sourceUrl) {
    let text = sourceText || "IARE Career Development Center";
    text = text.replace(/Extracted from iare\.ac\.in/gi, "Official IARE CDC Portal").replace(/\(Extracted from iare\.ac\.in\)/gi, "");
    return `
      <div class="source-footnote">
        🏛️ <span>Verified Curriculum · ${text}</span>
        ${sourceUrl ? ` · <a href="${sourceUrl}" target="_blank" rel="noopener">Official Portal ↗</a>` : ""}
      </div>
    `;
  }

  /* ------------------------------------------------------------------ *
   * 1. HOME / OVERVIEW VIEW
   * ------------------------------------------------------------------ */
  function renderHome() {
    CDC_SKELETON.simulate(
      viewRoot,
      CDC_SKELETON.heroWithHeading() + `<div class="skeleton-wrap">${CDC_SKELETON.grid(3)}</div>`,
      () => {
        const overview = window.CDC_DATA.overview;
        const stats = window.CDC_DATA.achievements.placementStats || [];

        const featuredPrograms = [
          {
            id: "skillbridge",
            name: "SkillBridge Program",
            targetSemesters: "Semesters 3 & 4",
            targetYear: "2nd Year B.Tech",
            shortDesc: "The on-ramp. Logic before language, structure before syntax. Basic problem solving with C and Python across SB1–SB6 batches.",
            tags: ["C Programming", "Python Logic", "Data Structures I", "SB1–SB6 Batches"],
            heroImage: "assets/images/cdc_hero_banner.png"
          },
          {
            id: "skillup",
            name: "SkillUP Program",
            targetSemesters: "Semesters 3, 4, 5 & 6",
            targetYear: "Advanced Learners",
            shortDesc: "Where logic becomes a product. 800+ Hours of DSA, Database Design (MySQL), Java Full Stack (Java 17 LTS, Spring Boot REST), and DevOps.",
            tags: ["800+ Hours", "Java Full Stack", "Spring Boot REST", "DevOps"],
            heroImage: "assets/images/skillup_banner.png"
          },
          {
            id: "skillnext",
            name: "SkillNext Program",
            targetSemesters: "Semesters 3, 4, 5 & 6",
            targetYear: "Active Learners",
            shortDesc: "Interview-ready by design. 800+ Hours with specializations in AI, Machine Learning, Deep Learning, Generative AI, and Cyber Security.",
            tags: ["800+ Hours", "Generative AI", "Data Science", "Cyber Security"],
            heroImage: "assets/images/skillnext_banner.png"
          }
        ];

        viewRoot.innerHTML = `
          <section class="hero-section">
            <div class="container">
              <div class="hero-grid">
                <div>
                  <div class="hero-badge">🏛️ Institute of Aeronautical Engineering · CDC</div>
                  <h1 class="hero-title">Placement readiness, <span class="accent">engineered</span> like a curriculum.</h1>
                  <p class="hero-subtitle">${overview.vision || "Empowering students with industry-relevant technical expertise, quantitative aptitude, and professional communication."}</p>
                  <div class="hero-cta-group">
                    <a href="#/placement-integration" class="btn btn-launch">Launch Placement Portal ${svgArrowRight()}</a>
                    <a href="#/team" class="btn btn-secondary">Meet CDC Mentors</a>
                  </div>
                  <div class="hero-stats-grid">
                    ${stats.map((s) => `
                      <div class="stat-box">
                        <div class="stat-num">${s.value}</div>
                        <div class="stat-desc">${s.label}</div>
                      </div>
                    `).join("")}
                  </div>
                </div>
                <div class="hero-media-wrapper">
                  <img src="assets/images/skillnext_banner.png" alt="CDC Mock Interview & AI Lab" loading="eager" />
                </div>
              </div>
            </div>
          </section>

          <div class="container section">
            <div class="section-title-block">
              <h2>Core Institutional Programs</h2>
              <p>Multi-semester training tracks engineered to build compounding software engineering skills.</p>
            </div>
            <div class="cards-grid-3">
              ${featuredPrograms.map(programCardHTML).join("")}
            </div>
          </div>

          <div class="container section">
            <div class="section-title-block">
              <h2>CDC Student Career Development Journey</h2>
              <p>Seven-step roadmap from academic concepts to campus placement drives.</p>
            </div>
            <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 10px; text-align: center;">
              ${(overview.ecosystemFlow || []).map((step) => `
                <div class="card" style="padding: 12px 6px;">
                  <div style="font-size: 0.72rem; font-weight: 800; color: var(--accent-sky);">STEP ${step.step}</div>
                  <div style="font-size: 0.85rem; font-weight: 700; color: var(--accent-navy); margin: 3px 0;">${step.label}</div>
                  <div style="font-size: 0.72rem; color: var(--text-muted);">${step.desc}</div>
                </div>
              `).join("")}
            </div>
          </div>

          <div class="container section">
            <div class="cta-band">
              <div>
                <h2>Ready for Campus Recruitment Drives?</h2>
                <p>The Placement Portal connects CDC-trained students with PAT mock drives, Darpan panels, and placement opportunities.</p>
              </div>
              <a href="#/placement-integration" class="btn btn-secondary">Explore Placement Readiness ${svgArrowRight()}</a>
            </div>

            ${renderSubtleSourceFootnote(overview.metadata?.source, overview.metadata?.sourceUrl)}
          </div>
        `;
      },
      280
    );
  }

  function programCardHTML(program) {
    return `
      <div class="card program-card">
        <img src="${program.heroImage}" alt="${program.name}" class="program-card-img" />
        <div class="program-card-content">
          <span class="program-badge">${program.targetSemesters} · ${program.targetYear}</span>
          <h3>${program.name}</h3>
          <p>${program.shortDesc}</p>
          <div class="tag-list">
            ${program.tags.slice(0, 3).map((t) => `<span class="tag-item">${t}</span>`).join("")}
          </div>
          <div class="card-action-footer">
            <a href="#/${program.id}" class="link-btn">View Full Course Details ${svgArrowRight()}</a>
          </div>
        </div>
      </div>
    `;
  }

  /* ---------------------------------------------------------------- *
   * 2. CAREER JOURNEY VIEW
   * ---------------------------------------------------------------- */
  function renderCareerJourney() {
    const data = window.CDC_DATA.careerJourney;
    const { semesters, metadata } = data;

    CDC_SKELETON.simulate(
      viewRoot,
      `<div class="skeleton-wrap">${CDC_SKELETON.grid(4)}</div>`,
      () => {
        viewRoot.innerHTML = `
          <div class="container section">
            <div class="section-title-block">
              <h2>Interactive Semester Career Journey</h2>
              <p>Step-by-step roadmap mapping student progression across Semesters I through VIII.</p>
            </div>

            <div class="timeline-container">
              ${semesters.map((s) => `
                <div class="timeline-step">
                  <div class="timeline-header">
                    <div>
                      <span class="timeline-sem">${s.sem}</span>
                      <span style="font-size: 0.84rem; color: var(--text-muted); margin-left: 6px;">(${s.year})</span>
                    </div>
                    <span class="timeline-year">${s.phase}</span>
                  </div>
                  <div class="timeline-phase">Primary Focus: ${s.focus}</div>
                  <p class="timeline-desc">${s.description}</p>
                  <ul class="timeline-bullets">
                    ${s.highlights.map((h) => `<li>${h}</li>`).join("")}
                  </ul>
                </div>
              `).join("")}
            </div>

            ${renderSubtleSourceFootnote(metadata.source, metadata.sourceUrl)}
          </div>
        `;
      },
      280
    );
  }

  /* ---------------------------------------------------------------- *
   * 3. SKILLUP VIEW (PERFECTLY FORMATTED COURSE MODULES)
   * ---------------------------------------------------------------- */
  function renderSkillUp() {
    const data = window.CDC_DATA.skillup;
    const { name, tagline, targetGroup, trainingHours, targetSemesters, overview, semesterProgression, skillsCovered, projectsAndAssessment, metadata } = data;

    const formattedSkillUpModules = [
      {
        icon: "💻",
        title: "Competitive Coding with Python & DSA",
        semester: "III Semester",
        description: "Mastering core data structures, space/time complexity analysis, and problem solving across 40+ coding patterns on BuildIT and HackerRank.",
        topics: [
          "Fundamentals of programming & algorithmic complexity",
          "Data structures: Arrays, Stacks, Queues, Trees, Graphs",
          "Problem solving using 40+ pattern paradigms",
          "BuildIT live assessment drills & speed coding"
        ]
      },
      {
        icon: "🗄️",
        title: "Database Design & MySQL Optimization",
        semester: "IV Semester",
        description: "Designing relational database schemas, writing complex SQL queries, database normalization, joins, and character collations.",
        topics: [
          "Database design & 3NF normalization principles",
          "MySQL data types, indexes, & storage engines",
          "Complex joins, subqueries, triggers, & stored procedures",
          "Hands-on database manipulation & performance tuning"
        ]
      },
      {
        icon: "☕",
        title: "Core Java & Advanced OOPs Fundamentals",
        semester: "IV Semester",
        description: "Solid foundation in Java object-oriented concepts, memory management, multithreading, and generic collections.",
        topics: [
          "Java 17 LTS syntax & OOP principles",
          "Java Generics, Collections Framework, & Iterators",
          "Lambda expressions & Stream API data processing",
          "Multithreading, concurrency, & file I/O operations"
        ]
      },
      {
        icon: "🚀",
        title: "Java Full Stack (Java 17 LTS & Spring Boot REST)",
        semester: "V Semester",
        description: "Building production-grade web applications with JSP, Servlets, Hibernate ORM, and Spring Boot RESTful APIs.",
        topics: [
          "JSP, Servlets, & JSTL dynamic web development",
          "Hibernate ORM data persistence & entity mappings",
          "Spring Boot RESTful microservices architecture",
          "JavaScript frontend integration & DOM manipulation"
        ]
      },
      {
        icon: "☁️",
        title: "Cloud Application Development",
        semester: "VI Semester",
        description: "Deploying and managing scalable software across AWS, Microsoft Azure, and Aneka cloud computing environments.",
        topics: [
          "AWS EC2, S3, RDS, & IAM cloud infrastructure",
          "Microsoft Azure cloud services deployment",
          "Aneka cloud computing network setup",
          "Cloud native app architecture & resilience"
        ]
      },
      {
        icon: "⚙️",
        title: "DevOps & CI/CD Pipeline Automation",
        semester: "VI Semester",
        description: "Automating software engineering workflows across development, containerization, and deployment.",
        topics: [
          "Version control with Git & GitHub workflows",
          "Continuous integration with Jenkins & Maven",
          "Automated testing with Selenium",
          "Docker containerization & Kubernetes orchestration"
        ]
      },
      {
        icon: "🌐",
        title: "Computer Networks & Protocol Stacks",
        semester: "VI Semester",
        description: "Hands-on network configuration, OSI 7-layer model, TCP/IP protocol suite, and socket security.",
        topics: [
          "LAN, WAN, & Wireless network architectures",
          "OSI reference model & TCP/IP protocol suite",
          "Socket programming & application layer protocols",
          "Network security & data integrity"
        ]
      },
      {
        icon: "🧩",
        title: "Programming Puzzles & Analytical Logic",
        semester: "VI Semester",
        description: "Enhancing cognitive thinking and problem-solving abilities for high-level technical screening tests.",
        topics: [
          "Digits & mathematical puzzle challenges",
          "Blood relations & logical deduction",
          "Complex seating arrangements & logic grids",
          "Algorithmic brain teasers & speed drills"
        ]
      },
      {
        icon: "📊",
        title: "Quantitative Aptitude & Numerical Reasoning",
        semester: "Semesters III – VI",
        description: "Comprehensive aptitude training covering numerical computation, speed math, and data interpretation.",
        topics: [
          "Time, Distance, Speed & Time & Work problems",
          "Number theory, profit & loss, simple/compound interest",
          "Permutations, combinations, & probability",
          "Data interpretation charts, clock & calendar logic"
        ]
      },
      {
        icon: "💬",
        title: "Professional Communication & Soft Skills",
        semester: "Semesters III – VI",
        description: "Corporate soft skills, accent neutralization, group discussion dynamics, and technical interview etiquette.",
        topics: [
          "Grammar precision & grammatical error detection",
          "Vocabulary enhancement & accent neutralization",
          "Group discussion strategy & public speaking",
          "Corporate email writing & interview presentation"
        ]
      }
    ];

    CDC_SKELETON.simulate(
      viewRoot,
      CDC_SKELETON.detailLayout(),
      () => {
        viewRoot.innerHTML = `
          <div class="container section">
            <!-- Program Header Banner -->
            <div class="card" style="padding: 28px; background: linear-gradient(135deg, #FFFFFF, #F0F9FF); border-color: #BAE6FD; margin-bottom: 24px;">
              <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;">
                <div>
                  <span class="program-badge">${targetSemesters} · ${targetGroup}</span>
                  <h1 style="font-size: 2.2rem; margin: 6px 0;">${name}</h1>
                  <p style="font-size: 1.02rem; color: var(--text-secondary); max-width: 60ch;">${tagline}</p>
                </div>
                <div>
                  <a href="#/placement-integration" class="btn btn-launch">Apply via Placement Portal ${svgArrowRight()}</a>
                </div>
              </div>
            </div>

            <!-- Snapshot Metrics -->
            <div class="hero-stats-grid" style="margin-bottom: 28px;">
              <div class="stat-box">
                <div class="stat-num">${trainingHours}</div>
                <div class="stat-desc">Structured Training Hours</div>
              </div>
              <div class="stat-box">
                <div class="stat-num">${targetSemesters}</div>
                <div class="stat-desc">Target Academic Scope</div>
              </div>
              <div class="stat-box">
                <div class="stat-num">${targetGroup}</div>
                <div class="stat-desc">Learner Benchmark</div>
              </div>
              <div class="stat-box">
                <div class="stat-num">2+ Projects</div>
                <div class="stat-desc">Required Full-Stack Projects</div>
              </div>
            </div>

            <!-- Program Overview -->
            <div class="card" style="padding: 22px; margin-bottom: 28px;">
              <h2>Program Overview</h2>
              <p style="font-size: 0.94rem; color: var(--text-secondary); margin-top: 6px;">${overview}</p>
            </div>

            <!-- Semester Breakdown Cards -->
            <div class="section-title-block">
              <h2>Four-Semester Progression Roadmap</h2>
            </div>

            ${semesterProgression.map((s) => `
              <div class="semester-breakdown-card">
                <div class="semester-breakdown-header">
                  <div>
                    <span class="program-badge">${s.semester}</span>
                    <h3 style="font-size: 1.2rem; margin-top: 4px;">${s.title}</h3>
                  </div>
                </div>
                <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 12px;">${s.description}</p>
                <ul class="topics-checklist">
                  ${s.topics.map((t) => `<li>${svgCheck()} <span>${t}</span></li>`).join("")}
                </ul>
              </div>
            `).join("")}

            <!-- Formatted Course Modules Grid -->
            <div class="section-title-block" style="margin-top: 36px;">
              <h2>Formatted SkillUP Course Modules</h2>
              <p>Detailed course breakdown across software development, cloud, database, aptitude, and soft skills.</p>
            </div>

            <div class="course-formatted-grid">
              ${formattedSkillUpModules.map((m) => `
                <div class="course-module-card">
                  <div class="course-module-header">
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <div class="course-module-icon">${m.icon}</div>
                      <div>
                        <h4>${m.title}</h4>
                        <span style="font-size: 0.74rem; font-weight: 700; color: var(--accent-sky);">${m.semester}</span>
                      </div>
                    </div>
                  </div>
                  <p>${m.description}</p>
                  <strong style="font-size: 0.78rem; color: var(--accent-navy); margin-bottom: 6px;">Topics Covered:</strong>
                  <ul class="topics-checklist">
                    ${m.topics.map((t) => `<li>${svgCheck()} <span>${t}</span></li>`).join("")}
                  </ul>
                </div>
              `).join("")}
            </div>

            <!-- BuildIT Assessment & Project Requirements -->
            <div class="card" style="padding: 24px; margin-top: 28px; background: #F0F9FF; border-color: #BAE6FD;">
              <h3 style="color: #0369A1; font-size: 1.2rem; margin-bottom: 8px;">BuildIT Platform Assessment &amp; Capstone Requirements</h3>
              <p style="font-size: 0.9rem; color: #0C4A6E;">
                <strong>Industry Projects Required:</strong> ${projectsAndAssessment.projectsRequired}<br/>
                <strong>Assessment Engine:</strong> ${projectsAndAssessment.assessmentPlatform}<br/>
                <strong>Evaluation Protocol:</strong> ${projectsAndAssessment.evaluationMode}
              </p>
            </div>

            ${renderSubtleSourceFootnote(metadata.source, metadata.sourceUrl)}
          </div>
        `;
      },
      280
    );
  }

  /* ---------------------------------------------------------------- *
   * 4. SKILLNEXT VIEW (PERFECTLY FORMATTED EMERGING TECH DOMAINS)
   * ---------------------------------------------------------------- */
  function renderSkillNext() {
    const data = window.CDC_DATA.skillnext;
    const { name, tagline, targetGroup, trainingHours, targetSemesters, overview, progressionPhases, skillsCovered, differentiatorsFromSkillUp, metadata } = data;

    const formattedSkillNextDomains = [
      {
        icon: "🤖",
        title: "Artificial Intelligence & Machine Learning",
        focus: "Supervised & Unsupervised Learning, Regression, Classification, Model Tuning",
        details: "Building predictive algorithms, feature engineering, evaluation metrics, and deploying ML models."
      },
      {
        icon: "🧠",
        title: "Deep Learning & Neural Networks",
        focus: "CNNs, RNNs, Transformers, PyTorch, & TensorFlow",
        details: "Designing deep neural network architectures for computer vision and sequential data analysis."
      },
      {
        icon: "✨",
        title: "Generative AI & LLM Applications",
        focus: "Prompt Engineering, RAG Architectures, Vector Databases, LangChain",
        details: "Integrating foundation models into real-world software applications and building agentic workflows."
      },
      {
        icon: "📊",
        title: "Data Science & Advanced Analytics",
        focus: "Data Pipelines, Pandas, NumPy, Visualizations, Feature Extraction",
        details: "Processing large-scale datasets, exploratory data analysis, and business intelligence reporting."
      },
      {
        icon: "☁️",
        title: "Cloud Computing & Native Architectures",
        focus: "Microservices, AWS/Azure Cloud Infrastructure, Serverless Computing",
        details: "Designing resilient, auto-scaling, cloud-native software architectures."
      },
      {
        icon: "🔒",
        title: "Cyber Security & Information Assurance",
        focus: "Network Security, Cryptography, Vulnerability Assessment, Security Protocols",
        details: "Securing web endpoints, understanding common attack vectors, and implementing zero-trust models."
      },
      {
        icon: "⚙️",
        title: "DevOps & Continuous Delivery",
        focus: "Docker, Kubernetes, Jenkins Pipelines, Infrastructure as Code",
        details: "Automating application build, testing, containerization, and cloud deployment pipelines."
      },
      {
        icon: "📱",
        title: "Mobile Application Development",
        focus: "Cross-Platform App Dev (Flutter / React Native), REST API Integration",
        details: "Building responsive mobile client apps integrated with backend microservices."
      }
    ];

    CDC_SKELETON.simulate(
      viewRoot,
      CDC_SKELETON.detailLayout(),
      () => {
        viewRoot.innerHTML = `
          <div class="container section">
            <!-- Program Header Banner -->
            <div class="card" style="padding: 28px; background: linear-gradient(135deg, #FFFFFF, #F0F9FF); border-color: #BAE6FD; margin-bottom: 24px;">
              <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;">
                <div>
                  <span class="program-badge">${targetSemesters} · ${targetGroup}</span>
                  <h1 style="font-size: 2.2rem; margin: 6px 0;">${name}</h1>
                  <p style="font-size: 1.02rem; color: var(--text-secondary); max-width: 60ch;">${tagline}</p>
                </div>
                <div>
                  <a href="#/placement-integration" class="btn btn-launch">Apply via Placement Portal ${svgArrowRight()}</a>
                </div>
              </div>
            </div>

            <!-- Snapshot Metrics -->
            <div class="hero-stats-grid" style="margin-bottom: 28px;">
              <div class="stat-box">
                <div class="stat-num">${trainingHours}</div>
                <div class="stat-desc">Training Hours</div>
              </div>
              <div class="stat-box">
                <div class="stat-num">${targetSemesters}</div>
                <div class="stat-desc">Target Semesters</div>
              </div>
              <div class="stat-box">
                <div class="stat-num">${targetGroup}</div>
                <div class="stat-desc">Target Learners</div>
              </div>
              <div class="stat-box">
                <div class="stat-num">Deep-Tech</div>
                <div class="stat-desc">AI, Cloud &amp; Security</div>
              </div>
            </div>

            <!-- Overview -->
            <div class="card" style="padding: 22px; margin-bottom: 28px;">
              <h2>Program Overview</h2>
              <p style="font-size: 0.94rem; color: var(--text-secondary); margin-top: 6px;">${overview}</p>
            </div>

            <!-- Specialization Phases -->
            <div class="section-title-block">
              <h2>Program Progression Phases</h2>
            </div>

            ${progressionPhases.map((phase) => `
              <div class="semester-breakdown-card">
                <div class="semester-breakdown-header">
                  <div>
                    <span class="program-badge">${phase.phase}</span>
                    <h3 style="font-size: 1.2rem; margin-top: 4px;">${phase.title}</h3>
                  </div>
                </div>
                <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 12px;">${phase.description}</p>
                <ul class="topics-checklist">
                  ${phase.details.map((d) => `<li>${svgCheck()} <span>${d}</span></li>`).join("")}
                </ul>
              </div>
            `).join("")}

            <!-- Formatted Emerging Tech Specialization Cards -->
            <div class="section-title-block" style="margin-top: 36px;">
              <h2>Emerging Tech Specialization Domains</h2>
              <p>Specialization tracks provided during V and VI semesters for SkillNext active learners.</p>
            </div>

            <div class="course-formatted-grid">
              ${formattedSkillNextDomains.map((d) => `
                <div class="course-module-card">
                  <div class="course-module-header">
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <div class="course-module-icon">${d.icon}</div>
                      <div>
                        <h4>${d.title}</h4>
                      </div>
                    </div>
                  </div>
                  <p style="font-size: 0.86rem; font-weight: 700; color: var(--accent-sky); margin-bottom: 6px;">Focus: ${d.focus}</p>
                  <p style="font-size: 0.86rem; color: var(--text-secondary);">${d.details}</p>
                </div>
              `).join("")}
            </div>

            <!-- Comparison Table -->
            <div class="section-title-block" style="margin-top: 36px;">
              <h2>Differentiators: SkillNext vs SkillUP</h2>
            </div>

            <div class="table-responsive" style="margin-bottom: 28px;">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Aspect</th>
                    <th>SkillUP Program</th>
                    <th>SkillNext Program</th>
                  </tr>
                </thead>
                <tbody>
                  ${differentiatorsFromSkillUp.map((d) => `
                    <tr>
                      <td><strong>${d.aspect}</strong></td>
                      <td>${d.skillUp}</td>
                      <td>${d.skillNext}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>

            ${renderSubtleSourceFootnote(metadata.source, metadata.sourceUrl)}
          </div>
        `;
      },
      280
    );
  }

  /* ---------------------------------------------------------------- *
   * 5. SKILLBRIDGE VIEW (FORMATTED BATCH TABLE & MODULES)
   * ---------------------------------------------------------------- */
  function renderSkillBridge() {
    const data = window.CDC_DATA.skillbridge;
    const { name, tagline, targetGroup, targetSemesters, overview, batchesDocumented, curriculumModules, skillsCovered, metadata } = data;

    const formattedSkillBridgeBatches = [
      {
        batch: "SB1",
        branch: "Computer Science & Engineering (CSE)",
        schedule: "FN / AN Sessions",
        focus: "C Programming Logic, Control Flow & Data Structures I",
        mentor: "CDC Technical Mentors",
        lab: "BuildIT C Programming Lab"
      },
      {
        batch: "SB2",
        branch: "Computer Science & Engineering (CSE)",
        schedule: "FN / AN Sessions",
        focus: "Python Syntax, Recursion & Algorithmic Thinking",
        mentor: "CDC Technical Mentors",
        lab: "BuildIT Python Lab"
      },
      {
        batch: "SB3",
        branch: "CSE & Electrical & Electronics Engineering (EEE)",
        schedule: "FN Sessions",
        focus: "Foundational Problem Solving & Mathematical Patterns",
        mentor: "CDC Technical Mentors",
        lab: "BuildIT Core Lab"
      },
      {
        batch: "SB4",
        branch: "CSE (AI & Machine Learning)",
        schedule: "AN Sessions",
        focus: "Python Foundations, Arrays & String Manipulation",
        mentor: "CDC Technical Mentors",
        lab: "BuildIT AI Lab"
      },
      {
        batch: "SB5",
        branch: "CSE(AI&ML), CSE(Data Science), ECE & IT",
        schedule: "AN Sessions",
        focus: "Pattern-Based Coding Drills & Array Algorithms",
        mentor: "CDC Technical Mentors",
        lab: "BuildIT Multi-Dept Lab"
      },
      {
        batch: "SB6",
        branch: "CSE(AI&ML), CSE(Data Science), ECE & IT",
        schedule: "AN Sessions",
        focus: "BuildIT Automated Coding Assessments & Logic Warmups",
        mentor: "CDC Technical Mentors",
        lab: "BuildIT Assessment Lab"
      }
    ];

    CDC_SKELETON.simulate(
      viewRoot,
      CDC_SKELETON.detailLayout(),
      () => {
        viewRoot.innerHTML = `
          <div class="container section">
            <div class="card" style="padding: 24px; background: linear-gradient(135deg, #FFFFFF, #F0F9FF); border-color: #BAE6FD; margin-bottom: 20px;">
              <span class="program-badge">${targetSemesters} · ${targetGroup}</span>
              <h1 style="font-size: 2rem; margin: 4px 0;">${name}</h1>
              <p style="font-size: 0.98rem; color: var(--text-secondary); max-width: 60ch;">${tagline}</p>
            </div>

            <!-- Snapshot Metrics -->
            <div class="hero-stats-grid" style="margin-bottom: 24px;">
              <div class="stat-box">
                <div class="stat-num">6 Batches</div>
                <div class="stat-desc">SB1 – SB6 Allocations</div>
              </div>
              <div class="stat-box">
                <div class="stat-num">Sem III &amp; IV</div>
                <div class="stat-desc">Academic Scope</div>
              </div>
              <div class="stat-box">
                <div class="stat-num">C &amp; Python</div>
                <div class="stat-desc">Core Languages</div>
              </div>
              <div class="stat-box">
                <div class="stat-num">BuildIT</div>
                <div class="stat-desc">Assessment Platform</div>
              </div>
            </div>

            <div class="card" style="padding: 20px; margin-bottom: 24px;">
              <h2>Foundational On-Ramp Overview</h2>
              <p style="font-size: 0.92rem; color: var(--text-secondary); margin-top: 6px;">${overview}</p>
            </div>

            <div class="section-title-block">
              <h2>Formatted CDC SkillBridge Batches (SB1 – SB6)</h2>
              <p>Detailed batch structure, allocated engineering branches, and lab schedules.</p>
            </div>

            <div class="course-formatted-grid" style="margin-bottom: 24px;">
              ${formattedSkillBridgeBatches.map((b) => `
                <div class="course-module-card">
                  <div class="course-module-header">
                    <div style="display:flex; align-items:center; gap:10px;">
                      <div class="course-module-icon">⚡</div>
                      <div>
                        <h4>Batch ${b.batch}</h4>
                        <span style="font-size:0.74rem; font-weight:700; color:var(--accent-sky);">${b.schedule}</span>
                      </div>
                    </div>
                  </div>
                  <p style="font-size:0.86rem; font-weight:700; color:var(--accent-navy); margin-bottom:4px;">Enrolled: ${b.branch}</p>
                  <p style="font-size:0.84rem; color:var(--text-secondary); margin-bottom:8px;">${b.focus}</p>
                  <div class="tag-list">
                    <span class="tag-item">Lab: ${b.lab}</span>
                    <span class="tag-item">Mentor: ${b.mentor}</span>
                  </div>
                </div>
              `).join("")}
            </div>

            <div class="section-title-block">
              <h2>Documented SkillBridge Schedule Matrix</h2>
            </div>

            <div class="table-responsive" style="margin-bottom: 24px;">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Batch ID</th>
                    <th>Enrolled Branches</th>
                    <th>Session Schedule</th>
                  </tr>
                </thead>
                <tbody>
                  ${batchesDocumented.map((b) => `
                    <tr>
                      <td><strong>${b.batch}</strong></td>
                      <td>${b.branch}</td>
                      <td><span class="tag-item">${b.schedule}</span></td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>

            <div class="section-title-block">
              <h2>Foundational Modules Covered</h2>
            </div>

            <div class="course-formatted-grid">
              ${curriculumModules.map((m) => `
                <div class="course-module-card">
                  <h4>${m.module}</h4>
                  <p style="font-size: 0.86rem; color: var(--text-secondary); margin-top: 6px;">${m.details}</p>
                </div>
              `).join("")}
            </div>

            ${renderSubtleSourceFootnote(metadata.source, metadata.sourceUrl)}
          </div>
        `;
      },
      280
    );
  }

  /* ---------------------------------------------------------------- *
   * 6. BOOTCAMPS VIEW
   * ---------------------------------------------------------------- */
  function renderBootcamps() {
    const data = window.CDC_DATA.bootcamps;
    const { bootcamps, metadata, description } = data;

    CDC_SKELETON.simulate(
      viewRoot,
      `<div class="skeleton-wrap">${CDC_SKELETON.grid(4)}</div>`,
      () => {
        viewRoot.innerHTML = `
          <div class="container section">
            <div class="section-title-block">
              <h2>CDC Technical Bootcamps Catalog</h2>
              <p>${description}</p>
            </div>

            <div class="course-formatted-grid">
              ${bootcamps.map((b) => `
                <div class="course-module-card">
                  <div class="course-module-header">
                    <div>
                      <h4>${b.name}</h4>
                      <span class="program-badge">${b.durationHours} · ${b.targetStudents}</span>
                    </div>
                  </div>
                  <p style="margin: 8px 0;">${b.purpose}</p>
                  <strong style="font-size:0.78rem; color:var(--accent-navy); margin-bottom:6px;">Key Topics:</strong>
                  <ul class="topics-checklist">
                    ${b.topics.map((t) => `<li>${svgCheck()} <span>${t}</span></li>`).join("")}
                  </ul>
                  <div class="tag-list" style="margin-top:14px;">
                    ${b.skills.map((s) => `<span class="tag-item">${s}</span>`).join("")}
                  </div>
                </div>
              `).join("")}
            </div>

            ${renderSubtleSourceFootnote(metadata.source, metadata.sourceUrl)}
          </div>
        `;
      },
      280
    );
  }

  /* ---------------------------------------------------------------- *
   * 7. TOP-UPS VIEW
   * ---------------------------------------------------------------- */
  function renderTopUps() {
    const data = window.CDC_DATA.topups;
    const { topUps, metadata, description } = data;

    CDC_SKELETON.simulate(
      viewRoot,
      `<div class="skeleton-wrap">${CDC_SKELETON.grid(4)}</div>`,
      () => {
        viewRoot.innerHTML = `
          <div class="container section">
            <div class="section-title-block">
              <h2>CDC VI Semester Top-Up Courses</h2>
              <p>${description}</p>
            </div>

            <div class="course-formatted-grid">
              ${topUps.map((t) => `
                <div class="course-module-card">
                  <span class="program-badge">${t.targetSemester}</span>
                  <h3 style="font-size:1.15rem; margin:8px 0;">${t.name}</h3>
                  <p>${t.focus}</p>
                  <strong style="font-size:0.78rem; color:var(--accent-navy); margin-top:8px;">Topics Covered:</strong>
                  <ul class="topics-checklist">
                    ${t.topicsCovered.map((topic) => `<li>${svgCheck()} <span>${topic}</span></li>`).join("")}
                  </ul>
                </div>
              `).join("")}
            </div>

            ${renderSubtleSourceFootnote(metadata.source, metadata.sourceUrl)}
          </div>
        `;
      },
      280
    );
  }

  /* ---------------------------------------------------------------- *
   * 8. CAREER READINESS VIEW
   * ---------------------------------------------------------------- */
  function renderCareerReadiness() {
    const data = window.CDC_DATA.careerReadiness;
    const { skillRefresherProgram, darpanReviewProcess, metadata } = data;

    CDC_SKELETON.simulate(
      viewRoot,
      `<div class="skeleton-wrap">${CDC_SKELETON.grid(4)}</div>`,
      () => {
        viewRoot.innerHTML = `
          <div class="container section">
            <div class="section-title-block">
              <h2>${skillRefresherProgram.name}</h2>
              <p>${skillRefresherProgram.overview}</p>
            </div>

            <div class="card" style="padding: 20px; margin-bottom: 24px; background: #F0F9FF; border-color: #BAE6FD;">
              <div style="font-size: 0.88rem; color: #0C4A6E;">
                Target: <strong>${skillRefresherProgram.targetAudience}</strong> · Duration: <strong>${skillRefresherProgram.duration}</strong> · Body: <strong>${skillRefresherProgram.conductingBody}</strong>
              </div>
            </div>

            <div class="course-formatted-grid" style="margin-bottom: 32px;">
              ${skillRefresherProgram.pillars.map((p) => `
                <div class="course-module-card">
                  <h4>${p.title}</h4>
                  <ul class="topics-checklist" style="margin-top: 8px;">
                    ${p.topics.map((t) => `<li>${svgCheck()} <span>${t}</span></li>`).join("")}
                  </ul>
                </div>
              `).join("")}
            </div>

            <div class="section-title-block">
              <h2>${darpanReviewProcess.name}</h2>
              <p>${darpanReviewProcess.description}</p>
            </div>

            <div class="table-responsive">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Schedule Date</th>
                    <th>Venue Location</th>
                    <th>Review Panels</th>
                    <th>Participating Branches</th>
                  </tr>
                </thead>
                <tbody>
                  ${darpanReviewProcess.verifiedSchedules.map((s) => `
                    <tr>
                      <td><strong>${s.date}</strong></td>
                      <td>${s.venue}</td>
                      <td>${s.panels.join(", ")}</td>
                      <td>${s.branchesCovered.join(", ")}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>

            ${renderSubtleSourceFootnote(metadata.source, metadata.sourceUrl)}
          </div>
        `;
      },
      280
    );
  }

  /* ---------------------------------------------------------------- *
   * 9. HACKATHONS VIEW
   * ---------------------------------------------------------------- */
  function renderHackathons() {
    const data = window.CDC_DATA.hackathons;
    const { events, metadata, description } = data;

    CDC_SKELETON.simulate(
      viewRoot,
      `<div class="skeleton-wrap">${CDC_SKELETON.grid(4)}</div>`,
      () => {
        viewRoot.innerHTML = `
          <div class="container section">
            <div class="section-title-block">
              <h2>CDC Hackathons &amp; Assessment Contests</h2>
              <p>${description}</p>
            </div>

            <div class="cards-grid-2">
              ${events.map((e) => `
                <div class="card program-card">
                  <img src="${e.image}" alt="${e.title}" class="program-card-img" />
                  <div class="program-card-content">
                    <span class="program-badge">${e.category} · ${e.date}</span>
                    <h3>${e.title}</h3>
                    <p>${e.description}</p>
                    <div style="font-size:0.82rem; color:var(--text-muted); margin-top:8px;">
                      ${e.venue ? `<div><strong>Venue:</strong> ${e.venue}</div>` : ""}
                      ${e.participation ? `<div><strong>Participation:</strong> ${e.participation}</div>` : ""}
                    </div>
                  </div>
                </div>
              `).join("")}
            </div>

            ${renderSubtleSourceFootnote(metadata.source, metadata.sourceUrl)}
          </div>
        `;
      },
      280
    );
  }

  /* ---------------------------------------------------------------- *
   * 10. CERTIFICATIONS VIEW
   * ---------------------------------------------------------------- */
  function renderCertifications() {
    const data = window.CDC_DATA.certifications;
    const { certifications, metadata, disclaimer } = data;

    CDC_SKELETON.simulate(
      viewRoot,
      `<div class="skeleton-wrap">${CDC_SKELETON.grid(4)}</div>`,
      () => {
        viewRoot.innerHTML = `
          <div class="container section">
            <div class="section-title-block">
              <h2>Industry Certifications Support</h2>
              <p>${disclaimer}</p>
            </div>

            <div class="course-formatted-grid">
              ${certifications.map((c) => `
                <div class="course-module-card">
                  <span class="program-badge">${c.domain}</span>
                  <h3 style="font-size:1.15rem; margin:6px 0;">${c.title}</h3>
                  <div style="font-size:0.82rem; color:var(--accent-sky); margin-bottom:8px;">Provider: ${c.provider} · Track: ${c.relatedProgram}</div>
                  <p>${c.trainingSupport}</p>
                  <div class="card-action-footer" style="margin-top:12px;">
                    <a href="${c.officialLink}" target="_blank" rel="noopener" class="link-btn">Official Provider ↗</a>
                  </div>
                </div>
              `).join("")}
            </div>

            ${renderSubtleSourceFootnote(metadata.source, metadata.sourceUrl)}
          </div>
        `;
      },
      280
    );
  }

  /* ---------------------------------------------------------------- *
   * 11. RESOURCES VIEW
   * ---------------------------------------------------------------- */
  function renderResources() {
    const data = window.CDC_DATA.resources;
    const { internalPlatforms, curatedExternalPlatforms, metadata } = data;

    CDC_SKELETON.simulate(
      viewRoot,
      `<div class="skeleton-wrap">${CDC_SKELETON.grid(4)}</div>`,
      () => {
        viewRoot.innerHTML = `
          <div class="container section">
            <div class="section-title-block">
              <h2>Official IARE Learning Platforms &amp; External Practice</h2>
            </div>

            <h3 style="font-size:1.2rem; margin-bottom:12px;">Official Internal Platforms</h3>
            <div class="cards-grid-2" style="margin-bottom:28px;">
              ${internalPlatforms.map((p) => `
                <div class="card">
                  <span class="program-badge">${p.category}</span>
                  <h4 style="font-size:1.1rem; margin:6px 0;">${p.name}</h4>
                  <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:12px;">${p.description}</p>
                  <a href="${p.url}" target="_blank" rel="noopener" class="link-btn">Access Platform ↗</a>
                </div>
              `).join("")}
            </div>

            <h3 style="font-size:1.2rem; margin-bottom:12px;">Curated External Practice</h3>
            <div class="cards-grid-4">
              ${curatedExternalPlatforms.map((e) => `
                <div class="card">
                  <h4 style="font-size:0.95rem; margin-bottom:2px;">${e.name}</h4>
                  <span style="font-size:0.72rem; color:var(--accent-sky); font-weight:700;">${e.domain}</span>
                  <p style="font-size:0.82rem; color:var(--text-secondary); margin:6px 0 10px;">${e.description}</p>
                  <a href="${e.url}" target="_blank" rel="noopener" class="link-btn" style="font-size:0.78rem;">Visit Site ↗</a>
                </div>
              `).join("")}
            </div>

            ${renderSubtleSourceFootnote(metadata.source, metadata.sourceUrl)}
          </div>
        `;
      },
      280
    );
  }

  /* ---------------------------------------------------------------- *
   * 12. INDUSTRY VIEW
   * ---------------------------------------------------------------- */
  function renderIndustry() {
    const data = window.CDC_DATA.industry;
    const { mouHighlights, recruitingPartners, metadata } = data;

    CDC_SKELETON.simulate(
      viewRoot,
      `<div class="skeleton-wrap">${CDC_SKELETON.grid(4)}</div>`,
      () => {
        viewRoot.innerHTML = `
          <div class="container section">
            <div class="section-title-block">
              <h2>Industry-Academia MOUs &amp; Recruiting Partners</h2>
            </div>

            <div class="cards-grid-2" style="margin-bottom:28px;">
              ${mouHighlights.map((m) => `
                <div class="card">
                  <span class="program-badge">${m.scope}</span>
                  <h3 style="font-size:1.15rem; margin:6px 0;">${m.partner}</h3>
                  <p style="font-size:0.88rem; color:var(--text-secondary);">${m.purpose}</p>
                </div>
              `).join("")}
            </div>

            <div class="section-title-block">
              <h2>62+ Corporate Recruiting Partners</h2>
            </div>

            <div class="card" style="padding:22px;">
              <div class="tag-list">
                ${recruitingPartners.map((r) => `<span class="tag-item" style="font-size:0.82rem; padding:4px 10px;">${r}</span>`).join("")}
              </div>
            </div>

            ${renderSubtleSourceFootnote(metadata.source, metadata.sourceUrl)}
          </div>
        `;
      },
      280
    );
  }

  /* ---------------------------------------------------------------- *
   * 13. FACULTY DEVELOPMENT VIEW
   * ---------------------------------------------------------------- */
  function renderFacultyDevelopment() {
    const data = window.CDC_DATA.facultyDevelopment;
    const { fdpPrograms, metadata, description } = data;

    CDC_SKELETON.simulate(
      viewRoot,
      `<div class="skeleton-wrap">${CDC_SKELETON.grid(4)}</div>`,
      () => {
        viewRoot.innerHTML = `
          <div class="container section">
            <div class="section-title-block">
              <h2>CDC Faculty Development Programs (FDP)</h2>
              <p>${description}</p>
            </div>

            <div class="course-formatted-grid">
              ${fdpPrograms.map((f) => `
                <div class="course-module-card">
                  <span class="program-badge">Target: ${f.targetAudience}</span>
                  <h3 style="font-size:1.12rem; margin:6px 0;">${f.title}</h3>
                  <ul class="topics-checklist">
                    ${f.keyTopics.map((t) => `<li>${svgCheck()} <span>${t}</span></li>`).join("")}
                  </ul>
                </div>
              `).join("")}
            </div>

            ${renderSubtleSourceFootnote(metadata.source, metadata.sourceUrl)}
          </div>
        `;
      },
      280
    );
  }

  /* ---------------------------------------------------------------- *
   * 14. TEAM DIRECTORY VIEW
   * ---------------------------------------------------------------- */
  function renderTeam() {
    const data = window.CDC_DATA.team;
    const { dean, chiefMentors, trainingMentors, supportingMentors, patOfficer, metadata } = data;

    CDC_SKELETON.simulate(
      viewRoot,
      `<div class="skeleton-wrap">${CDC_SKELETON.grid(6)}</div>`,
      () => {
        directoryFilter = { query: "", subject: "All" };
        viewRoot.innerHTML = `
          <div class="container section">
            <div class="section-title-block">
              <h2>CDC Leadership &amp; Mentors Directory</h2>
              <p>Official faculty members guiding CDC skill programs, quantitative aptitude, technical tracks, and soft skills.</p>
            </div>

            <!-- Dean Card -->
            <div class="card" style="margin-bottom:24px; padding:22px; background: linear-gradient(135deg, #FFFFFF, #F0F9FF); border-color: #BAE6FD;">
              <div style="display:flex; gap:16px; align-items:center; flex-wrap:wrap;">
                <div class="faculty-avatar" style="width:60px; height:60px; font-size:1.2rem;">DP</div>
                <div>
                  <span class="program-badge">${dean.badge}</span>
                  <h3 style="font-size:1.3rem; margin:2px 0;">${dean.name}</h3>
                  <div style="font-size:0.84rem; color:var(--accent-sky); font-weight:700;">${dean.designation} · ${dean.department}</div>
                  <p style="font-size:0.86rem; color:var(--text-secondary); margin-top:4px;">${dean.roleDescription}</p>
                  <div style="font-size:0.8rem; color:var(--text-muted); margin-top:6px;">
                    📧 <a href="mailto:${dean.email}">${dean.email}</a> · 📞 ${dean.phone}
                  </div>
                </div>
              </div>
            </div>

            <div class="toolbar-row">
              <input type="search" class="search-input" id="faculty-search" placeholder="Search mentors by name or role…" />
              <div class="filter-chip-row" id="subject-chips"></div>
            </div>

            <div class="directory-grid" id="directory-grid"></div>

            ${renderSubtleSourceFootnote(metadata.source, metadata.sourceUrl)}
          </div>
        `;

        renderSubjectChips(viewRoot);
        renderDirectoryGrid(viewRoot);

        const searchInput = viewRoot.querySelector("#faculty-search");
        if (searchInput) {
          searchInput.addEventListener("input", (e) => {
            directoryFilter.query = e.target.value.trim().toLowerCase();
            renderDirectoryGrid(viewRoot);
          });
        }
      },
      280
    );
  }

  function getFacultyList() {
    const data = window.CDC_DATA.team;
    return [
      data.dean,
      ...data.chiefMentors,
      ...data.trainingMentors,
      ...data.supportingMentors,
      data.patOfficer
    ];
  }

  function renderSubjectChips(scope) {
    const container = scope.querySelector("#subject-chips");
    if (!container) return;

    const subjects = ["All", "Leadership", "Chief Mentor", "Technical Skill", "Arithmetic Skills", "Soft Skills", "PAT Officer"];
    container.innerHTML = subjects.map((s) => `
      <button type="button" class="filter-chip ${s === directoryFilter.subject ? "active" : ""}" data-subject="${s}">${s}</button>
    `).join("");

    container.querySelectorAll("[data-subject]").forEach((chip) => {
      chip.addEventListener("click", () => {
        directoryFilter.subject = chip.dataset.subject;
        container.querySelectorAll(".filter-chip").forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        renderDirectoryGrid(scope);
      });
    });
  }

  function renderDirectoryGrid(scope) {
    const grid = scope.querySelector("#directory-grid");
    if (!grid) return;

    const facultyList = getFacultyList();
    const { query, subject } = directoryFilter;

    const filtered = facultyList.filter((f) => {
      const matchesQuery = !query ||
        f.name.toLowerCase().includes(query) ||
        f.designation.toLowerCase().includes(query) ||
        f.roleDescription.toLowerCase().includes(query);

      const matchesSubject = subject === "All" ||
        (subject === "Leadership" && f.badge.includes("Dean")) ||
        (subject === "Chief Mentor" && f.badge.includes("Chief")) ||
        (subject === "PAT Officer" && f.badge.includes("PAT")) ||
        f.designation.toLowerCase().includes(subject.toLowerCase());

      return matchesQuery && matchesSubject;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:30px; color:var(--text-secondary);">No mentors match your search query.</div>`;
      return;
    }

    grid.innerHTML = filtered.map((f) => {
      const initials = f.name.split(" ").map((n) => n[0]).join("");
      return `
        <div class="directory-card">
          <div class="faculty-avatar">${initials}</div>
          <div class="directory-card-body">
            <h3>${f.name}</h3>
            <div class="designation">${f.designation}</div>
            <div class="contact-badges">
              <span class="contact-badge">${f.email}</span>
              ${f.phone ? `<span class="contact-badge">📞 ${f.phone}</span>` : ""}
            </div>
            <p style="font-size:0.78rem; color:var(--text-secondary); margin-top:4px;">${f.roleDescription}</p>
          </div>
        </div>
      `;
    }).join("");
  }

  /* ---------------------------------------------------------------- *
   * 15. ACHIEVEMENTS VIEW
   * ---------------------------------------------------------------- */
  function renderAchievements() {
    const data = window.CDC_DATA.achievements;
    const { placementStats, codingLeaderboards, metadata } = data;

    CDC_SKELETON.simulate(
      viewRoot,
      `<div class="skeleton-wrap">${CDC_SKELETON.grid(4)}</div>`,
      () => {
        viewRoot.innerHTML = `
          <div class="container section">
            <div class="section-title-block">
              <h2>CDC Achievements &amp; Placement Performance</h2>
            </div>

            <div class="hero-stats-grid" style="margin-bottom: 28px;">
              ${placementStats.map((s) => `
                <div class="stat-box">
                  <div class="stat-num">${s.value}</div>
                  <div class="stat-desc"><strong>${s.label}</strong><br/>${s.context}</div>
                </div>
              `).join("")}
            </div>

            <div class="section-title-block">
              <h2>Competitive Coding Leaderboards</h2>
            </div>

            <div class="cards-grid-3">
              ${codingLeaderboards.map((l) => `
                <div class="card" style="padding:18px;">
                  <h3 style="font-size:1.15rem; margin-bottom:6px;">${l.platform}</h3>
                  <p style="font-size:0.88rem; color:var(--text-secondary);">${l.achievement}</p>
                </div>
              `).join("")}
            </div>

            ${renderSubtleSourceFootnote(metadata.source, metadata.sourceUrl)}
          </div>
        `;
      },
      280
    );
  }

  /* ---------------------------------------------------------------- *
   * 16. GALLERY VIEW
   * ---------------------------------------------------------------- */
  function renderGallery() {
    const data = window.CDC_DATA.gallery;
    const { categories, items, metadata } = data;

    CDC_SKELETON.simulate(
      viewRoot,
      `<div class="skeleton-wrap">${CDC_SKELETON.grid(8, "skeleton-card--sm")}</div>`,
      () => {
        viewRoot.innerHTML = `
          <div class="container section">
            <div class="section-title-block">
              <h2>CDC Verified Media &amp; Photo Vault</h2>
              <p>Classroom photos, LEXICON hackathon highlights, and CDC campus media.</p>
            </div>

            <div class="filter-chip-row" id="gallery-category-chips" style="margin-bottom: 20px;">
              ${categories.map((c, i) => `
                <button class="filter-chip ${i === 0 ? "active" : ""}" data-category="${c}">${c}</button>
              `).join("")}
            </div>

            <div class="media-grid" id="gallery-grid">
              ${items.map((item) => `
                <div class="media-item" data-item-id="${item.id}">
                  <div class="media-thumb"><img src="${item.image}" alt="${item.title}" loading="lazy" /></div>
                  <div class="media-item-body">
                    <span class="cat">${item.category}</span>
                    <h4>${item.title}</h4>
                  </div>
                </div>
              `).join("")}
            </div>

            ${renderSubtleSourceFootnote(metadata.source, metadata.sourceUrl)}
          </div>
        `;

        const grid = viewRoot.querySelector("#gallery-grid");
        const chips = viewRoot.querySelectorAll("#gallery-category-chips .filter-chip");

        chips.forEach((chip) => {
          chip.addEventListener("click", () => {
            chips.forEach((c) => c.classList.remove("active"));
            chip.classList.add("active");
            const category = chip.dataset.category;
            const filtered = category === "All" ? items : items.filter((i) => i.category === category);
            if (grid) {
              grid.innerHTML = filtered.map((item) => `
                <div class="media-item" data-item-id="${item.id}">
                  <div class="media-thumb"><img src="${item.image}" alt="${item.title}" loading="lazy" /></div>
                  <div class="media-item-body">
                    <span class="cat">${item.category}</span>
                    <h4>${item.title}</h4>
                  </div>
                </div>
              `).join("");

              grid.querySelectorAll(".media-item").forEach((el) => {
                el.addEventListener("click", () => {
                  const found = items.find((p) => p.id === el.dataset.itemId);
                  if (found) openLightbox(found.title, found.caption, found.image);
                });
              });
            }
          });
        });

        if (grid) {
          grid.querySelectorAll(".media-item").forEach((el) => {
            el.addEventListener("click", () => {
              const found = items.find((p) => p.id === el.dataset.itemId);
              if (found) openLightbox(found.title, found.caption, found.image);
            });
          });
        }
      },
      280
    );
  }

  /* ---------------------------------------------------------------- *
   * 17. HANDBOOK VIEW
   * ---------------------------------------------------------------- */
  function renderHandbook() {
    const data = window.CDC_DATA.handbook;
    const { documentInfo, summaryText, keySections, metadata } = data;

    CDC_SKELETON.simulate(
      viewRoot,
      `<div class="skeleton-wrap">${CDC_SKELETON.grid(4)}</div>`,
      () => {
        viewRoot.innerHTML = `
          <div class="container section">
            <div class="section-title-block">
              <h2>${documentInfo.title}</h2>
              <p>${documentInfo.subtitle} (${documentInfo.totalPages} Pages · ${documentInfo.fileSize})</p>
            </div>

            <div class="card" style="margin-bottom: 24px; padding: 22px;">
              <p style="font-size: 0.92rem; color: var(--text-secondary);">${summaryText}</p>
              <div style="margin-top: 14px;">
                <button class="btn btn-launch" id="preview-handbook-btn">Preview Handbook Highlights 👁️</button>
              </div>
            </div>

            <div class="section-title-block">
              <h2>Table of Contents &amp; Key Sections</h2>
            </div>

            <div class="table-responsive">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Section Title</th>
                    <th>Page Range</th>
                    <th>Core Content Summary</th>
                  </tr>
                </thead>
                <tbody>
                  ${keySections.map((s) => `
                    <tr>
                      <td><strong>${s.section}</strong></td>
                      <td>${s.pages}</td>
                      <td>${s.topic}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>

            ${renderSubtleSourceFootnote(metadata.source, metadata.sourceUrl)}
          </div>
        `;

        const previewBtn = viewRoot.querySelector("#preview-handbook-btn");
        if (previewBtn) {
          previewBtn.addEventListener("click", () => {
            openLightbox(documentInfo.title, documentInfo.subtitle, documentInfo.pdfPath);
          });
        }
      },
      280
    );
  }

  /* ---------------------------------------------------------------- *
   * 18. PLACEMENT INTEGRATION VIEW
   * ---------------------------------------------------------------- */
  function renderPlacementIntegration() {
    const data = window.CDC_DATA.placementIntegration;
    const { relationshipModel, patOfficer, upcomingMockDrives, placementPortalLink, metadata } = data;

    CDC_SKELETON.simulate(
      viewRoot,
      `<div class="skeleton-wrap">${CDC_SKELETON.grid(3)}</div>`,
      () => {
        viewRoot.innerHTML = `
          <div class="container section">
            <div class="section-title-block">
              <h2>Placement &amp; PAT Portal Integration</h2>
              <p>Connecting CDC skill development with PAT recruitment drives and Samvidha placement portal.</p>
            </div>

            <div class="cards-grid-3" style="margin-bottom: 28px;">
              <div class="card" style="padding: 18px;">
                <span class="program-badge" style="margin-bottom:6px;">STEP 1: BUILD SKILLS</span>
                <h3 style="font-size: 1.15rem; margin-bottom: 4px;">CDC Core Programs</h3>
                <p style="font-size: 0.86rem; color: var(--text-secondary);">${relationshipModel.cdcRole}</p>
              </div>

              <div class="card" style="padding: 18px;">
                <span class="program-badge" style="margin-bottom:6px;">STEP 2: PREPARE RECRUITMENT</span>
                <h3 style="font-size: 1.15rem; margin-bottom: 4px;">PAT Office Drives</h3>
                <p style="font-size: 0.86rem; color: var(--text-secondary);">${relationshipModel.patRole}</p>
              </div>

              <div class="card" style="padding: 18px;">
                <span class="program-badge" style="margin-bottom:6px;">STEP 3: DISCOVER JOBS</span>
                <h3 style="font-size: 1.15rem; margin-bottom: 4px;">Placement Portal</h3>
                <p style="font-size: 0.86rem; color: var(--text-secondary);">${relationshipModel.portalRole}</p>
              </div>
            </div>

            <div class="card" style="margin-bottom: 24px; padding: 20px;">
              <h2>Placement and Training (PAT) Officer Contact</h2>
              <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 4px;">
                <strong>Officer:</strong> ${patOfficer.name} (${patOfficer.title})<br/>
                <strong>Office Venue:</strong> ${patOfficer.office}<br/>
                <strong>Email:</strong> <a href="mailto:${patOfficer.email}">${patOfficer.email}</a> · <strong>Phone:</strong> ${patOfficer.phone}
              </p>
            </div>

            <div class="section-title-block">
              <h2>Upcoming Darpan &amp; Resume Review Schedules</h2>
            </div>

            <div class="table-responsive" style="margin-bottom: 28px;">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Drive Title</th>
                    <th>Date</th>
                    <th>Venue</th>
                    <th>Panels</th>
                    <th>Participating Batches</th>
                  </tr>
                </thead>
                <tbody>
                  ${upcomingMockDrives.map((d) => `
                    <tr>
                      <td><strong>${d.title}</strong></td>
                      <td>${d.date}</td>
                      <td>${d.venue}</td>
                      <td>${d.panels.join(", ")}</td>
                      <td>${d.participatingBranches.join(", ")}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>

            <div class="cta-band">
              <div>
                <h2>Launch Samvidha Placement Portal</h2>
                <p>Live company registrations, placement test schedules, and offer letters.</p>
              </div>
              <a href="${placementPortalLink}" target="_blank" rel="noopener" class="btn btn-secondary">Go to Samvidha Portal ${svgArrowRight()}</a>
            </div>

            ${renderSubtleSourceFootnote(metadata.source, metadata.sourceUrl)}
          </div>
        `;
      },
      280
    );
  }

  /* ---------------------------------------------------------------- *
   * LIGHTBOX MODAL
   * ---------------------------------------------------------------- */
  function openLightbox(title, subtitle, imageOrPath) {
    if (!lightbox || !lightboxBody) return;

    lightboxBody.innerHTML = `
      <img src="${imageOrPath}" alt="${title}" style="width:100%; border-radius:12px; margin-bottom:12px;" />
      <h3 style="font-size:1.2rem; margin-bottom:4px;">${title}</h3>
      <p style="font-size:0.86rem; color:var(--text-secondary);">${subtitle || ""}</p>
    `;

    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    lightboxBody.innerHTML = "";
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-close-lightbox]").forEach((el) => {
    el.addEventListener("click", closeLightbox);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox && !lightbox.hidden) closeLightbox();
  });

  /* ---------------------------------------------------------------- *
   * LAUNCH BUTTON & MOBILE NAV
   * ---------------------------------------------------------------- */
  function handleLaunchPortal(e) {
    e.preventDefault();
    window.location.hash = "#/placement-integration";
  }

  if (launchBtn) launchBtn.addEventListener("click", handleLaunchPortal);

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      const open = mainNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => closeMobileNav());
  });
  subNavLinks.forEach((link) => {
    link.addEventListener("click", () => closeMobileNav());
  });

  const yearEl = document.getElementById("footer-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------------------------------------------------------- *
   * INIT
   * ---------------------------------------------------------------- */
  if (!window.location.hash) {
    window.location.hash = "#/home";
  } else {
    router();
  }

})();
