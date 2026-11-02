# Workflow & Ponytail Protocol

Always adhere to this protocol before implementing any code:

1. **Phase 1: Make a Workflow**
   - Present a clear, structured workflow defining what needs to be created or changed.
   - Map out the input, processing steps, output, and files touched.

2. **Phase 2: Ask Ponytail (The Sanity Check)**
   - Run the workflow against the Ponytail Ladder:
     1. Does it need to exist at all?
     2. Can existing code be reused?
     3. Can stdlib / native platform APIs handle it?
     4. Can existing installed dependencies handle it?
     5. Can it be simplified to a one-liner or minimal implementation?
     6. Drop any unrequested abstractions, extra wrappers, or speculative boilerplate.
   - Explicitly detail what Ponytail kept, pruned, or simplified.

3. **Phase 3: Minimal Implementation**
   - Only write code after the workflow and Ponytail review are established.
