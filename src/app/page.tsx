import { profile, about, skills, services, experience, education, certifications } from "@/data/profile";
import Nav from "@/components/Nav";
import Typewriter from "@/components/Typewriter";
import CopyEmail from "@/components/CopyEmail";
import Icon from "@/components/Icon";

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-heading reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <Nav brand={profile.firstName} />

      <main id="top">
        {/* Hero */}
        <section className="hero container">
          <div className="hero-text reveal">
            <span className="pill glass">
              <Icon name="pin" size={16} /> {profile.location}
            </span>
            <h1>
              Hi, I&apos;m <span className="gradient-text">{profile.name}</span>
            </h1>
            <p className="hero-role">
              <Typewriter words={profile.roles} />
            </p>
            <p className="hero-tagline">{profile.tagline}</p>
            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Let&apos;s work together <Icon name="arrow" size={18} />
              </a>
              <a href="#experience" className="btn btn-ghost">
                View experience
              </a>
              {profile.resumeUrl && (
                <a href={profile.resumeUrl} className="btn btn-ghost" download>
                  Download CV
                </a>
              )}
            </div>
          </div>

          <div className="hero-visual reveal" aria-hidden="true">
            <div className="orbit orbit-1" />
            <div className="orbit orbit-2" />
            <div className="avatar glass">
              <span className="gradient-text">{profile.initials}</span>
            </div>
            <div className="float-card glass fc-1">
              <code>&lt;html&gt;</code> Web
            </div>
            <div className="float-card glass fc-2">
              <code>py</code> Python
            </div>
            <div className="float-card glass fc-3">
              <code>AI</code> GenAI
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="section container">
          <SectionHeading eyebrow="About me" title="Developer, founder & team leader" />
          <div className="about-grid">
            <div className="glass card about-text reveal">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="stats">
              {about.highlights.map((h) => (
                <div key={h.label} className="glass card stat reveal">
                  <span className="stat-value gradient-text">{h.value}</span>
                  <span className="stat-label">{h.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section container">
          <SectionHeading eyebrow="Skills" title="What I work with" />
          <div className="skills-grid">
            {skills.map((s) => (
              <div key={s.group} className="glass card reveal">
                <h3>{s.group}</h3>
                <ul className="chips">
                  {s.items.map((item) => (
                    <li key={item.name} className={`chip ${"learning" in item && item.learning ? "chip-learning" : ""}`}>
                      {item.name}
                      {"learning" in item && item.learning && <span className="chip-tag">learning</span>}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section container">
          <SectionHeading eyebrow="Services" title="How I can help you" />
          <div className="services-grid">
            {services.map((s) => (
              <div key={s.title} className="glass card service reveal">
                <div className="service-icon">
                  <Icon name={s.icon} size={28} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <ul className="checklist">
                  {s.points.map((p) => (
                    <li key={p}>
                      <Icon name="check" size={18} /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience & education */}
        <section id="experience" className="section container">
          <SectionHeading eyebrow="Journey" title="Experience & education" />
          <div className="journey-grid">
            <ol className="timeline">
              {experience.map((e) => (
                <li key={e.role + e.org} className="timeline-item reveal">
                  <span className="timeline-dot" />
                  <div className="glass card">
                    <div className="timeline-head">
                      <div>
                        <h3>{e.role}</h3>
                        <span className="org">{e.org}</span>
                      </div>
                      <span className="period">{e.period}</span>
                    </div>
                    <ul className="bullets">
                      {e.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>

            <div className="education">
              <h3 className="sub-heading reveal">Education</h3>
              {education.map((ed) => (
                <div key={ed.school} className="glass card edu reveal">
                  <div className="edu-icon">
                    <Icon name="cap" />
                  </div>
                  <div>
                    <h4>{ed.degree}</h4>
                    <p className="org">{ed.school}</p>
                    <p className="muted">{ed.field}</p>
                    <span className="period">{ed.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="section container">
          <SectionHeading eyebrow="Certifications" title="Courses & credentials" />
          <div className="certs-grid">
            {certifications.map((c) => {
              const body = (
                <>
                  <div className="cert-icon">
                    <Icon name="award" size={26} />
                  </div>
                  <div>
                    <h3>{c.name}</h3>
                    <p className="org">{c.issuer}</p>
                  </div>
                </>
              );
              return c.link ? (
                <a key={c.name} href={c.link} target="_blank" rel="noreferrer" className="glass card cert reveal">
                  {body}
                </a>
              ) : (
                <div key={c.name} className="glass card cert reveal">
                  {body}
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="section container">
          <div className="glass card contact reveal">
            <span className="eyebrow">Contact</span>
            <h2>
              Have a project in mind? <span className="gradient-text">Let&apos;s talk.</span>
            </h2>
            <p className="muted">
              Whether you need a website, a landing page or an AI chatbot for your business, send me a message and
              I&apos;ll get back to you.
            </p>
            <p className="contact-email">
              <Icon name="mail" /> {profile.email}
            </p>
            <div className="hero-actions center">
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                Email me <Icon name="arrow" size={18} />
              </a>
              <CopyEmail email={profile.email} />
            </div>
            <div className="socials">
              {profile.socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <p>
          © {year} {profile.name}. Built with Next.js.
        </p>
      </footer>
    </>
  );
}
