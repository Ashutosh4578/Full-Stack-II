# Experiment 1.4 - Social Media Scheduler

This is a VS Code-ready recreation of the GitHub Experiment 1.4 project.

## What the experiment demonstrates

- React functional components
- Redux Toolkit for post state
- `React.memo`
- `useMemo`
- `useCallback`
- Interactive calendar
- Create/edit/delete scheduled posts
- Performance counters
- Toggle to compare optimized vs normal rendering

## Run in VS Code

1. Install Node.js.
2. Open this folder in VS Code.
3. Open Terminal -> New Terminal.
4. Run:

```bash
npm install
npm run dev
```

5. Open the localhost URL shown by Vite.

## Experiment

Use the **Use React optimizations** checkbox in the Performance Monitor.

- ON: memoization and stable callbacks are used.
- OFF: normal sorting/calculation and non-memoized rendering are used.

Create/edit/delete posts and watch the performance counters.
