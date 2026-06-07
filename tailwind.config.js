module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      primary: {
        light: "var(--primary-light)",
        DEFAULT: "var(--primary)",
        dark: "var(--primary-dark)",
      },
      contrast: "var(--contrast)",
      transparent: "transparent",
      black: "#1A1A1A",
      white: "#fff",
      gray: {
        50: "#F5F0E8",
        100: "#EFE8DD",
        200: "#D8D0C5",
        300: "#C7BAAB",
        400: "#8B8074",
        500: "#6D6258",
        600: "#4F463F",
        700: "#39332E",
        800: "#28231F",
        900: "#1A1A1A",
      },
      red: {
        50: "#ffe0e1",
        400: "#FF656B",
        500: "#cc5156",
      },
      green: {
        400: "#1FDA8A",
      },
      orange: {
        400: "#D7A329",
      },
    },
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "sans-serif"],
      display: ["Impact", "Haettenschweiler", "Arial Narrow Bold", "sans-serif"],
    },
    borderColor: (theme) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.gray.200", "currentColor"),
    }),
    extend: {
      fontSize: {
        md: "0.938rem",
        ss: "0.813rem",
        xxs: "0.75rem",
      },
      backgroundSize: {
        16: "1rem",
      },
      width: {
        22: "5.75rem",
      },
      minHeight: {
        inherit: "inherit",
      },
      margin: {
        30: "7.5rem",
      },
      boxShadow: {
        bottom: "0 2px 0 0 rgba(0, 0, 0, 0.05)",
        inner: "0 0 0px 1000px #fff inset",
        top: "0px -4px 1px 0px rgb(0, 0, 0, 0.025)",
      },
      transitionProperty: {
        bg: "background",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["group-focus"],
      maxHeight: ["group-focus"],
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
}
