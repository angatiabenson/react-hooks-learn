# React Hooks Learn

Personal learning project demonstrating common React hooks and patterns, with a tiny Bun-powered dev server.

## Purpose

`React Hooks Learn` (personal learning repo) contains small, focused exercises that illustrate practical usage of React hooks: `useState`, `useEffect`, `useRef`, and a custom `useLocalStorage` hook to persist state.

## Quick start

Install deps and run the dev server (requires Bun):

```bash
bun install
bun dev
```

Build for production:

```bash
bun build ./src/index.html --outdir=dist
```

## What you'll find

- `package.json` — Bun scripts (`dev`, `build`, `start`) and React 19 deps.
- `tsconfig.json` — TypeScript settings (strict, `react-jsx`, path alias `@/*`).
- `src/index.ts` — Bun server routes (includes `/api/hello`) and static serving.
- `src/frontend.tsx` — React app entry with HMR support.
- `src/App.tsx` — Root component; toggle which exercise renders here to try different demos.

### Components (exercises)

- `src/components/ThePersistenceMaster.tsx` — Controlled input persisted to `localStorage` via `useLocalStorage`. Exercise: state persistence across reloads.
- `src/components/TheToggle.tsx` — Read more / Read less toggle using `useState`. Exercise: conditional rendering and toggling boolean state.
- `src/components/TheMirror.tsx` — Mirrors an input value into the UI and updates `document.title` via `useEffect`. Exercise: side effects and syncing state to external APIs.
- `src/components/TheCounter.tsx` — Basic increment/decrement counter using `useState` and functional updates. Exercise: safe numeric state updates.
- `src/components/TheAutoFocuser.tsx` — Auto-focuses an input and exposes programmatic focus via a `ref`. Exercise: `useRef` + DOM interactions.
- `src/APITester.tsx` — Small UI to call the Bun `/api/hello` route and display JSON responses. Exercise: fetch usage and error handling.

### Hooks

- `src/hooks/useLocalStorage.ts` — Custom hook exposing `[value, setValue]` to read/write JSON-serializable values to `localStorage`.

	- Signature: `useLocalStorage<T>(key: string, initialValue: T): [T, (value: T | (prev: T) => T) => void]`
	- Behavior: initializes state from `localStorage` (safely guarded for SSR), provides a setter that accepts a value or updater function, and persists JSON-serialized values back to `localStorage`.
	- Learning goals: persisting React state, safe initialization, and robust setter patterns.

## How to explore

- Open `src/App.tsx` and switch which component is rendered to try different exercises.
- Try typing into the input in `ThePersistenceMaster` and reload to see persistence.
- Use `APITester` to call `/api/hello` and inspect responses.

## Notes

- `useLocalStorage` stores JSON-serializable data only.
- The project uses Bun for fast iteration (HMR enabled in dev).
