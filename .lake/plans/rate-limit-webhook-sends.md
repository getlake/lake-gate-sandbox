---
id: rate-limit-webhook-sends
title: "Rate-limit webhook sends"
author: lake.research1@gmail.com
source: cli
created: 2026-11-16T07:24:53.013Z
---
# Rate-limit webhook sends

Model: Opus 5.5

Bursts from one customer can starve everyone else's webhooks.

1. Add a per-customer token bucket in src/webhooks.js
2. Persist bucket state in Redis so limits hold across workers and deploys (data migration for existing customers)
3. Document the limits in README (model: haiku)
4. Add burst and fairness tests

<!-- lake:estimate:start (generated, not part of the approved digest) -->
## Lake estimate

Overall complexity: **high** · Planned per step (default **Opus 5.5**): **$1.27–$4.30** · Lake mix (cheapest model that fits each step): $1.02–$3.41

| # | Step | Complexity | Planned model | Recommended model | Est. cost |
|---|---|---|---|---|---|
| 1 | Add a per-customer token bucket in src/webhooks.js | low | Opus 5.5 | Haiku 5.5 | $0.13–$0.46 |
| 2 | Persist bucket state in Redis so limits hold across workers and deploys (data migration fo | high | Opus 5.5 | Opus 5.5 | $1.01–$3.38 |
| 3 | Document the limits in README | low | Haiku 5.5 | Haiku 5.5 | <$0.01 |
| 4 | Add burst and fairness tests | low | Opus 5.5 | Haiku 5.5 | $0.13–$0.46 |

Same estimator and price table as lake-meter (API list prices as of 2026-11-12). Not a quote. Subscription plans spend quota, not these dollars.
Auto-approve policy (on): needs a human (upper estimate $4.30 > $1.50; 4 steps > 3; complexity high > low).
<!-- lake:estimate:end -->
