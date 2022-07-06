module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "650px" },
      // => @media (max-width: 639px) { ... }
      s: { max: "480px" },

      "min-2xl": { min: "1535px" },
      // => @media (min-width: 1535px) { ... }

      "min-xl": { min: "1279px" },
      // => @media (min-width: 1279px) { ... }

      "min-lg": { min: "1023px" },
      // => @media (min-width: 1023px) { ... }

      "min-md": { min: "767px" },
      // => @media (min-width: 767px) { ... }

      "min-sm": { min: "650px" },
      // => @media (min-width: 639px) { ... }
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#090909",
      orange: "#FF9900",
      grey: "#D9D9D9",
      error: "#FF0000",
    },
    borderRadius: {
      default: "0.2rem",
    },
    minHeight: {
      h100: "100vh",
      h80: "80vh",
    },
    fontSize: {
      s12: "1.2rem",
      s14: "1.4rem",
      s16: "1.6rem",
      s18: "1.8rem",
      s20: "2rem",
    },
    extend: {
      boxShadow: {
        default: " 1px 1px 5px rgb(0 0 0 / 40%);",
        "default-img": " 1px 1px 5px #fff",
      },
      keyframes: {
        "float-left": {
          from: { width: "0" },
          to: { width: "30%" },
        },
        "float-left-reverse": {
          from: { width: "30%" },
          to: { width: "0" },
        },
        "float-top": {
          from: { height: "0" },
          to: { height: "115%" },
        },
        scale: {
          from: { transform: "scale(0)" },
          to: { transform: "scale(1)" },
        },
        scaleReverse: {
          from: { transform: "scale(0)" },
          to: { transform: "scale(1)" },
        },
        fade: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "float-left": "float-left  0.3s 1 forwards;",
        "float-left-reverse": "float-left-reverse  0.3s 1 forwards;",
        "float-top": "float-top 5s 1 forwards;",
        scale: "scale 0.5s 1 forwards;",
        scaleReverse: "scaleReverse 0.4s 1 forwards;",
        fade: "fade 0.5s 1 forwards",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      colors: {
        "regal-blue": "#243c5a",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
