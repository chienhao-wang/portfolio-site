import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Mail,
  Linkedin,
  Github,
  BarChart3,
  Database,
  Code2,
  Table as TableIcon,
  FileSpreadsheet,
  Brain,
  ExternalLink,
  Layout,
  Leaf,
  PoundSterling,
  Landmark,
  Star,
} from "lucide-react";


// =========================
// Assets & Helpers
// =========================
const PROFILE_SRC = "/headshot.jpg"; // put in /public
const FALLBACK_AVATAR = `data:image/svg+xml;utf8,${encodeURIComponent(`
  <svg xmlns='http://www.w3.org/2000/svg' width='256' height='256'>
    <rect width='100%' height='100%' fill='#EFE9E3'/>
    <circle cx='128' cy='96' r='44' fill='#D9CFC7'/>
    <rect x='64' y='156' width='128' height='64' rx='32' fill='#D9CFC7'/>
    <text x='128' y='112' text-anchor='middle' font-family='Inter, system-ui, -apple-system, Segoe UI, Roboto' font-size='36' fill='#6B5B4A'>CW</text>
  </svg>
`)}`;

// =========================
// Primitives
// =========================
const Container = ({ id, children }) => (
  <section
    id={id}
    className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
  >
    {children}
  </section>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-[#C9B59C] bg-[#C9B59C] px-3 py-1 text-sm font-medium text-white shadow-sm hover:bg-[#B49E87] transition-colors duration-200">
    {children}
  </span>
);

// New Badges with subtle colour difference
const BadgePrimary = ({ children }) => (
  <span
    className="inline-flex items-center gap-2 rounded-full 
    bg-[#C9B59C] text-white 
    border border-[#C9B59C]
    px-3 py-1 text-sm font-medium shadow-sm"
  >
    {children}
  </span>
);

const BadgeSecondary = ({ children }) => (
  <span
    className="inline-flex items-center gap-2 rounded-full 
    bg-[#D9CFC7] text-[#6B5B4A]
    border border-[#C9B59C] 
    px-3 py-1 text-sm font-medium shadow-sm"
  >
    {children}
  </span>
);


const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-[#F9F8F6] px-2.5 py-1 text-xs border border-[#C9B59C] text-[#6B5B4A]">
    {children}
  </span>
);

const SectionTitle = ({ eyebrow, children }) => (
  <div className="mb-10">
    {eyebrow && (
      <div className="mb-2 text-xs uppercase tracking-[0.18em] text-[#A4937A]">
        {eyebrow}
      </div>
    )}
    <h2 className="text-xl sm:text-2xl font-semibold text-[#6B5B4A]">
      {children}
    </h2>
  </div>
);

// =========================
// Tools Showcase (About)
// =========================
const TOOLS = [
  { name: "Excel", src: "/images.png", alt: "Excel" },
  { name: "Tableau", src: "/tableau.jpg", alt: "Tableau" },
  { name: "Power BI", src: "/powerbi.png", alt: "Power BI" },
  { name: "SQL", src: "/sql.png", alt: "SQL" },
  { name: "Python", src: "/python.png", alt: "Python" },
  { name: "R", src: "/R_logo.svg", alt: "R" },
];

const CAPABILITIES = [
  "Data visualisation",
  "Team collaboration & communication",
  "Business analytics",
  "Stakeholder engagement",
];

const Logo = ({ src, alt }) => (
  <div className="h-20 w-20 flex items-center justify-center">
    <img
      src={src}
      alt={alt}
      className="max-h-20 max-w-20 object-contain"
      onError={(e) => {
        e.currentTarget.style.opacity = "0.5";
        e.currentTarget.alt = `${alt} (image missing)`;
      }}
    />
  </div>
);
const ToolsShowcase = () => {
  const { t } = useTranslation();
  const CAPABILITIES = t("capabilities", { returnObjects: true });

  return (
    <div className="mt-10">
      <div className="rounded-2xl border border-[#C9B59C] bg-[#F9F8F6] px-6 py-6 sm:px-8 sm:py-8 shadow-lg">
        {/* Section label */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#D9CFC7] px-5 py-1.5 text-sm sm:text-base font-semibold uppercase tracking-[0.20em] text-[#6B5B4A]">
            {t("coreTools")}
          </div>
        </div>

        {/* Tool logos */}
        <div className="flex flex-wrap justify-center items-center gap-6">
          {TOOLS.map((t) => (
            <Logo key={t.name} src={t.src} alt={t.alt || t.name} />
          ))}
        </div>

        {/* Tool names */}
        <p className="mt-5 text-center text-[#6B5B4A] text-base sm:text-lg">
          {TOOLS.map((t, i) => (
            <span key={t.name}>
              {t.name}
              {i < TOOLS.length - 1 && (
                <span className="opacity-60"> | </span>
              )}
            </span>
          ))}
        </p>

        {/* Divider */}
        <div className="mt-6 mb-4 h-px w-full bg-[#D9CFC7]" />

        {/* Capability list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#6B5B4A] text-sm sm:text-base">
          {CAPABILITIES.map((c) => (
            <div key={c} className="inline-flex items-start gap-3">
              <Star className="h-5 w-5 mt-0.5 text-[#C9B59C]" /> {c}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// =========================
// Sections: Hero + About
// =========================
const Hero = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className="flex flex-col md:flex-row items-center gap-10">
        <motion.img
          src={PROFILE_SRC}
          alt="Profile of Chien-Hao Wang"
          className="w-36 h-36 rounded-full object-cover border-4 border-[#C9B59C] shadow-md mx-auto md:mx-0"
          onError={(e) => {
            e.currentTarget.src = FALLBACK_AVATAR;
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />

        <div className="flex flex-col items-start gap-6 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-[#6B5B4A]"
          >
              {t("name")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-lg text-[#8B7965]"
          >
            {t("hero.role")}
          </motion.p>

          {/* Skills row */}
          <div className="flex flex-col gap-3 items-center md:items-start">
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
              <BadgePrimary>
                <Brain className="h-4 w-4" /> {t("hero.badges.evidence")}
              </BadgePrimary>
              <BadgePrimary>
                <Layout className="h-4 w-4" /> {t("hero.badges.dashboards")}
              </BadgePrimary>
              <BadgePrimary>
                <Database className="h-4 w-4" /> {t("hero.badges.sql")}
              </BadgePrimary>
            </div>

            {/* Industries row */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
              <BadgeSecondary>
                <Leaf className="h-4 w-4" /> {t("hero.industries.environmental")}
              </BadgeSecondary>
              <BadgeSecondary>
                <PoundSterling className="h-4 w-4" /> {t("hero.industries.finance")}
              </BadgeSecondary>
              <BadgeSecondary>
                <Landmark className="h-4 w-4" /> {t("hero.industries.public")}
              </BadgeSecondary>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};


const About = () => {
  const { t } = useTranslation();

  return (
    <Container id="about">
      <SectionTitle eyebrow={t("about.eyebrow")}>
        {t("about.title")}
      </SectionTitle>
      <p className="text-base sm:text-lg leading-relaxed text-[#8B7965]">
        {t("about.body")}
      </p>
      <ToolsShowcase />
    </Container>
  );
};


// =========================
// Certificates Section
// =========================
const Certificates = () => {
  const { t } = useTranslation();

  return (
    <Container id="certificates">
      <SectionTitle eyebrow={t("certificates.eyebrow")}>
        {t("certificates.title")}
      </SectionTitle>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Power BI */}
        <div className="flex items-center gap-6 rounded-2xl bg-[#F9F8F6] border border-[#D9CFC7] px-6 py-5 shadow-sm">
          <div className="w-28 h-28 flex items-center justify-center rounded-2xl bg-white border border-[#D9CFC7] overflow-hidden">
            <img
              src="/pl300.png"
              alt={t("certificates.powerbiTitle")}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-[#6B5B4A]">
              {t("certificates.powerbiTitle")}
            </h3>
            <dl className="mt-3 space-y-1 text-sm text-[#8B7965]">
              <div className="flex gap-2">
                <dt className="w-28">{t("certificates.powerbiCredentialIdLabel")}</dt>
                <dd className="font-mono">
                  {t("certificates.powerbiCredentialId")}
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-28">{t("certificates.powerbiLinkLabel")}</dt>
                <dd>
                  <a
                    href="https://learn.microsoft.com/api/credentials/share/en-gb/ChienhaoWang-3986/CA675F58F2469025?sharingId=8DA85ABCA378D079"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2 hover:text-[#6B5B4A]"
                  >
                    {t("certificates.viewCredential")}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Google Analytics */}
        <div className="flex items-center gap-6 rounded-2xl bg-[#F9F8F6] border border-[#D9CFC7] px-6 py-5 shadow-sm">
          <div className="w-28 h-28 flex items-center justify-center rounded-2xl bg-white border border-[#D9CFC7] overflow-hidden">
            <img
              src="/ga.png"
              alt={t("certificates.gaTitle")}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-[#6B5B4A]">
              {t("certificates.gaTitle")}
            </h3>
            <dl className="mt-3 space-y-1 text-sm text-[#8B7965]">
              <div className="flex gap-2">
                <dt className="w-28">{t("certificates.gaCredentialIdLabel")}</dt>
                <dd className="font-mono">
                  {t("certificates.gaCredentialId")}
                </dd>
              </div>
              <div className="flex gap-2">
                <dt className="w-28">{t("certificates.gaLinkLabel")}</dt>
                <dd>
                  <a
                    href="https://skillshop.credential.net/5429cc7b-0d3b-4ce7-a02f-67849c9c27de" 
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-2 hover:text-[#6B5B4A]"
                  >
                    {t("certificates.viewCredential")}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </Container>
  );
};

export { Hero, About, Certificates, Container, Pill, SectionTitle };

// =========================
// Projects Section with Multi-select Filter
// =========================
const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      id: "spotify",
      title: t("projectsData.spotify.title"),
      tech: ["Power BI", "Python"],
      description: t("projectsData.spotify.description"),
      imgSrc: "/proj-spotify.png",
      imgAlt: "Spotify analytics dashboard screenshot",
      demoHref:
        "https://github.com/chienhao-wang/spotify_user_analysis/blob/main/Dashboard.pbix",
      codeHref:
        "https://github.com/chienhao-wang/spotify_user_analysis/blob/main/Spotify_User_Segmentation_and_Churn_Analysis.ipynb"
    },
    {
      id: "grocery",
      title: t("projectsData.grocery.title"),
      tech: ["SQL", "Tableau"],
      description: t("projectsData.grocery.description"),
      imgSrc: "/proj-grocery.png",
      imgAlt: "Grocery sales Tableau dashboard screenshot",
      demoHref:
        "https://public.tableau.com/app/profile/chien.hao.wang/viz/GrocerySalesDashboard_17609754421160/Dashboard1",
      codeHref:
        "https://github.com/chienhao-wang/grocery_sales_analysis/blob/main/Grocery%20Sales%20Analysis.sql"
    },
    {
      id: "sales and satisfaction",
      title: t("projectsData.sales and satisfaction.title"),
      tech: ["Python"],
      description: t("projectsData.sales and satisfaction.description"),
      imgSrc: "/proj-ab-testing.png",
      imgAlt: "Sales Impact Comparison screenshot",
      codeHref:
        "https://github.com/chienhao-wang/sales-and-satisfaction-analysis/blob/main/Store%20Strategy%20Experimentation.ipynb"
    },
    {
      id: "marketing",
      title: t("projectsData.marketing.title"),
      tech: ["Tableau"],
      description: t("projectsData.marketing.description"),
      imgSrc: "/proj-marketing.png",
      imgAlt: "Digital Marketing Tableau dashboard screenshot",
      demoHref:
        "https://public.tableau.com/app/profile/chien.hao.wang/viz/DigitalMarketingDashboard_17631234108040/Dashboard1"
    },
    {
      id: "fashion",
      title: t("projectsData.fashion.title"),
      tech: ["Excel"],
      description: t("projectsData.fashion.description"),
      imgSrc: "/proj-fashion.png",
      imgAlt: "Fashion Report dashboard screenshot",
      demoHref:
        "https://github.com/chienhao-wang/fashion-inventory/blob/main/Fashion%20Inventory%20Report.xlsx"
    },
    {
      id: "footfall",
      title: t("projectsData.footfall.title"),
      tech: ["R"],
      description: t("projectsData.footfall.description"),
      imgSrc: "/proj-footfall.png",
      imgAlt: "Footfall Analysis screenshot",
      codeHref:
        "https://github.com/chienhao-wang/york-footfall-analysis/blob/main/York%20Footfall%20Analysis.Rmd"
    },
    {
      id: "ctrPrediction",
      title: t("projectsData.ctrPrediction.title"),
      tech: ["Python", "SQL"],
      description: t("projectsData.ctrPrediction.description"),
      imgSrc: "/proj-ctr prediction.png",
      imgAlt: "CTR Prediction Model screenshot",
      codeHref:
        "https://github.com/chienhao-wang/ad-click-prediction/blob/main/Ad%20Click%20Prediction.ipynb"
    }
  ];

  const derived = Array.from(new Set(projects.flatMap((p) => p.tech.map((t) => t.trim()))));
  const allTags = Array.from(new Set([...derived, "Excel", "R"]));

  const [selected, setSelected] = React.useState([]);

  const isActive = (tag) =>
    (tag === "All" && selected.length === 0) ||
    selected.some((t) => t.toLowerCase() === tag.toLowerCase());

  const toggleTag = (tag) => {
    if (tag === "All") {
      setSelected([]);
      return;
    }
    setSelected((prev) => {
      const exists = prev.some((t) => t.toLowerCase() === tag.toLowerCase());
      return exists
        ? prev.filter((t) => t.toLowerCase() !== tag.toLowerCase())
        : [...prev, tag];
    });
  };

  const filtered = React.useMemo(() => {
    if (selected.length === 0) return projects;
    const keys = selected.map((s) => s.toLowerCase());
    return projects.filter((p) =>
      p.tech.some((t) => keys.includes(t.toLowerCase()))
    );
  }, [selected, projects]);

  const ProjectRow = ({
    title,
    tech,
    description,
    imgSrc,
    imgAlt,
    reverse,
    demoHref,
    codeHref,
  }) => {
    const { t } = useTranslation();

    return (
      <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-stretch gap-8 py-6 border-b border-[#D9CFC7]`}>

      {/* Image */}
      <div className="md:w-1/2">
        <div className="overflow-hidden rounded-2xl border border-[#C9B59C] bg-[#F9F8F6]">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.opacity = "0.5";
              e.currentTarget.alt = imgAlt + " (placeholder)";
            }}
          />
        </div>
      </div>

      {/* Text */}
      <div className="md:w-1/2 flex flex-col justify-between">
        <div>
          <h3 className="text-[#6B5B4A] text-xl font-semibold tracking-wide uppercase">
            {title}
          </h3>
          <p className="mt-2 text-[#8B7965] text-base leading-relaxed">
            {description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tech.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
        </div>
        <div className="mt-5 flex gap-3">
          {demoHref && (
            <a
              href={demoHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#C9B59C] text-white px-3 py-2 text-sm font-medium hover:bg-[#B49E87] focus:outline-none focus:ring-2 focus:ring-[#C9B59C]/60"
            >
              <ExternalLink className="h-4 w-4" /> {t("buttons.viewDashboard")}
            </a>
          )}

          {codeHref && (
            <a
              href={codeHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[#C9B59C] bg-[#F9F8F6] text-[#6B5B4A] px-3 py-2 text-sm font-medium hover:bg-[#EDE1D5] focus:outline-none focus:ring-2 focus:ring-[#C9B59C]/40"
            >
              <Github className="h-4 w-4" /> {t("buttons.viewCode")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

  return (
    <Container id="projects">
      <SectionTitle eyebrow={t("sections.projects.eyebrow")}>{t("sections.projects.title")}</SectionTitle>

      {/* Filter bar */}
      <div className="mb-8 flex flex-wrap items-center gap-2">
        {["All", ...allTags].map((tag) => {
          const activeStyle = isActive(tag)
            ? "bg-[#C9B59C] text-white border-[#C9B59C]"
            : "bg-transparent text-[#6B5B4A] border-[#C9B59C] hover:bg-[#F9F8F6]";
          return (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm ${activeStyle}`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {/* Projects list */}
      {filtered.map((p, idx) => (
        <ProjectRow
          key={p.id}
          {...p}
          reverse={idx % 2 === 1}
        />
      ))}

      {filtered.length === 0 && (
        <div className="text-[#A4937A] text-sm">
          No projects found for “{selected.join(", ") || "All"}”.
        </div>
      )}
    </Container>
  );
};

// =========================
// Contact Section
// =========================
const Contact = () => {
  const { t } = useTranslation();

  return (
    <Container id="contact">
      <SectionTitle eyebrow={t("sections.contact.eyebrow")}>
        {t("sections.contact.title")}
      </SectionTitle>
      <div className="flex flex-wrap gap-3">
        <a
          href="mailto:chienhao.jeff.wang@gmail.com"
          className="inline-flex items-center gap-2 rounded-lg border border-[#C9B59C] bg-[#F9F8F6] px-3 py-2 text-sm text-[#6B5B4A] hover:bg-[#EDE1D5]"
        >
          <Mail className="h-4 w-4" /> {t("buttons.email")}
        </a>
        <a
          href="https://www.linkedin.com/in/chienhaowang/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-[#C9B59C] bg-[#F9F8F6] px-3 py-2 text-sm text-[#6B5B4A] hover:bg-[#EDE1D5]"
        >
          <Linkedin className="h-4 w-4" /> {t("buttons.linkedin")}
        </a>
        <a
          href="https://github.com/chienhao-wang"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-[#C9B59C] bg-[#F9F8F6] px-3 py-2 text-sm text-[#6B5B4A] hover:bg-[#EDE1D5]"
        >
          <Github className="h-4 w-4" /> {t("buttons.github")}
        </a>
        <a
          href="https://public.tableau.com/app/profile/chien.hao.wang/vizzes"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-[#C9B59C] bg-[#F9F8F6] px-3 py-2 text-sm text-[#6B5B4A] hover:bg-[#EDE1D5]"
        >
          <BarChart3 className="h-4 w-4" /> {t("buttons.tableauPublic")}
        </a>
      </div>
    </Container>
  );
};


// =========================
// Main App + Footer
// =========================
export default function App() {
  const year = new Date().getFullYear();
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "en";

  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen bg-[#EFE9E3] text-[#6B5B4A] selection:bg-[#D9CFC7]">
      <div className="sticky top-0 z-50 w-full border-b border-[#D9CFC7] bg-[#F9F8F6]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
        <a href="#" className="font-semibold tracking-tight text-[#6B5B4A]">
        {t("name")}
        </a>
          <div className="flex items-center gap-5 text-sm text-[#8B7965]">
            <a className="hover:text-[#6B5B4A]" href="#about">
              {t("nav.about")}
            </a>
            <a className="hover:text-[#6B5B4A]" href="#certificates">
              {t("nav.certificates")}
            </a>
            <a className="hover:text-[#6B5B4A]" href="#projects">
              {t("nav.projects")}
            </a>
            <a className="hover:text-[#6B5B4A]" href="#contact">
              {t("nav.contact")}
            </a>

            {/* 語言切換 */}
            <div className="flex items-center gap-1 border border-[#C9B59C] rounded-full px-2 py-0.5 text-xs bg-[#F9F8F6]">
              <button
                onClick={() => switchLanguage("en")}
                className={
                  "px-2 py-0.5 rounded-full " +
                  (currentLang.startsWith("en")
                    ? "bg-[#C9B59C] text-white"
                    : "text-[#8B7965] hover:text-[#6B5B4A]")
                }
              >
                {t("lang.en")}
              </button>
              <button
                onClick={() => switchLanguage("zh")}
                className={
                  "px-2 py-0.5 rounded-full " +
                  (currentLang.startsWith("zh")
                    ? "bg-[#C9B59C] text-white"
                    : "text-[#8B7965] hover:text-[#6B5B4A]")
                }
              >
                {t("lang.zh")}
              </button>
            </div>
          </div>
        </nav>
      </div>

      <main>
        <Hero />
        <About />
        <Certificates /> 
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-[#D9CFC7] bg-[#F9F8F6]">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-[#8B7965]">
            <div>
              © {year} {t("name")}. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-3 items-center">
              <span className="inline-flex items-center gap-1">
                <Code2 className="h-4 w-4" />
                Built with React &amp; Tailwind CSS
              </span>
              <span className="inline-flex items-center gap-1">
                <TableIcon className="h-4 w-4" />
                Analytics portfolio
              </span>
              <span className="inline-flex items-center gap-1">
                <FileSpreadsheet className="h-4 w-4" />
                Excel · SQL · Python · Tableau
              </span>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
