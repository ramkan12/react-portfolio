import { ABOUT_TEXT, ABOUT_FOOTNOTE } from "../constants";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";
import aboutPic from "../assets/about-web.jpg";

const About = () => {
  return (
    <section id="about" className="border-b border-term-border py-20 scroll-mt-24">
      <SectionLabel index="04" id="about.md" title="About" />

      <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
        <Reveal direction="left" className="flex-1">
          <div className="h-full rounded-lg border border-term-border bg-term-panel p-6 sm:p-8">
            <p className="font-mono text-xs text-term-muted">
              <span className="text-term-green">$</span> cat about.md
            </p>
            <p className="mt-4 leading-loose text-term-text">{ABOUT_TEXT}</p>
            <p className="mt-4 font-mono text-xs leading-relaxed text-term-muted">{`// ${ABOUT_FOOTNOTE}`}</p>
          </div>
        </Reveal>

        <Reveal direction="right" className="mx-auto w-full max-w-sm flex-shrink-0 lg:mx-0 lg:w-80">
          <div className="overflow-hidden rounded-lg border border-term-border bg-term-bg">
            <div className="flex items-center gap-2 border-b border-term-border px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-2 font-mono text-xs text-term-muted">about.jpg</span>
            </div>
            <div className="aspect-[4/5] w-full overflow-hidden">
              <img src={aboutPic} alt="Riham's desk setup" className="h-full w-full object-cover" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
