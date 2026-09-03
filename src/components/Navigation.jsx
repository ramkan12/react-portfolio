import { FaLinkedin, FaGithub } from "react-icons/fa";

const LINKS = [
  { num: "01", id: "projects", label: "projects" },
  { num: "02", id: "skills", label: "skills" },
  { num: "03", id: "experience", label: "experience" },
  { num: "04", id: "about", label: "about" },
  { num: "05", id: "contact", label: "contact" },
];

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-20 -mx-8 mb-16 border-b border-term-border bg-term-bg/90 px-8 py-4 backdrop-blur">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <a
          href="#hero"
          className="font-mono text-sm text-term-text transition-colors hover:text-term-green"
        >
          <span className="text-term-green">riham</span>
          <span className="text-term-muted">@</span>
          <span className="text-term-cyan">portfolio</span>
          <span className="text-term-muted">:~$</span>
        </a>

        <ul className="hidden items-center gap-6 font-mono text-sm md:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-term-muted transition-colors hover:text-term-green"
              >
                <span className="text-term-amber">{link.num}.</span> {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5 text-xl">
          <a
            href="https://www.linkedin.com/in/riham-k-037969249/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-term-muted transition-colors hover:text-term-cyan"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/ramkan12"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-term-muted transition-colors hover:text-term-cyan"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
