import { EXPERIENCES } from "../constants";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const Experience = () => {
  return (
    <section id="experience" className="border-b border-term-border py-20 scroll-mt-24">
      <SectionLabel index="03" id="experience.log" title="Experience" />

      <div className="flex flex-col gap-10">
        {EXPERIENCES.map((experience) => (
          <div key={experience.role} className="flex flex-wrap gap-x-8 gap-y-3">
            <Reveal direction="left" className="w-full sm:w-40 sm:flex-shrink-0">
              <p className="font-mono text-sm text-term-green">{experience.year}</p>
            </Reveal>

            <Reveal direction="right" className="max-w-2xl flex-1">
              <h3 className="font-semibold text-term-text">
                {experience.role}{" "}
                <span className="font-mono text-sm text-term-cyan">— {experience.company}</span>
              </h3>
              <p className="mt-2 leading-relaxed text-term-muted">{experience.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-term-border bg-term-panel px-2 py-1 font-mono text-xs text-term-amber"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
