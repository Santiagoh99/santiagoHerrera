// Tokens are CSS variables; color-mix lets opacity modifiers (`bg-background/90`) work on them.
const token = (name) => `color-mix(in srgb, var(--${name}) calc(<alpha-value> * 100%), transparent)`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // `hover:` only applies on devices that can hover, so taps don't leave sticky hover states.
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        background: token("background"),
        surface: token("surface"),
        "surface-elevated": token("surface-elevated"),
        border: token("border"),
        foreground: token("foreground"),
        "muted-foreground": token("muted-foreground"),
        accent: token("accent"),
        "accent-hover": token("accent-hover"),
        "accent-foreground": token("accent-foreground"),
        "accent-muted": token("accent-muted"),
      },
    },
  },
  plugins: [],
};
