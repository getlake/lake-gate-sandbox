---
id: add-webhook-retries
title: "Add webhook retries"
author: lake.research1@gmail.com
source: mcp
created: 2026-11-16T07:01:14.477Z
---
# Add webhook retries

Model: Opus 5.5

Webhook sends fail silently today. Retry them with backoff and never deliver twice.

1. Add a bounded retry queue with exponential backoff in src/webhooks.js (model: Sonnet 5.5)
2. Reuse the idempotency record so retries never double-charge (database migration for a retry_count column)
3. Fix typo in README (model: Haiku 5.5)
4. Move webhooks that fail 8 times to a dead-letter table with an alert (model: Haiku 5.5)
5. Add replay and failure tests (model: Haiku 5.5)

<!-- lake:estimate:start (generated, not part of the approved digest) -->
## Lake estimate

Overall complexity: **high** · Planned model **Opus 5.5**: **$2.32–$8.97** · Lake mix (cheapest model that fits each step): $2.32–$8.97

| # | Step | Complexity | Planned model | Recommended model | Est. cost |
|---|---|---|---|---|---|
| 1 | Add a bounded retry queue with exponential backoff in src/webhooks.js | medium | Sonnet 5.5 | Sonnet 5.5 | $0.21–$0.71 |
| 2 | Reuse the idempotency record so retries never double-charge (database migration for a retr | high | Opus 5.5 | Opus 5.5 | $2.10–$8.22 |
| 3 | Fix typo in README | low | Haiku 5.5 | Haiku 5.5 | $0.002–$0.007 |
| 4 | Move webhooks that fail 8 times to a dead-letter table with an alert | low | Haiku 5.5 | Haiku 5.5 | $0.005–$0.017 |
| 5 | Add replay and failure tests | low | Haiku 5.5 | Haiku 5.5 | $0.005–$0.017 |

Same estimator and price table as lake-meter (API list prices as of 2026-11-12). Not a quote. Subscription plans spend quota, not these dollars.
Auto-approve policy (on): needs a human (upper estimate $8.97 > $1.50; needs budget approval; 5 steps > 3; complexity high > low).
<!-- lake:estimate:end -->
