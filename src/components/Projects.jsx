import { PROJECTS } from "../constants";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const TerminalWindow = ({ file, children, className = "" }) => (
  <div className={`overflow-hidden rounded-lg border border-term-border bg-term-panel ${className}`}>
    <div className="flex items-center gap-2 border-b border-term-border px-4 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
      <span className="ml-3 truncate font-mono text-xs text-term-muted">{file}</span>
    </div>
    <div className="p-6 sm:p-8">{children}</div>
  </div>
);

const Tags = ({ technologies }) => (
  <div className="mt-5 flex flex-wrap gap-2">
    {technologies.map((tech) => (
      <span
        key={tech}
        className="rounded border border-term-border bg-term-bg px-2 py-1 font-mono text-xs text-term-cyan"
      >
        {tech}
      </span>
    ))}
  </div>
);

const ProjectLinks = ({ link, github }) => {
  if (!link && !github) return null;
  return (
    <div className="mt-6 flex items-center gap-4 font-mono text-sm">
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-term-green transition-colors hover:text-term-cyan"
        >
          $ open --live
        </a>
      )}
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-term-muted transition-colors hover:text-term-cyan"
        >
          $ open --github
        </a>
      )}
    </div>
  );
};

const FlagshipCard = ({ project }) => (
  <Reveal direction="up">
    <TerminalWindow file={project.file} className="shadow-2xl shadow-black/40 ring-1 ring-term-green/30">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded border border-term-green px-2 py-0.5 font-mono text-xs font-semibold tracking-wide text-term-green">
          FLAGSHIP
        </span>
        <h3 className="text-2xl font-bold text-term-text sm:text-3xl">{project.title}</h3>
      </div>
      <p className="mt-1 font-mono text-sm text-term-amber">{project.subtitle}</p>
      <p className="mt-5 leading-relaxed text-term-muted">{project.description}</p>

      <div className="mt-6 rounded border border-term-border bg-term-bg p-4">
        <p className="font-mono text-xs text-term-muted">
          <span className="text-term-green">$</span> stats --project accmatica
        </p>
        <div className="mt-3 flex flex-wrap gap-x-8 gap-y-3">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <p className="font-mono text-xl font-bold text-term-green">{metric.value}</p>
              <p className="font-mono text-xs text-term-muted">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>

      <Tags technologies={project.technologies} />
      <ProjectLinks link={project.link} github={project.github} />
    </TerminalWindow>
  </Reveal>
);

const StandardCard = ({ project, compact = false }) => (
  <Reveal direction="up">
    <TerminalWindow file={project.file}>
      <h3 className={`font-bold text-term-text ${compact ? "text-lg" : "text-xl"}`}>{project.title}</h3>
      <p className="mt-1 font-mono text-xs text-term-amber">{project.subtitle}</p>
      <p className={`mt-4 leading-relaxed text-term-muted ${compact ? "text-sm" : ""}`}>{project.description}</p>
      <Tags technologies={project.technologies} />
      <ProjectLinks link={project.link} github={project.github} />
    </TerminalWindow>
  </Reveal>
);

const Projects = () => {
  const flagship = PROJECTS.find((p) => p.flagship);
  const featured = PROJECTS.filter((p) => !p.flagship && (p.title === "Newsletter Automation Pipeline" || p.title === "LLM Routing & Evaluation Study"));
  const secondary = PROJECTS.filter((p) => !p.flagship && !featured.includes(p));

  return (
    <section id="projects" className="border-b border-term-border py-20 scroll-mt-24">
      <SectionLabel index="01" id="projects.list" title="Featured Projects" />

      <div className="flex flex-col gap-8">
        {flagship && <FlagshipCard project={flagship} />}

        <div className="grid gap-8 md:grid-cols-2">
          {featured.map((project) => (
            <StandardCard key={project.title} project={project} />
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {secondary.map((project) => (
            <StandardCard key={project.title} project={project} compact />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
