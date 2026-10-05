export default function Home() {
  const services = [
    {
      number: "01",
      title: "Web Design",
      text: "Clean, strategic websites designed around your business, your customers, and the actions you want them to take.",
    },
    {
      number: "02",
      title: "Development",
      text: "Fast, responsive builds engineered to feel polished on every screen and make your business look established.",
    },
    {
      number: "03",
      title: "Local Growth",
      text: "Strong site structure, local SEO foundations, and conversion strategy designed to turn visibility into opportunity.",
    },
    {
      number: "04",
      title: "Care & Optimization",
      text: "Ongoing support, improvements, analytics, and site updates so your digital presence keeps getting better.",
    },
  ];

  const work = [
    {
      number: "01",
      type: "HVAC / CONCEPT",
      title: "A stronger digital presence for a trusted local service company.",
      className: "work-one",
    },
    {
      number: "02",
      type: "ROOFING / CONCEPT",
      title: "Turning reputation and craftsmanship into a modern sales tool.",
      className: "work-two",
    },
    {
      number: "03",
      type: "AUTO DETAILING / CONCEPT",
      title: "A premium online experience built to drive more bookings.",
      className: "work-three",
    },
  ];

  const process = [
    ["01", "Discover", "We learn your business, customers, goals, competition, and what your website actually needs to accomplish."],
    ["02", "Design", "We create a clear visual direction built around trust, positioning, and conversion."],
    ["03", "Develop", "The approved direction becomes a fast, responsive, polished website."],
    ["04", "Launch & Grow", "We launch, measure, improve, and build the foundation for continued growth."],
  ];

  return (
    <main>
      <nav className="nav">
        <a href="#" className="brand">
          <span>EAVE°</span>
          <small>DIGITAL</small>
        </a>

        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#work">Work</a>
          <a href="#process">Process</a>
        </div>

        <a href="#contact" className="nav-cta">
          Start a project <span>↗</span>
        </a>
      </nav>

      <section className="hero">
        <div className="hero-top">
          <p className="eyebrow">DIGITAL PARTNER FOR SERVICE BUSINESSES</p>
          <p className="hero-index">OKC / USA — 2026</p>
        </div>

        <div className="hero-content">
          <h1>
            BUILT FOR BUSINESS.
            <br />
            <span>DESIGNED FOR GROWTH.</span>
          </h1>

          <div className="hero-bottom">
            <p>
              Eave Digital creates high-converting digital experiences for
              service businesses that want to look better, earn more trust,
              and turn attention into customers.
            </p>

            <a href="#contact" className="text-link">
              START A PROJECT <span>→</span>
            </a>
          </div>
        </div>

        <div className="scroll-mark">SCROLL ↓</div>
      </section>

      <section className="statement">
        <p className="section-label">OUR APPROACH</p>

        <h2>
          Your website shouldn&apos;t just
          <br />
          look good. <span>It should generate business.</span>
        </h2>

        <div className="statement-copy">
          <div />
          <p>
            We combine strategy, design, development, and conversion thinking
            to build websites that work as hard as the businesses behind them.
          </p>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-heading">
          <p className="section-label">WHAT WE DO</p>
          <h2>Services built around growth.</h2>
        </div>

        <div className="service-list">
          {services.map((service) => (
            <article className="service-row" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <span className="arrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-heading light">
          <p className="section-label">SELECTED WORK</p>
          <h2>Built to make businesses look as good online as they are offline.</h2>
        </div>

        <div className="work-grid">
          {work.map((project) => (
            <article className={`work-card ${project.className}`} key={project.number}>
              <div className="work-card-top">
                <span>CONCEPT {project.number}</span>
                <span>↗</span>
              </div>

              <div className="work-card-bottom">
                <p>{project.type}</p>
                <h3>{project.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <p className="concept-note">
          Before our first client case studies, we&apos;re using concept projects
          to demonstrate our approach. No fake results. Just the standard of
          work we intend to deliver.
        </p>
      </section>

      <section className="process" id="process">
        <div className="section-heading">
          <p className="section-label">HOW WE WORK</p>
          <h2>Simple process. Serious execution.</h2>
        </div>

        <div className="process-grid">
          {process.map(([number, title, text]) => (
            <article className="process-card" key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="why">
        <div>
          <p className="section-label">WHY EAVE</p>
          <h2>
            Less agency noise.
            <br />
            <span>More business thinking.</span>
          </h2>
        </div>

        <div className="why-copy">
          <p>
            We care about the things that matter after the design is finished:
            whether customers understand your offer, trust your company, and
            know exactly what to do next.
          </p>

          <div className="principles">
            <div>
              <span>01</span>
              <strong>Clarity</strong>
            </div>
            <div>
              <span>02</span>
              <strong>Craft</strong>
            </div>
            <div>
              <span>03</span>
              <strong>Conversion</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="section-label">START A PROJECT</p>

        <h2>
          READY TO BUILD
          <br />
          SOMETHING BETTER?
        </h2>

        <div className="contact-bottom">
          <p>
            Tell us about your business, what&apos;s not working, and where you
            want to go.
          </p>

          <a
            className="contact-button"
            href="mailto:?subject=Eave%20Digital%20Project%20Inquiry"
          >
            LET&apos;S TALK <span>↗</span>
          </a>
        </div>
      </section>

      <footer>
        <div className="brand footer-brand">
          <span>EAVE°</span>
          <small>DIGITAL</small>
        </div>

        <p>BUILT FOR BUSINESS. DESIGNED FOR GROWTH.</p>
        <p>© 2026 EAVE DIGITAL</p>
      </footer>
    </main>
  );
}
