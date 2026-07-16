<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# End of Day Reporting
If a session has ran for over 1 hour, stop and check with the user if they want to continue. If yes, continue. 
If no, create a "For tomorrows session.md" file, keep updating the same file everyday at the end of every session, with information as below:
1 - What tasks were started and completed.
2 - Pending tasks
3 - Error log
4 - Next day's task.
5 - Every new session preview this file.

# General Workflow
- As we go, confirm with the user before adding or changing code to make sure there is no repetitive work or errors.

# Role and Options Protocol
- Assume the best role required for questions or ideas. When presenting questions or ideas, always provide 3 distinct options to choose from, and wait for the user to approve the one they see fit.

# UI Design Rules
- No visual mockups or wireframes for websites in the UI unless explicitly asked for it. Keep it simple and text-based where appropriate.
- When building websites, visual first: do not ask questions textually or via UI prompts to make design choices; instead, build the options directly into the code so the user can see them live on their screen before choosing.
# Agent Instructions
## Self-Correcting Rules Engine

### How it works
1. When the user corrects you or you make a mistake, **immediately append a new rule** to the "Learned Rules" section at the bottom of this file.
2. Rules are numbered sequentially and written as clear, imperative instructions.
3. Format: `N. [CATEGORY] Never/Always do X - because Y.`
4. Categories: `[STYLE]`, `[CODE]`, `[ARCH]`, `[TOOL]`, `[PROCESS]`, `[DATA]`, `[UX]`, `[OTHER]`
5. Before starting any task, scan all rules below for relevant constraints.
6. If two rules conflict, the higher-numbered (newer) rule wins.
7. Never delete rules. If a rule becomes obsolete, append a new rule that supersedes it.

### When to add a rule

- User explicitly corrects your output ("no, do it this way")
- User rejects a file, approach, or pattern
- You hit a bug caused by a wrong assumption about this codebase
- User states a preference ("always use X", "never do Y")

### Rule format example

```
14. [CODE] Always use `bun` instead of `npm` - user preference, bun is installed globally.
15. [STYLE] Never add emojis to commit messages - project convention.
16. [ARCH] API routes live in `src/server/routes/`, not `src/api/` - existing codebase pattern.
```

---

## Learned Rules

<!-- New rules are appended below this line. Do not edit above this section. -->
1. [STYLE] Websites should never look AI generated. Use highly customized, modern, professional layouts and micro-animations.
2. [UX] Leverage multiple themes and vibes (at least 10 different styles) targeting diverse niches like restaurants, e-commerce, boutiques, and SaaS.
3. [TOOL] Utilize anime.js, motion.dev (Framer Motion), kokonut.ui, bklit ui, and manus.im for inspiration, components, and animations.
4. [TOOL] Always use bun instead of npm - npm is crashing with "Exit handler never called" errors on this environment.
5. [TOOL] Always set `$env:NODE_TLS_REJECT_UNAUTHORIZED=0` when running bun to bypass `UNABLE_TO_VERIFY_LEAF_SIGNATURE` proxy errors.
6. [BEHAVIOR] When asking open questions or requesting feedback on design/budget choices, ALWAYS assume a role and present the user with exactly 3 distinct, well-reasoned options to choose from.
7. [PROCESS] Every 30 minutes, pause and output a clean summary of what has been accomplished and what the next immediate steps are. Ensure you review task artifacts to avoid drifting off track.
