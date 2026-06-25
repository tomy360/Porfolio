/* ── Data ──────────────────────────────────────────────────────────────────── */

const ME = {
  name: "Tomás Sassone",
  role: "Estudiante de Front End Developer",
  tagline: "Forjando experiencias digitales con código limpio y diseño intencional.",
  location: "Argentina, Mendoza",
  available: true,
  cvUrl: "certificados/Tomas-Sassone-CV.pdf",
  github: "https://github.com/tomy360",
  linkedin: "https://linkedin.com/in/tu-perfil",
  email: "tomilamaja@hotmail.com",
  yearsExp: "1",
  projectsDone: "5",
  satisfiedClients: "2",
  openSourceContribs: "47+",
};

const SKILLS_LIST = [
  { name: "React / Next.js", level: 20, expert: false },
  { name: "CSS / Tailwind CSS", level: 15, expert: false },
  { name: "PostgreSQL", level: 20, expert: false },
  { name: "Git / GitHub", level: 15, expert: false },
  { name: "Figma", level: 15, expert: false },
  { name: "TypeScript", level: 15, expert: false },
  { name: "Node.js / Express", level: 20, expert: false },
];

const PROJECTS = [
  {
    name: "Iglesia Preparando el Camino",
    subtitle: "Web comunitaria con devocionales y gestión",
    description: "Plataforma para una iglesia y grupo de ayuda social con interactividad para cargar devocionales, música y planillas que se envían por mail.",
    tech: ["React", "Node.js", "Vercel"],
    liveUrl: "https://iglesia-preparando-el-camino.vercel.app/",
    githubUrl: "#",
    featured: true,
  },
  {
    name: "Jotac Refrigeraciones",
    subtitle: "Web de servicio técnico",
    description: "Sitio web profesional para servicio técnico de refrigeración, mostrando servicios y datos de contacto.",
    tech: ["HTML", "CSS", "JavaScript", "Vercel"],
    liveUrl: "https://jotacrefrigeraciones.vercel.app/",
    githubUrl: "#",
    featured: false,
  },
  {
    name: "Recetas del Día",
    subtitle: "Red social de cocina",
    description: "Web de cocina donde los usuarios pueden subir recetas, opinar, comentar, compartir consejos, organizar comidas y usar herramientas de cocina.",
    tech: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "https://recetasdeldia.vercel.app/index.html",
    githubUrl: "#",
    featured: true,
  },
  {
    name: "Sistema de Alabanza",
    subtitle: "Reproductor sincronizado para iglesias",
    description: "Proyecto local (sin web) — Reproductor sincronizado para iglesias. Reproduce videos con pistas de alabanza en PC y las transmite en tiempo real a celulares vía WebRTC, manteniendo el audio sincronizado. Incluye lista de reproducción, cancelación de voz L-R, ecualizador gráfico 5 bandas, Auto-EQ, crossfade, monitoreo remoto sin drift, waveform visual, y optimización de videos con FFmpeg.",
    tech: ["Node.js", "Express", "WebSocket", "WebRTC", "FFmpeg"],
    liveUrl: null,
    githubUrl: "#",
    featured: true,
  },
  {
    name: "Portfolio RPG",
    subtitle: "Este sitio",
    description: "Portfolio personal con temática de rol, construido con HTML, CSS y JavaScript vanilla. Diseño oscuro con estética RPG.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

const CERTIFICATIONS = [
  { name: "Desarrollo Web en HTML5 y CSS3", issuer: "Universidad de Helsinki", year: 2026, fileUrl: "certificados/Desarrollo_Web_en_Html5_y_Css3.pdf" },
  { name: "Professional Front End Developer", issuer: "En curso...", year: 2026, fileUrl: "#" },
];

const TABS = [
  { id: "sobre-mi", label: "Sobre Mí", icon: "scroll" },
  { id: "habilidades", label: "Habilidades", icon: "book-open" },
  { id: "proyectos", label: "Proyectos", icon: "backpack" },
  { id: "certificados", label: "Certificados", icon: "trophy" },
  { id: "contacto", label: "Contacto", icon: "message-square" },
];

/* ── SVG Icons (Lucide) ────────────────────────────────────────────────────── */

const SVG = {
  shield:
    `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="100%" height="100%"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  "file-text":
    `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="100%" height="100%"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  award:
    `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="100%" height="100%"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  github:
    `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="100%" height="100%"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
  linkedin:
    `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="100%" height="100%"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
  mail:
    `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="100%" height="100%"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  "external-link":
    `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="100%" height="100%"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>`,
  scroll:
    `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="100%" height="100%"><path d="M19 17V5a2 2 0 0 0-2-2H4"/><path d="M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"/></svg>`,
  "book-open":
    `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="100%" height="100%"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  backpack:
    `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="100%" height="100%"><path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M8 10h8"/><path d="M8 18h8"/><path d="M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`,
  trophy:
    `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="100%" height="100%"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`,
  "message-square":
    `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="100%" height="100%"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  "map-pin":
    `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="100%" height="100%"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
  star:
    `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="100%" height="100%"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  "check-circle-2":
    `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="100%" height="100%"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`,
};

function icon(name, w, h) {
  const svg = SVG[name] || "";
  return svg.replace('width="100%"', `width="${w || 16}"`).replace('height="100%"', `height="${h || 16}"`);
}

/* ── Helpers ────────────────────────────────────────────────────────────────── */

function html(strings, ...values) {
  return strings.reduce((acc, str, i) => acc + str + (values[i] !== undefined ? values[i] : ""), "");
}

function renderTag(text) {
  return `<span class="tag">${text}</span>`;
}

function renderCard(content, hover) {
  return `<div class="card${hover !== false ? " card-hover" : ""}">${content}</div>`;
}

function renderDivider() {
  return `<div class="divider">
    <div class="divider-line"></div>
    <span class="divider-star">✦</span>
    <div class="divider-line"></div>
  </div>`;
}

/* ── Sections ───────────────────────────────────────────────────────────────── */

function renderHero() {
  return html`
    <header class="hero" id="hero">
      <div class="hero-inner">
        <div class="avatar-box">
          <img src="assets/foto.jpg" alt="${ME.name}" style="width:100%;height:100%;object-fit:cover;" />
        </div>
        <div class="flex-1">
          <p class="hero-label">Portafolio Profesional</p>
          <h1 class="hero-name">${ME.name}</h1>
          <p class="hero-role">${ME.role}</p>
          <p class="hero-tagline">${ME.tagline}</p>
        </div>
        <div class="hero-stats">
          <div class="stat-box">
            <div class="stat-value">${ME.yearsExp} años</div>
            <div class="stat-label">Experiencia</div>
          </div>
          <div class="stat-box">
            <div class="stat-value">${ME.projectsDone}</div>
            <div class="stat-label">Proyectos</div>
          </div>
        </div>
      </div>
      <div class="hero-links">
        <div class="status-pill">
          <div class="status-dot pulse"></div>
          <span class="status-text">Disponible</span>
        </div>
        <span class="hero-location">
          ${icon("map-pin", 12, 12).replace('stroke="currentColor"', 'stroke="rgba(183, 83, 9, 0.6)"')}
          ${ME.location}
        </span>
        <div class="hero-actions">
          <a href="${ME.cvUrl}" target="_blank" rel="noopener noreferrer" class="btn-ghost">
            ${icon("file-text", 12, 12)} Descargar CV
          </a>
          <a href="${ME.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="btn-icon">
            ${icon("github", 16, 16)}
          </a>
          <a href="${ME.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="btn-icon">
            ${icon("linkedin", 16, 16)}
          </a>
        </div>
      </div>
      ${renderDivider()}
    </header>`;
}

function renderTabSobreMi() {
  const jobs = [
    { role: "Front End Developer Freelance", company: "Independiente", period: "2025 — Presente", desc: "Desarrollo de sitios web y aplicaciones frontend para clientes freelance. Creación de interfaces responsivas, integración de APIs y optimización de rendimiento." },
  ];

  const personalInfo = [
    { label: "Ubicación", value: ME.location },
    { label: "Email", value: ME.email },
    { label: "Idiomas", value: "Español (Nativo) · Inglés (Básico)" },
    { label: "Disponibilidad", value: "Remoto / Híbrido" },
  ];

  const stats = [
    { label: "Proyectos", value: ME.projectsDone },
    { label: "Años exp.", value: ME.yearsExp },
    { label: "Clientes", value: ME.satisfiedClients },
    { label: "Contribs. OS", value: ME.openSourceContribs },
  ];

  const favTechs = ["VS Code", "Node.js", "React", "SQL"];

  const timelineHTML = jobs.map((job, i) => html`
    <div class="timeline-item">
      <div>
        <div class="timeline-dot"></div>
        ${i < jobs.length - 1 ? '<div class="timeline-line"></div>' : ""}
      </div>
      <div class="timeline-content">
        <div class="timeline-header">
          <h4 class="timeline-role">${job.role}</h4>
          <span class="timeline-period">${job.period}</span>
        </div>
        <p class="timeline-company">${job.company}</p>
        <p class="timeline-desc">${job.desc}</p>
      </div>
    </div>`).join("");

  return html`
    <div class="grid-5">
      <div class="col-span-3 space-y-5">
        ${renderCard(`
          <div class="card-body">
            <h3 class="section-title">Acerca de mí</h3>
            <p class="body-text">Soy estudiante y entusiasta del desarrollo de software, con una formación de 2 años y medio en la carrera de Analista en Sistemas, donde adquirí bases sólidas de programación, especialmente en Java.</p>
            <p class="body-text">Además, he desarrollado proyectos personales en Unity como hobby, lo que me permitió fortalecer mi lógica de programación y mi capacidad para resolver problemas de manera creativa.</p>
            <p class="body-text">Actualmente me encuentro estudiando para convertirme en Professional Front End Developer, especializándome en JavaScript, HTML y CSS. Paralelamente, continúo ampliando mis conocimientos en tecnologías complementarias como SQL y Node.js, con el objetivo de comprender mejor el desarrollo de aplicaciones de forma integral.</p>
            <p class="body-text">Mi principal interés está orientado al desarrollo Front End, donde disfruto crear interfaces atractivas, funcionales y centradas en la experiencia del usuario. Sin embargo, también considero importante el conocimiento del Back End para desarrollar soluciones más completas y comprender todo el ciclo de una aplicación.</p>
            <p class="body-text">Me encuentro en constante aprendizaje, buscando mejorar mis habilidades técnicas y participar en proyectos que me permitan seguir creciendo como desarrollador.</p>
          </div>`, false)}

        ${renderCard(`
          <div class="card-body">
            <h3 class="section-title-sm">Experiencia de trabajo</h3>
            <div class="timeline">${timelineHTML}</div>
          </div>`, false)}
      </div>
      <div class="col-span-2 space-y-4">
        ${renderCard(`
          <div class="card-body">
            <h3 class="section-title-sm">Datos personales</h3>
            <div class="info-list">
              ${personalInfo.map(d => html`
                <div class="info-row">
                  <span class="info-label">${d.label}</span>
                  <span class="info-value">${d.value}</span>
                </div>`).join("")}
            </div>
          </div>`, false)}

        ${renderCard(`
          <div class="card-body">
            <h3 class="section-title-sm">Estadísticas</h3>
            <div class="stats-grid">
              ${stats.map(s => html`
                <div class="stat-item">
                  <div class="stat-number">${s.value}</div>
                  <div class="stat-desc">${s.label}</div>
                </div>`).join("")}
            </div>
          </div>`, false)}

        ${renderCard(`
          <div class="card-body">
            <h3 class="section-title-sm">Tecnologías favoritas</h3>
            <div class="tags-row">
              ${favTechs.map(t => renderTag(t)).join("")}
            </div>
          </div>`, false)}
      </div>
    </div>`;
}

function renderTabHabilidades() {
  const otherTools = [
    "Jest / Vitest", "AWS S3", "Vercel", "GitHub Actions", "Linux", "REST APIs",
    "Prisma ORM", "MongoDB", "Socket.io", "Vite", "ESLint", "Prettier",
  ];

  return html`
    ${renderCard(`
      <div class="card-body">
        <h3 class="section-title-sm">Stack técnico</h3>
        <div class="skills-grid" id="skills-grid">
          ${SKILLS_LIST.map((skill, i) => html`
            <div class="skill-item" data-delay="${i * 0.04}" data-idx="${i}">
              <div class="skill-header">
                <div class="skill-name">
                  <span>${skill.name}</span>
                  ${skill.expert ? '<span class="skill-badge">Experto</span>' : ""}
                </div>
                <span class="skill-pct">${skill.level}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-bar-fill ${skill.expert ? "expert" : "normal"}" data-level="${skill.level}" data-delay="${i * 0.04 + 0.2}"></div>
              </div>
            </div>`).join("")}
        </div>
        ${renderDivider()}
        <h3 class="section-title-sm" style="margin-top:1.75rem;">Otras herramientas</h3>
        <div class="other-tools">
          ${otherTools.map(t => renderTag(t)).join("")}
        </div>
      </div>`, false)}`;
}

function renderTabProyectos() {
  return html`
    <div class="projects-list">
      ${PROJECTS.map((p, i) => html`
        <div class="project-card" data-delay="${i * 0.09}" data-idx="${i}">
          ${renderCard(`
            <div class="project-inner">
              <div class="project-info">
                <div class="project-title-row">
                  <h3 class="project-title">${p.name}</h3>
                  ${p.featured ? `<span class="project-featured">${icon("star", 10, 10).replace('width="10"', 'width="10" height="10" style="width:10px;height:10px;"')} Destacado</span>` : ""}
                </div>
                <p class="project-subtitle">${p.subtitle}</p>
                <p class="project-desc">${p.description}</p>
                <div class="project-tags">
                  ${p.tech.map(t => renderTag(t)).join("")}
                </div>
              </div>
              <div class="project-actions">
                ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-ghost">${icon("external-link", 12, 12)} Ver sitio</a>` : ""}
                <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-ghost" style="background-color:var(--card);color:var(--muted-foreground);border-color:rgba(120,53,15,0.4);">${icon("github", 12, 12)} Código</a>
              </div>
            </div>`, true)}
        </div>`).join("")}
    </div>`;
}

function renderTabCertificados() {
  return html`
    <div class="certs-grid" id="certs-grid">
      ${CERTIFICATIONS.map((cert, i) => html`
        <div class="cert-card" data-delay="${i * 0.09}" data-idx="${i}">
          ${renderCard(`
            <div class="cert-inner">
              <div class="cert-header">
                <div class="cert-icon-box">${icon("award", 24, 24).replace('stroke="currentColor"', 'stroke="rgba(245, 158, 11, 0.8)"')}</div>
                <div class="flex-1 min-w-0">
                  <h3 class="cert-name">${cert.name}</h3>
                  <p class="cert-issuer">${cert.issuer}</p>
                  <div class="cert-verified">
                    ${icon("check-circle-2", 12, 12).replace('stroke="currentColor"', 'stroke="rgba(34, 197, 94, 0.7)"')}
                    <span class="cert-verified-text">Verificado · ${cert.year}</span>
                  </div>
                </div>
              </div>
              ${renderDivider()}
              <a href="${cert.fileUrl}" target="_blank" rel="noopener noreferrer" class="btn-link">
                ${icon("file-text", 14, 14)} Ver certificado
              </a>
            </div>`, true)}
        </div>`).join("")}
    </div>`;
}

function renderTabContacto() {
  const directContacts = [
    { label: "Email", value: ME.email, icon: "mail", url: `mailto:${ME.email}` },
    { label: "GitHub", value: ME.github.replace("https://", ""), icon: "github", url: ME.github },
    { label: "LinkedIn", value: ME.linkedin.replace("https://", ""), icon: "linkedin", url: ME.linkedin },
  ];

  return html`
    <div class="contact-grid">
      <div class="contact-form-col">
        ${renderCard(`
          <div class="card-body">
            <h3 class="section-title-sm">Enviar mensaje</h3>
            <form class="space-y-4" id="contact-form">
              <div class="form-grid-2">
                <div class="form-group">
                  <label class="form-label">Nombre</label>
                  <input type="text" placeholder="Tu nombre" />
                </div>
                <div class="form-group">
                  <label class="form-label">Email</label>
                  <input type="email" placeholder="tu@email.com" />
                </div>
              </div>
              <div class="form-group">
                <label class="form-label">Asunto</label>
                <input type="text" placeholder="¿En qué puedo ayudarte?" />
              </div>
              <div class="form-group">
                <label class="form-label">Mensaje</label>
                <textarea placeholder="Cuéntame sobre tu proyecto o propuesta..." rows="5"></textarea>
              </div>
              <button type="submit" class="btn-submit">Enviar mensaje</button>
            </form>
          </div>`, false)}
      </div>
      <div class="contact-info-col space-y-4">
        ${renderCard(`
          <div class="card-body">
            <h3 class="section-title-sm">Contacto directo</h3>
            <div class="contact-links">
              ${directContacts.map(c => html`
                <a href="${c.url}" target="_blank" rel="noopener noreferrer" class="contact-link">
                  ${icon(c.icon, 16, 16).replace('class="icon"', 'class="icon contact-link-icon"')}
                  <div class="flex-1 min-w-0">
                    <p class="contact-link-label">${c.label}</p>
                    <p class="contact-link-value truncate">${c.value}</p>
                  </div>
                  ${icon("external-link", 12, 12).replace('class="icon"', 'class="icon contact-link-arrow"')}
                </a>`).join("")}
            </div>
          </div>`, false)}

        ${renderCard(`
          <div class="card-body">
            <div class="availability-box">
              <div class="status-dot pulse"></div>
              <span class="availability-text">Disponible para trabajar</span>
            </div>
            <p class="availability-desc">Abierto a proyectos freelance y posiciones Front End. Tiempo de respuesta habitual: 24–48 h.</p>
          </div>`, false)}
      </div>
    </div>`;
}

/* ── Footer ──────────────────────────────────────────────────────────────────── */

function renderFooter() {
  return html`
    <footer class="footer">
      ${renderDivider()}
      <p class="footer-text">${ME.name} · ${ME.role} · ${new Date().getFullYear()}</p>
    </footer>`;
}

/* ── Tab System ─────────────────────────────────────────────────────────────── */

let activeTab = "sobre-mi";
let tabContentEl = null;

const TAB_RENDERERS = {
  "sobre-mi": renderTabSobreMi,
  "habilidades": renderTabHabilidades,
  "proyectos": renderTabProyectos,
  "certificados": renderTabCertificados,
  "contacto": renderTabContacto,
};

function getTabIconHTML(iconName) {
  const size = 12;
  return SVG[iconName]
    ? SVG[iconName].replace('width="100%"', `width="${size}"`).replace('height="100%"', `height="${size}"`)
    : "";
}

function initTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabId = btn.dataset.tab;
      if (tabId && tabId !== activeTab) switchTab(tabId);
    });
  });
}

function switchTab(tabId) {
  activeTab = tabId;

  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabId);
  });

  const renderer = TAB_RENDERERS[tabId];
  if (renderer && tabContentEl) {
    tabContentEl.classList.remove("visible");
    tabContentEl.innerHTML = renderer();
    void tabContentEl.offsetHeight;
    requestAnimationFrame(() => {
      tabContentEl.classList.add("visible");
      runTabAnimations(tabId);
    });
  }
}

function runTabAnimations(tabId) {
  if (tabId === "habilidades") {
    animateSkills();
  } else if (tabId === "proyectos") {
    animateProjects();
  } else if (tabId === "certificados") {
    animateCerts();
  }
}

function animateSkills() {
  const items = document.querySelectorAll("#skills-grid .skill-item");
  items.forEach((item, i) => {
    const delay = i * 40;
    setTimeout(() => item.classList.add("visible"), delay);
  });

  const bars = document.querySelectorAll("#skills-grid .skill-bar-fill");
  bars.forEach((bar) => {
    const level = bar.dataset.level;
    const delay = parseFloat(bar.dataset.delay || 0.2) * 1000;
    setTimeout(() => { bar.style.width = level + "%"; }, delay);
  });
}

function animateProjects() {
  document.querySelectorAll(".project-card").forEach((card, i) => {
    setTimeout(() => card.classList.add("visible"), i * 90);
  });
}

function animateCerts() {
  document.querySelectorAll(".cert-card").forEach((card, i) => {
    setTimeout(() => card.classList.add("visible"), i * 90);
  });
}

/* ── Init ───────────────────────────────────────────────────────────────────── */

function init() {
  const root = document.getElementById("root");
  if (!root) return;

  root.innerHTML = html`
    <div class="app-container">
      <div class="ambient-bg"></div>
      <div class="top-accent"></div>
      <div class="main-content">
        ${renderHero()}
        <nav class="tabs-nav">
          <div class="tabs-nav-inner scrollbar-hide">
            ${TABS.map(t => html`
              <button class="tab-btn${t.id === activeTab ? " active" : ""}" data-tab="${t.id}">
                ${getTabIconHTML(t.icon)} ${t.label}
              </button>`).join("")}
          </div>
        </nav>
        <div class="tab-content visible" id="tab-content">
          ${renderTabSobreMi()}
        </div>
        ${renderFooter()}
      </div>
    </div>`;

  tabContentEl = document.getElementById("tab-content");
  initTabs();

  // Hero animation
  requestAnimationFrame(() => {
    document.getElementById("hero")?.classList.add("visible");
  });
}

document.addEventListener("DOMContentLoaded", init);
