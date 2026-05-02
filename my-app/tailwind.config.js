export default {
  // darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        floatSlow: {
          "0%, 100%": { transform: "translate(0px, 0px)" },
          "50%": { transform: "translate(30px, -40px)" },
        },
      },
      animation: {
        floatSlow: "floatSlow 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
