import React from "react";
import { motion } from "framer-motion";
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
    <rect width='100%' height='100%' fill='#0f172a'/>
    <circle cx='128' cy='96' r='44' fill='#334155'/>
    <rect x='64' y='156' width='128' height='64' rx='32' fill='#334155'/>
    <text x='128' y='112' text-anchor='middle' font-family='Inter, system-ui, -apple-system, Segoe UI, Roboto' font-size='36' fill='#e2e8f0'>CW</text>
  </svg>
`)}`;

// =========================
// Primitives
// =========================
const Container = ({ id, children }) => (
  <section id={id} className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    {children}
  </section>
);

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/70 bg-indigo-700/40 text-indigo-100 px-3 py-1 text-sm shadow hover:bg-indigo-600/60 transition-colors duration-200">
    {children}
  </span>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full bg-slate-800/80 px-2.5 py-1 text-xs border border-slate-700/60 text-slate-200">
    {children}
  </span>
);

const SectionTitle = ({ eyebrow, children }) => (
  <div className="mb-10">
    {eyebrow && (
      <div className="mb-2 text-xs uppercase tracking-[0.18em] text-slate-400">{eyebrow}</div>
    )}
    <h2 className="text-xl sm:text-2xl font-semibold text-slate-100">{children}</h2>
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

const ToolsShowcase = () => (
  <div className="mt-10">
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 px-6 py-6 sm:px-8 sm:py-8 shadow-xl">

      {/* Section label */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-5 py-1.5 text-sm sm:text-base font-semibold uppercase tracking-[0.20em] text-indigo-300">
          Core Tools
        </div>
      </div>

      {/* Tool logos */}
      <div className="flex flex-wrap justify-center items-center gap-6">
        {TOOLS.map((t) => (
          <Logo key={t.name} src={t.src} alt={t.alt || t.name} />
        ))}
      </div>

      {/* Tool names */}
      <p className="mt-5 text-center text-slate-200 text-base sm:text-lg">
        {TOOLS.map((t, i) => (
          <span key={t.name}>
            {t.name}
            {i < TOOLS.length - 1 && <span className="opacity-60"> | </span>}
          </span>
        ))}
      </p>

      {/* Divider */}
      <div className="mt-6 mb-4 h-px w-full bg-slate-800/80" />

      {/* Capability list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-200 text-sm sm:text-base">
        {CAPABILITIES.map((c) => (
          <div key={c} className="inline-flex items-start gap-3">
            <Star className="h-5 w-5 mt-0.5 text-indigo-400" /> {c}
          </div>
        ))}
      </div>
    </div>
  </div>
);

// =========================
// Sections: Hero + About
// =========================
const Hero = () => (
  <Container>
    <div className="flex flex-col md:flex-row items-center gap-10">
      <motion.img
        src={PROFILE_SRC}
        alt="Profile of Chien-Hao Wang"
        className="w-36 h-36 rounded-full object-cover border-4 border-indigo-500 shadow-lg mx-auto md:mx-0"
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
          className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-100"
        >
          Chien-Hao Wang
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-lg text-slate-300"
        >
          Data Analyst
        </motion.p>

        {/* Skills row + Industries row */}
        <div className="flex flex-col gap-3 items-center md:items-start">
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
            <Badge>
              <Brain className="h-4 w-4" /> Evidence-led insights
            </Badge>
            <Badge>
              <Layout className="h-4 w-4" /> Dashboards & storytelling
            </Badge>
            <Badge>
              <Database className="h-4 w-4" /> Data modelling & SQL
            </Badge>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
            <Badge>
              <Leaf className="h-4 w-4 text-green-300" /> Environmental
            </Badge>
            <Badge>
              <PoundSterling className="h-4 w-4 text-yellow-300" /> Finance
            </Badge>
            <Badge>
              <Landmark className="h-4 w-4 text-blue-300" /> Public Organisation
            </Badge>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

const About = () => (
  <Container id="about">
    <SectionTitle eyebrow="About">Who I am</SectionTitle>
    <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
      MSc Business Analytics graduate with hands-on experience transforming data into actionable insights using Python, SQL, Power BI, and Excel. Skilled in machine learning, statistical techniques, and analytical methods including root cause, segmentation, and trend analysis to solve problems across the public and ESG sectors. Built dashboards and data solutions that support strategic decisions and enhance business processes through storytelling and cross-functional collaboration.
    </p>
    <ToolsShowcase />
  </Container>
);

export { Hero, About, Container, Pill, SectionTitle };
// =========================
// Projects Section with Multi-select Filter
// =========================
const Projects = () => {
  const projects = [
    {
      id: "spotify",
      title: "Spotify User Segmentation & Churn Analysis",
      tech: ["Power BI", "Python"],
      description:
        "Behaviour-led insights for conversion and retention. K-Means clustering on free-tier users and an explainable churn model; executive dashboard for actions.",
      imgSrc: "/proj-spotify.png",
      imgAlt: "Spotify analytics dashboard screenshot",
      demoHref:
        "https://github.com/chienhao-wang/spotify_user_analysis/blob/main/Dashboard.pbix",
      codeHref:
        "https://github.com/chienhao-wang/spotify_user_analysis/blob/main/Spotify_User_Segmentation_and_Churn_Analysis.ipynb",
    },
    {
      id: "grocery",
      title: "Grocery Sales Analysis",
      tech: ["SQL", "Tableau"],
      description:
        "End-to-end sales analytics with a star-schema view, ranking & window functions, and a Tableau dashboard for category revenue and weekday trends.",
      imgSrc: "/proj-grocery.png",
      imgAlt: "Grocery sales Tableau dashboard screenshot",
      demoHref:
        "https://public.tableau.com/app/profile/chien.hao.wang/viz/GrocerySalesDashboard_17609754421160/Dashboard1",
      codeHref:
        "https://github.com/chienhao-wang/grocery_sales_analysis/blob/main/Grocery%20Sales%20Analysis.sql",
    },
    {
      id: "marketing",
      title: "Digital Marketing Analysis",
      tech: ["Tableau"],
      description:
        "Designed a Tableau dashboard to evaluate marketing campaign performance through conversion funnel analysis and ROI assessment, providing clear insight into campaign effectiveness.",
      imgSrc: "/proj-marketing.png",
      imgAlt: "Digital Marketing Tableau dashboard screenshot",
      demoHref:
        "https://public.tableau.com/app/profile/chien.hao.wang/viz/DigitalMarketingDashboard_17631234108040/Dashboard1",
    },
    {
      id: "fashion",
      title: "Fashion Inventory Report",
      tech: ["Excel"],
      description:
        "Leveraged Excel to investigate fashion brands’ inventory, return patterns, and customer ratings, and designed a comprehensive inventory dashboard for operational insight.",
      imgSrc: "/proj-fashion.png",
      imgAlt: "Fashion Report dashboard screenshot",
      demoHref:
        "https://github.com/chienhao-wang/fashion-inventory/blob/main/Fashion%20Inventory%20Report.xlsx",
    },
    {
      id: "footfall",
      title: "York Footfall Analysis",
      tech: ["R"],
      description:
        "A data-driven assessment of York’s footfall patterns to identify the most strategic location for maximising market vendor visibility and customer reach.",
      imgSrc: "/proj-footfall.png",
      imgAlt: "Footfall Analysis screenshot",
      codeHref:
        "https://github.com/chienhao-wang/york-footfall-analysis/blob/main/York%20Footfall%20Analysis.Rmd",
    },
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
  }) => (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-stretch gap-8 py-6 border-b border-slate-800/70`}
    >
      {/* Image */}
      <div className="md:w-1/2">
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
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
          <h3 className="text-slate-100 text-xl font-semibold tracking-wide uppercase">
            {title}
          </h3>
          <p className="mt-2 text-slate-300 text-base leading-relaxed">
            {description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tech.map((t) => (
              <Pill key={t}>{t}</Pill>
            ))}
          </div>
        </div>
        <div className="mt-5 flex gap-3">
          {/* Always show dashboard button if demoHref exists */}
          {demoHref && (
            <a
              href={demoHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 text-slate-900 px-3 py-2 text-sm font-medium hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              <ExternalLink className="h-4 w-4" /> View dashboard
            </a>
          )}

          {/* Only show code button when codeHref exists */}
          {codeHref && (
            <a
              href={codeHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 text-slate-900 px-3 py-2 text-sm font-medium hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            >
              <Github className="h-4 w-4" /> View code
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <Container id="projects">
      <SectionTitle eyebrow="Projects">Featured Projects</SectionTitle>

      {/* Filter bar */}
      <div className="mb-8 flex flex-wrap items-center gap-2">
        {["All", ...allTags].map((tag) => {
          const activeStyle = isActive(tag)
            ? "bg-indigo-500 text-slate-900 border-indigo-400"
            : "bg-slate-900 text-slate-200 border-slate-700 hover:bg-slate-800";
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
        <div className="text-slate-400 text-sm">
          No projects found for “{selected.join(", ") || "All"}”.
        </div>
      )}
    </Container>
  );
};

// =========================
// Contact Section
// =========================
const Contact = () => (
  <Container id="contact">
    <SectionTitle eyebrow="Contact">Get in touch</SectionTitle>
    <div className="flex flex-wrap gap-3">
      <a
        href="mailto:chienhao.jeff.wang@gmail.com"
        className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm hover:bg-slate-800"
      >
        <Mail className="h-4 w-4" /> Email
      </a>
      <a
        href="https://www.linkedin.com/in/chienhaowang/"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm hover:bg-slate-800"
      >
        <Linkedin className="h-4 w-4" /> LinkedIn
      </a>
      <a
        href="https://github.com/chienhao-wang"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm hover:bg-slate-800"
      >
        <Github className="h-4 w-4" /> GitHub
      </a>
      <a
        href="https://public.tableau.com/app/profile/chien.hao.wang/vizzes"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm hover:bg-slate-800"
      >
        <BarChart3 className="h-4 w-4" /> Tableau Public
      </a>
    </div>
  </Container>
);

// =========================
// Main App + Footer
// =========================
export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-slate-700/60">
      {/* Nav */}
      <div className="sticky top-0 z-50 w-full border-b border-slate-900/80 bg-slate-950/70 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
          <a href="#" className="font-semibold tracking-tight">
            Chien-Hao Wang
          </a>
          <div className="flex items-center gap-5 text-sm text-slate-300">
            <a className="hover:text-slate-100" href="#about">
              About
            </a>
            <a className="hover:text-slate-100" href="#projects">
              Projects
            </a>
            <a className="hover:text-slate-100" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </div>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-slate-900/80">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-slate-400">
            <p>© {new Date().getFullYear()} Chien-Hao Wang. All rights reserved.</p>
            <p className="opacity-80">Built with Vite + React + Tailwind.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
