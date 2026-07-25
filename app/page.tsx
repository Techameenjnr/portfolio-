const scanLines = [
  { port: "3000/tcp", state: "open", service: "react-typescript" },
  { port: "1337/tcp", state: "open", service: "golang" },
  { port: "5432/tcp", state: "open", service: "postgresql-prisma" },
  { port: "8080/tcp", state: "open", service: "html-css-responsive" },
  { port: "0443/tcp", state: "open", service: "web-security-fundamentals" },
  { port: "9200/tcp", state: "learning", service: "network-security" },
];

const cases = [
  {
    id: "CASE-001",
    status: "IN PROGRESS",
    title: "CyberCodex.io",
    summary:
      "Forked and hardened a cybersecurity learning platform for production. Migrated the database layer from SQLite to Postgres on Neon, wired up Prisma migrations, and configured Auth.js v5 for deployment on Vercel.",
    stack: ["Next.js", "React", "TypeScript", "Prisma", "Auth.js", "PostgreSQL"],
    link: "#",
  },
  {
    id: "CASE-002",
    status: "RESOLVED",
    title: "ascii-art-web",
    summary:
      "An HTTP server that renders text as ASCII art banners. Rendering logic was split from the entry point into its own module to keep the server code focused and the banner logic testable on its own.",
    stack: ["Go", "net/http"],
    link: "#",
  },
  {
    id: "CASE-003",
    status: "RESOLVED",
    title: "Go Reloaded",
    summary:
      "A set of Go exercises: hexadecimal-to-decimal conversion, ASCII arithmetic for character-to-index mapping, and command-line text processing — each written for readability first, mechanics second.",
    stack: ["Go"],
    link: "#",
  },
];

const statusColor: Record<string, string> = {
  "IN PROGRESS": "text-amber border-amber/40 bg-amber/10",
  RESOLVED: "text-green border-green/40 bg-green/10",
  OPEN: "text-red border-red/40 bg-red/10",
};

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <section aria-label="Introduction" className="mb-20">
        <p className="scan-line font-mono text-xs uppercase tracking-widest text-muted mb-4">
          [ session start — target: techameenjnr ]
        </p>
        <h1
          className="scan-line font-display text-4xl md:text-5xl font-bold text-ink leading-tight mb-4"
          style={{ animationDelay: "60ms" }}
        >
          Techameenjnr
        </h1>
        <p
          className="scan-line font-body text-lg text-muted mb-10 max-w-xl"
          style={{ animationDelay: "120ms" }}
        >
          Building things, then figuring out how to break them. A developer
          working through Go, full-stack web apps, and the fundamentals of
          cybersecurity — one project at a time.
        </p>

        <div
          className="scan-line rounded-md border border-line bg-panel overflow-hidden"
          style={{ animationDelay: "180ms" }}
        >
          <div className="flex items-center gap-2 border-b border-line px-4 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green/70" />
            <span className="ml-2 font-mono text-xs text-muted">
              skills-scan.sh
            </span>
          </div>
          <div className="p-4 font-mono text-sm overflow-x-auto">
            <div className="grid grid-cols-[90px_90px_1fr] gap-x-4 text-muted mb-2">
              <span>PORT</span>
              <span>STATE</span>
              <span>SERVICE</span>
            </div>
            {scanLines.map((line, i) => (
              <div
                key={line.port}
                className="scan-line grid grid-cols-[90px_90px_1fr] gap-x-4 py-0.5"
                style={{ animationDelay: `${240 + i * 70}ms` }}
              >
                <span className="text-muted">{line.port}</span>
                <span
                  className={
                    line.state === "open" ? "text-green" : "text-amber"
                  }
                >
                  {line.state}
                </span>
                <span className="text-ink">{line.service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="About" className="mb-20">
        <p className="font-mono text-xs uppercase tracking-widest text-blue mb-3">
          [ module: about ]
        </p>
        <div className="rounded-md border border-line bg-panel p-6">
          <p className="text-ink leading-relaxed">
            I learn by shipping things, not by reading about them first. That's
            meant working through Go exercises line by line until the
            reasoning behind the code makes sense — not just the syntax — and
            it's meant taking on production concerns most tutorials skip:
            swapping SQLite for Postgres, wiring up real auth, and getting a
            project actually live rather than stopping at "it works on my
            machine."
          </p>
          <p className="text-muted leading-relaxed mt-4">
            Right now that means deploying a forked cybersecurity learning
            platform end to end, and treating every deployment problem as
            something worth understanding rather than a wall to get past.
          </p>
        </div>
      </section>

      <section aria-label="Projects" className="mb-20">
        <p className="font-mono text-xs uppercase tracking-widest text-blue mb-3">
          [ module: case files ]
        </p>
        <div className="space-y-4">
          {cases.map((item) => (
            <article
              key={item.id}
              className="rounded-md border border-line bg-panel p-6"
            >
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="font-mono text-xs text-muted">
                  {item.id}
                </span>
                <span
                  className={`font-mono text-xs px-2 py-0.5 rounded border ${statusColor[item.status]}`}
                >
                  {item.status}
                </span>
              </div>
              <h2 className="font-display text-xl font-bold text-ink mb-2">
                {item.title}
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                {item.summary}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-muted border border-line rounded px-2 py-0.5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={item.link}
                className="font-mono text-xs text-blue hover:underline"
              >
                view repo →
              </a>
            </article>
          ))}
        </div>
        <p className="font-mono text-xs text-muted mt-3">
          note: repo links are placeholders — swap in your GitHub URLs.
        </p>
      </section>

      <section aria-label="Contact" className="mb-8">
        <p className="font-mono text-xs uppercase tracking-widest text-blue mb-3">
          [ module: contact ]
        </p>
        <div className="rounded-md border border-line bg-panel p-6 flex flex-wrap gap-x-8 gap-y-2">
          <a
            href="https://github.com/Techameenjnr"
            className="font-mono text-sm text-ink hover:text-blue"
          >
            github.com/Techameenjnr
          </a>
          <a
            href="mailto:your-email@example.com"
            className="font-mono text-sm text-ink hover:text-blue"
          >
            your-email@example.com
          </a>
        </div>
      </section>

      <footer className="font-mono text-xs text-muted">
        [ session end ]
      </footer>
    </main>
  );
}