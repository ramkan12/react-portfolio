import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { CONTACT } from "../constants";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-20 scroll-mt-24">
      <SectionLabel index="05" id="contact.json" title="Let's Connect" />

      <div className="grid items-stretch gap-8 lg:grid-cols-2">
        <Reveal direction="left">
          <div className="h-full rounded-lg border border-term-border bg-term-panel p-6 font-mono text-sm sm:p-8">
            <p className="text-term-muted">
              <span className="text-term-green">$</span> cat contact.json
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-3 text-term-text transition-colors hover:text-term-cyan"
              >
                <FaEnvelope className="shrink-0 text-lg text-term-green" />
                {CONTACT.email}
              </a>
              <a
                href={CONTACT.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-term-text transition-colors hover:text-term-cyan"
              >
                <FaGithub className="shrink-0 text-lg text-term-green" />
                {CONTACT.githubLabel}
              </a>
              <a
                href={CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-term-text transition-colors hover:text-term-cyan"
              >
                <FaLinkedin className="shrink-0 text-lg text-term-green" />
                {CONTACT.linkedinLabel}
              </a>
              <p className="flex items-center gap-3 text-term-muted">
                <FaMapMarkerAlt className="shrink-0 text-lg text-term-green" />
                {CONTACT.location}
              </p>
            </div>

            <a
              href={CONTACT.resume}
              className="mt-6 inline-block rounded border border-term-green px-4 py-2 text-term-green transition-colors hover:bg-term-green hover:text-term-bg"
            >
              Download Résumé
            </a>
          </div>
        </Reveal>

        <Reveal direction="right">
          <ContactForm />
        </Reveal>
      </div>

      <p className="mt-16 font-mono text-xs text-term-muted">
        {`// © ${new Date().getFullYear()} Riham Khan · built with React, Tailwind, and too much Olipop`}
      </p>
    </section>
  );
};

export default Contact;
