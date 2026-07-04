# YONOBUDDY - 7-Slide Demo Deck

## Slide 1 - Cover

**YONOBUDDY**

A consent-first banking product marketplace that lets agents recommend, guards veto, and humans commit.

- SBI Hackathon / GFF 2026
- Live at `/yonobuddy`
- 7-slide demo deck

Prepared for demo review / July 2026

---

## Slide 2 - The Gap

**Banking product discovery breaks at the customer's moment of need.**

1. **Customers start everywhere**  
   Voice, WhatsApp, USSD, app, and branch-assisted flows rarely feel like one continuous journey.

2. **Recommendations can feel unsafe**  
   A useful cross-sell becomes a liability when consent, risk, or human approval is missing.

3. **Operators need explainability**  
   Bank teams need to show why a product was recommended, blocked, or escalated.

Key signals:

- **22** regional-language onboarding ambition
- **3** hard guardrail rules before outreach
- **1** continuous customer lifecycle record

---

## Slide 3 - The Solution

**A familiar marketplace front door, powered by an agentic safety core.**

Flow:

1. **Capture**  
   Voice, chat, USSD, app

2. **Compare**  
   Product match + reason codes

3. **Guard**  
   Consent, risk, injection checks

4. **Commit**  
   Human approval + signed trail

Core principle:

**Agents propose -> Policy Guard filters -> Humans commit**

---

## Slide 4 - Customer Experience

**The first screen behaves like a product marketplace, not an internal console.**

Product tiles:

- Salary Account - fast onboarding
- Home Loan - pre-qualify
- Protection Cover - consent gated
- Merchant Banking - MSME ready
- Digital Adoption - reset help
- Service Requests - track live

Why it works:

1. **Product tiles first**  
   Customers recognize the pattern and choose a need before the agent enters the story.

2. **Compare panel second**  
   The readiness preview explains what can be shown safely before offers are exposed.

3. **Support paths always visible**  
   Renewal, service request, tracking, advisor verification, and callback stay one click away.

---

## Slide 5 - Safety Core

**Policy Guard makes the demo credible for a regulated bank.**

Rules:

- **R001 / Consent**  
  No cross-sell action is shown without active consent.

- **R002 / Human commit**  
  High-risk actions become review-only until an operator approves.

- **R003 / Prompt safety**  
  Policy override attempts are blocked and signed into the trace.

Decision trace example:

- **Allowed:** Salary Account upgrade
- **Review:** Home Loan pre-qualifier
- **Vetoed:** Protection cross-sell without consent

Takeaway:

The product can be recommended only when the consent, risk, and human-review gates agree.

---

## Slide 6 - Live Build

**The marketplace is already deployed under the requested VM path.**

Deployment proof:

- **200** - HTTP OK at `/yonobuddy/`
- **301** - slashless redirect to `/yonobuddy/`
- **a6cdfbd** - deployed Git commit

Build and route:

```text
$ npm ci && npm run build
OK 1580 modules transformed
OK built in 3.44s

nginx route: /yonobuddy/ -> /var/www/yonobuddy
asset check: /yonobuddy/assets/index-*.js -> 200
live: http://35.255.196.78/yonobuddy/
```

---

## Slide 7 - What Comes Next

**Turn the prototype into a bank-ready pilot in four focused increments.**

Roadmap:

| Increment | Focus |
| --- | --- |
| Week 1 | SBI/YONO sandbox + lifecycle schemas |
| Week 2 | Voice/chat adapters + multilingual onboarding |
| Week 3 | Product recommender + consent store |
| Week 4 | Policy Guard audit console + judge demo |

The ask:

Use the live site as the demo shell, then plug in real adapters only where they create proof:

- voice I/O
- product match
- consent
- audit
