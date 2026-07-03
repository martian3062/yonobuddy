import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  BellRing,
  Calculator,
  CarFront,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Clock3,
  FileCheck2,
  Fingerprint,
  HeartPulse,
  Home,
  Languages,
  LifeBuoy,
  LockKeyhole,
  MessageCircle,
  PhoneCall,
  PiggyBank,
  Plane,
  Play,
  ReceiptText,
  RefreshCcw,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Store,
  UserCheck,
  WalletCards
} from "lucide-react";
import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import {
  advantages,
  appFeatures,
  calculators,
  footerGroups,
  partnerBands,
  productCategories,
  quickActions,
  testimonials,
  trustStats
} from "./data";

const navItems = ["Products", "Renewals", "Claims", "Support", "Tools"];

const iconMap = {
  salary: WalletCards,
  savings: PiggyBank,
  "home-loan": Home,
  "personal-loan": Banknote,
  protection: ShieldCheck,
  investments: ReceiptText,
  merchant: Store,
  yono: Smartphone,
  rural: Languages,
  service: LifeBuoy
};

function App() {
  const [selectedId, setSelectedId] = useState(productCategories[0].id);
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("Lucknow");
  const [income, setIncome] = useState("45000");
  const [submitted, setSubmitted] = useState(false);

  const selectedProduct = useMemo(
    () => productCategories.find((product) => product.id === selectedId) ?? productCategories[0],
    [selectedId]
  );

  const eligibilityScore = useMemo(() => {
    const incomeNumber = Number.parseInt(income, 10) || 0;
    return Math.min(96, Math.max(54, Math.round(incomeNumber / 1000 + selectedProduct.title.length * 3)));
  }, [income, selectedProduct.title.length]);

  const Icon = iconMap[selectedProduct.id as keyof typeof iconMap] ?? Sparkles;

  return (
    <main className="market-shell">
      <header className="site-header">
        <a className="market-logo" href="#top" aria-label="YONOBUDDY home">
          <span>YB</span>
          <strong>YONOBUDDY</strong>
        </a>

        <nav className="market-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a href={`#${item.toLowerCase()}`} key={item}>
              {item}
              <ChevronDown size={14} />
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a className="text-action" href="#support">
            <PhoneCall size={16} />
            Talk to advisor
          </a>
          <button className="sign-in-button">
            <UserCheck size={16} />
            Sign in
          </button>
        </div>
      </header>

      <section className="market-hero" id="top">
        <div className="hero-content">
          <p className="hero-kicker">
            <BadgeCheck size={18} />
            Consent-first retail banking marketplace
          </p>
          <h1>Find the right banking product for every life moment.</h1>
          <p>
            Compare account, loan, protection, and digital-adoption journeys in one familiar
            marketplace flow. Agents recommend; the Policy Guard decides what is safe to show.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#products">
              Explore products
              <ArrowRight size={18} />
            </a>
            <a className="ghost-link" href="#how-it-works">
              <Play size={17} />
              See demo flow
            </a>
          </div>
        </div>
      </section>

      <section className="product-launcher" id="products">
        <div className="launcher-heading">
          <div>
            <p className="eyebrow">Compare products</p>
            <h2>What are you looking for today?</h2>
          </div>
          <div className="search-pill">
            <Search size={17} />
            <span>Search banking products</span>
          </div>
        </div>

        <div className="product-layout">
          <div className="product-grid">
            {productCategories.map((product) => {
              const ProductIcon = iconMap[product.id as keyof typeof iconMap] ?? Sparkles;
              return (
                <button
                  className={`product-tile ${selectedId === product.id ? "active" : ""}`}
                  key={product.id}
                  onClick={() => {
                    setSelectedId(product.id);
                    setSubmitted(false);
                  }}
                  style={{ "--tile-accent": product.accent } as CSSProperties}
                >
                  <span className="tile-icon">
                    <ProductIcon size={22} />
                  </span>
                  <strong>{product.title}</strong>
                  <small>{product.badge}</small>
                </button>
              );
            })}
          </div>

          <aside className="quote-panel" aria-label="Compare selected product">
            <div className="quote-title">
              <span className="tile-icon large">
                <Icon size={24} />
              </span>
              <div>
                <p className="eyebrow">Selected journey</p>
                <h3>{selectedProduct.title}</h3>
              </div>
            </div>
            <p>{selectedProduct.description}</p>

            <label>
              Mobile number
              <input
                inputMode="numeric"
                maxLength={10}
                onChange={(event) => setMobile(event.target.value)}
                placeholder="Enter 10 digit number"
                value={mobile}
              />
            </label>
            <label>
              City
              <input onChange={(event) => setCity(event.target.value)} value={city} />
            </label>
            <label>
              Monthly income
              <input
                inputMode="numeric"
                onChange={(event) => setIncome(event.target.value)}
                value={income}
              />
            </label>

            <button className="compare-button" onClick={() => setSubmitted(true)}>
              Compare now
              <ArrowRight size={18} />
            </button>

            <div className={`result-box ${submitted ? "show" : ""}`}>
              <strong>{submitted ? `${eligibilityScore}% readiness` : "Ready in under 30 seconds"}</strong>
              <span>
                {submitted
                  ? `Policy Guard will check consent, risk, and human-review needs before showing ${selectedProduct.title} offers in ${city}.`
                  : "Enter basic details to generate a safe recommendation preview."}
              </span>
            </div>
          </aside>
        </div>
      </section>

      <section className="quick-strip" id="renewals" aria-label="Quick actions">
        {quickActions.map((action, index) => {
          const icons = [RefreshCcw, FileCheck2, Clock3, Fingerprint, MessageCircle];
          const QuickIcon = icons[index] ?? CircleHelp;
          return (
            <button key={action}>
              <QuickIcon size={19} />
              <span>{action}</span>
            </button>
          );
        })}
      </section>

      <section className="trust-section">
        <div className="section-copy">
          <p className="eyebrow">Why customers trust the flow</p>
          <h2>Marketplace simplicity with bank-grade controls underneath.</h2>
        </div>
        <div className="stats-grid">
          {trustStats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="two-column-section" id="how-it-works">
        <div className="panel-like explainer-card">
          <p className="eyebrow">How it works</p>
          <h2>One journey, four safety steps</h2>
          <div className="flow-list">
            {[
              ["Capture", "Voice, WhatsApp, USSD, app, or branch-assisted input."],
              ["Compare", "Product matcher ranks options with reason codes."],
              ["Guard", "Consent, risk, and injection checks run before outreach."],
              ["Commit", "Humans approve high-risk actions and every decision is signed."]
            ].map(([title, text], index) => (
              <div className="flow-row" key={title}>
                <span>{index + 1}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="panel-like visual-card">
          <img
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80"
            alt="Customer comparing digital banking choices"
          />
          <div className="overlay-note">
            <ShieldCheck size={18} />
            <span>No cross-sell is shown without active consent.</span>
          </div>
        </div>
      </section>

      <section className="calculators-section" id="tools">
        <div className="section-copy">
          <p className="eyebrow">Popular calculators</p>
          <h2>Help customers make informed decisions.</h2>
        </div>
        <div className="calculator-grid">
          {calculators.map((calculator) => (
            <button key={calculator}>
              <Calculator size={20} />
              <span>{calculator}</span>
              <ArrowRight size={16} />
            </button>
          ))}
        </div>
      </section>

      <section className="advantage-section">
        <div className="section-copy">
          <p className="eyebrow">YONOBUDDY advantage</p>
          <h2>Built for product discovery without unsafe nudges.</h2>
        </div>
        <div className="advantage-grid">
          {advantages.map((advantage) => (
            <article className="advantage-card" key={advantage.title}>
              <CheckCircle2 size={20} />
              <h3>{advantage.title}</h3>
              <p>{advantage.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="app-section">
        <div>
          <p className="eyebrow">Mobile app experience</p>
          <h2>Continue the same journey anywhere.</h2>
          <ul>
            {appFeatures.map((feature) => (
              <li key={feature}>
                <CheckCircle2 size={17} />
                {feature}
              </li>
            ))}
          </ul>
          <button className="primary-link app-button">
            <Smartphone size={18} />
            Get app preview
          </button>
        </div>
        <div className="phone-mock">
          <div className="phone-screen">
            <BellRing size={20} />
            <strong>{selectedProduct.title}</strong>
            <span>Recommendation ready</span>
            <em>Consent check: pending</em>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="section-copy">
          <p className="eyebrow">What teams are saying</p>
          <h2>Designed for customers, operators, and reviewers.</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <p>{testimonial.quote}</p>
              <strong>{testimonial.name}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="partner-section">
        <p className="eyebrow">Integration layers</p>
        <div>
          {partnerBands.map((partner) => (
            <span key={partner}>{partner}</span>
          ))}
        </div>
      </section>

      <section className="help-section" id="support">
        <div>
          <p className="eyebrow">Have a question?</p>
          <h2>Here to help.</h2>
          <p>
            Request a callback, track a service request, or ask for a human review whenever a
            recommendation needs extra care.
          </p>
        </div>
        <div className="help-actions">
          <button>
            <PhoneCall size={18} />
            Request callback
          </button>
          <button>
            <MessageCircle size={18} />
            Chat with support
          </button>
        </div>
      </section>

      <footer className="market-footer">
        <div className="footer-brand">
          <a className="market-logo" href="#top">
            <span>YB</span>
            <strong>YONOBUDDY</strong>
          </a>
          <p>Agentic retail-banking discovery with consent, audit, and human approval built in.</p>
        </div>
        {footerGroups.map((group) => (
          <div className="footer-group" key={group.title}>
            <strong>{group.title}</strong>
            {group.links.map((link) => (
              <a href="#top" key={link}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </footer>
    </main>
  );
}

export default App;
