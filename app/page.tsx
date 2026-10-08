import Illustration from "./components/Illustration";
import InkBlob from "./components/InkBlob";
import Reveal from "./components/Reveal";
import { education, experience, profile, projects, skills } from "@/lib/content";

const nav = [
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

function SectionHeading({ id, title, note }: { id: string; title: string; note?: string }) {
  return (
    <div id={id} className="mb-10 flex scroll-mt-24 items-baseline gap-4">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {note && <span className="note note-orange -rotate-2">{note}</span>}
    </div>
  );
}

function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-rule bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-semibold tracking-tight">
            {profile.name}
          </a>
          <nav className="flex items-center gap-5 text-sm">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="hidden hover:underline sm:inline">
                {item.label}
              </a>
            ))}
            <a href={profile.til} className="underline-hand">
              Today I Learn
            </a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto w-full max-w-5xl flex-1 px-6">
        <section className="grid items-center gap-10 py-16 sm:py-24 md:grid-cols-[1.25fr_1fr]">
          <div>
            <p className="note note-red -rotate-2">hi, I&apos;m</p>
            <h1 className="mt-1 text-5xl font-semibold tracking-tight sm:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-4 font-mono text-sm text-muted">
              {profile.role} · {profile.location}
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed">{profile.tagline}</p>
            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm">
              <a href="#projects" className="sketch px-5 py-2.5 font-medium hover:bg-foreground hover:text-background">
                See projects
              </a>
              <a href={`mailto:${profile.email}`} className="underline-hand">
                Email me
              </a>
            </div>
          </div>
          <InkBlob />
        </section>

        <section className="py-16">
          <SectionHeading id="projects" title="Projects" note="things I built" />
          <div className="space-y-20">
            {projects.map((project, i) => (
              <Reveal key={project.slug}>
                <article className="grid items-center gap-10 md:grid-cols-2">
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    <Illustration project={project} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                    <p className="mt-2 leading-relaxed">{project.summary}</p>
                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                      {project.highlights.map((line) => (
                        <li key={line} className="flex gap-2">
                          <span aria-hidden="true">–</span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <Chips items={project.stack} />
                    </div>
                    <div className="mt-4 flex gap-5 text-sm">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline-hand"
                        >
                          {link.label} ↗
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="py-16">
          <SectionHeading id="experience" title="Experience" />
          <ol className="space-y-12">
            {experience.map((role) => (
              <li key={`${role.company}-${role.dates}`}>
                <Reveal className="grid gap-3 md:grid-cols-[200px_1fr] md:gap-10">
                  <div className="font-mono text-xs leading-relaxed text-muted">
                    <p>{role.dates}</p>
                    <p>{role.location}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold tracking-tight">
                      {role.title} · {role.company}
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                      {role.highlights.map((line) => (
                        <li key={line} className="flex gap-2">
                          <span aria-hidden="true">–</span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3">
                      <Chips items={role.stack} />
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>

        <section className="py-16">
          <SectionHeading id="skills" title="Skills" />
          <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {skills.map((row) => (
              <div key={row.group}>
                <dt className="text-sm font-semibold">{row.group}</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted">{row.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-12">
            <h3 className="text-sm font-semibold">Education</h3>
            <ul className="mt-2 space-y-1 text-sm text-muted">
              {education.map((item) => (
                <li key={item.degree}>
                  {item.school} — {item.degree} · {item.date}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16">
          <SectionHeading id="contact" title="Contact" note="say hi" />
          <p className="max-w-xl leading-relaxed">
            I&apos;m looking for software engineering roles in backend and applied AI, and open to
            relocating. The fastest way to reach me is email.
          </p>
          <div className="mt-6 flex flex-wrap gap-6 text-sm">
            <a href={`mailto:${profile.email}`} className="underline-hand">
              {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="underline-hand">
              LinkedIn ↗
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="underline-hand">
              GitHub ↗
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-rule px-6 py-8 text-center text-xs text-muted">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="mt-1">
          Illustration style after{" "}
          <a
            href="https://github.com/helloianneo/ian-xiaohei-illustrations"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Ian Xiaohei Illustrations
          </a>{" "}
          by Ian.
        </p>
      </footer>
    </>
  );
}
