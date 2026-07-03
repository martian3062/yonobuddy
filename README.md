# YONOBUDDY

Agentic customer-lifecycle swarm demo for retail banking, built for the SBI Hackathon @ Global Fintech Fest 2026 theme: customer acquisition, digital adoption, and digital engagement.

This repository is a runnable local marketplace-style banking demo. It does not connect to live SBI rails or real customer data. It uses deterministic product journeys, safe recommendation previews, consent checks, and audit-first messaging to show the core story end to end.

## What is built

- React + Vite customer-facing product discovery site at the workspace root.
- Policybazaar-style information architecture with product tiles, quick actions, calculators, trust sections, app preview, support, and footer groups.
- Safe compare form for salary, savings, home loan, personal loan, protection, investment, merchant, service, and digital adoption journeys.
- Next-Best-Product framing with readiness preview and reasoned guardrail messaging.
- Policy Guard rules:
  - R001: no cross-sell without active consent.
  - R002: no high-risk action without human approval.
  - R003: prompt-injection and dark-pattern block.
- HMAC-SHA256 audit signatures generated in the browser.
- MCP-style explainability panel for judge questions.

## Run locally

```powershell
npm install
npm run dev
```

Then open the local URL printed by Vite, normally:

```text
http://127.0.0.1:5173/
```

## Useful scripts

```powershell
npm run dev
npm run build
npm run preview
```

## Demo flow

1. Pick a product tile, such as `Salary Account`, `Home Loan`, or `Protection Cover`.
2. Enter demo details in the compare panel.
3. Click `Compare now` to show a readiness preview.
4. Use the quick-action strip for renewal, service, tracking, advisor verification, or callback flows.
5. Scroll through calculators, advantage cards, mobile app preview, testimonials, integrations, help, and footer groups.

## Mapping to the brief

| SBI pillar | Demo surface |
| --- | --- |
| Customer Acquisition | Marketplace product tiles, callback flow, voice/channel positioning, and multilingual onboarding copy |
| Digital Adoption | Digital adoption, service, YONO reset, and app-preview journeys |
| Digital Engagement | Quick actions, calculators, help section, mobile continuation, and safe product nudges |
| Compliance | Policy Guard R001-R003 messaging, consent-first compare preview, human review, and decision trace framing |

## Integration placeholders

The marketplace demo is built to be extended with real service adapters:

- Sarvam AI for ASR, TTS, and multilingual onboarding.
- Groq for planner rationale generation.
- Pinecone for product/customer vector search.
- Hugging Face for injection detection and embeddings.
- Django Channels or another event bridge for live channel sessions.

For a hackathon demo, the current sandbox keeps the story reproducible and safe.
