# Plans

Each file here is an implementation plan an AI coding agent will follow, with a generated cost estimate.

- Approve a plan on its PR with a comment: `/lake approve <plan-id>@<version>` (the PR bot comment shows the exact line).
- Request changes: `/lake reject <plan-id>@<version>`. Withdraw: `/lake revoke <plan-id>`.
- The PR author cannot approve their own plan. Bots cannot approve.
- Editing a plan changes its version and needs a fresh approval. The generated "Lake estimate" block is not part of the version.

Made with lake-gate. No telemetry: nothing leaves your repo except what GitHub already runs.
