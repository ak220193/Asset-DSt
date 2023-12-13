// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         lavenderblush: "#fdf0f0",
//         white: "#fff",
//         palevioletred: "#ff85b7",
//         deeppink: "#ff0091",
//         black: "#000",
//         darkslategray: {
//           "100": "#424242",
//           "200": "#005643",
//         },
//         lightpink: "#ffb8b8",
//         aquamarine: "#5dfbd7",
//         gray: "rgba(0, 0, 0, 0.61)",
//         mediumaquamarine: "#69baa5",
//         teal: "#4f8073",
//       },
//       spacing: {},
//       fontFamily: {
//         poppins: "Poppins",
//         calibri: "Calibri",
//         "nunito-sans": "'Nunito Sans'",
//       },
//       borderRadius: {
//         "31xl": "50px",
//         "6xl": "25px",
//       },
//     },
//     fontSize: {
//       xl: "20px",
//       "5xl": "24px",
//       lg: "18px",
//       "9xl": "28px",
//       inherit: "inherit",
//     },
//   },
//   corePlugins: {
//     preflight: false,
//   },
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: "#005643",
        aquamarine: "#5dfbd7",
        gray: "rgba(0, 0, 0, 0.4)",
        mediumaquamarine: "#69baa5",
        teal: "#4f8073",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
    },
    fontSize: {
      "5xl": "24px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};

