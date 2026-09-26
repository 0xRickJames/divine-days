# Repository instructions

Read `docs/GAME_DESIGN.md`, `docs/WORLD.md`, `docs/DECISIONS.md`, and `docs/ROADMAP.md` before changing product behavior.

- Preserve the mobile-first illustrated navigation model.
- Keep game rules separate from React presentation code.
- Store game content in version-controlled data files unless a requirement explicitly needs database-managed content.
- Never expose MongoDB credentials or trusted reward calculations to the browser.
- Update the relevant design document when a product decision changes.
- Keep `main` deployable on Vercel.
