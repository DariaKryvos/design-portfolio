export async function register() {
  // The environment injects --localstorage-file into Node.js with an invalid
  // path, which creates a globalThis.localStorage object whose methods are all
  // undefined. Next.js SSR hits this and throws on every request.
  // Patch it with a no-op in-memory implementation so SSR completes normally.
  const ls = (globalThis as Record<string, unknown>).localStorage;
  if (ls !== undefined && typeof (ls as Storage).getItem !== "function") {
    const store: Record<string, string> = {};
    Object.defineProperty(globalThis, "localStorage", {
      value: {
        getItem: (k: string) => store[k] ?? null,
        setItem: (k: string, v: string) => { store[k] = String(v); },
        removeItem: (k: string) => { delete store[k]; },
        clear: () => { Object.keys(store).forEach(k => delete store[k]); },
        get length() { return Object.keys(store).length; },
        key: (i: number) => Object.keys(store)[i] ?? null,
      } satisfies Storage,
      writable: true,
      configurable: true,
    });
  }
}
