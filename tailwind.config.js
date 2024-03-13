/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBg: "#F4F4F6",
        blue: "#2071EE",
        "Text-Grey-Light": "#979DAA",
        "Text-Black": "#1A191E",
        blueBg: "#EFF7FF",
        // customRed: "#FF0000", // Example custom color
        // customBlue: {
        //   50: "#E3F2FD",
        //   100: "#BBDEFB",
        //   // Add more shades as needed
        // },

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
