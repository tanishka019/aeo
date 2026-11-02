<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Guidelines: Workflow First & Ponytail Gate

For any feature, script, module, or fix being built in this workspace, strictly follow this two-stage process before writing any code:

## Phase 1: Workflow Formulation
Before touching or writing any code:
1. Outline the exact workflow and user/data flow.
2. Define the minimal steps and files involved.
3. Identify dependencies, inputs, and outputs.

## Phase 2: The Ponytail Gate (Consult Ponytail)
Run the proposed workflow through Ponytail's principles before writing a single line of code:

### The Ladder
Stop at the first rung that holds:
1. **Does this need to be built at all?** (YAGNI)
2. **Does it already exist in this codebase?** (Reuse it)
3. **Does the standard library do this?** (Use it)
4. **Does a native platform feature cover it?** (Use it)
5. **Does an already-installed dependency solve it?** (Use it)
6. **Can this be one line / minimal?** (Keep it dead simple)
7. **Only then:** Write the absolute minimum code that works.

### Strict Rules
- **No unrequested abstractions:** No premature factories, wrappers, or future-proofing layers.
- **No avoidable dependencies:** Zero new packages unless strictly necessary.
- **Deletion over addition:** Favor removing or pruning code over adding new structures.
- **Mark intentional simplifications:** Use `// ponytail:` comments.
- **Non-negotiables:** Never simplify away security, input validation at boundaries, error handling that prevents data loss, or accessibility basics.

### Execution
Always present:
1. The structured **Workflow**.
2. The **Ponytail Review** (what was evaluated on the ladder, what was pruned/skipped, and confirmation).
3. The minimal code.
