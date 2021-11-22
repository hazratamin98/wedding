module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "600px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      primary: { melon: "#FEB8A2",
       dark: "#364C58", 
       white: "#ffffff" ,
      melon_deep: "#FF9D80",
      melon_light:"#FFF8F6" ,
    grident:'#feece0'},

      secondary: {
        Orange: "#FE5F55",
        Medium: "#80CFA9",
        Orange_Yellow: "#F4D06F",
      },
      spacing: {
        sm: "12px",
        md: "26px",
        lg: "45px",
        xl: "64px",
      },
      margin: {
        sm: "25%",
        md: "50p%",
        lg: "75%",
        xl: "100%",
      },
      // ...
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
