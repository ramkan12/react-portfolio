import { SKILLS } from "../constants";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

const Skills = () => {
  return (
    <section id="skills" className="border-b border-term-border py-20 scroll-mt-24">
      <SectionLabel index="02" id="skills.json" title="Technical Skills" />

      <div className="grid gap-6 sm:grid-cols-2">
        {SKILLS.map((group, index) => (
          <Reveal key={group.label} direction="up" delay={index * 0.1}>
            <div className="h-full rounded-lg border border-term-border bg-term-panel p-6">
              <p className="font-mono text-xs text-term-muted">
                <span className="text-term-green">$</span> cat {group.label}.json
              </p>
              <h3 className="mt-2 font-semibold text-term-amber">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-term-border bg-term-bg px-2 py-1 font-mono text-xs text-term-cyan"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Skills;
