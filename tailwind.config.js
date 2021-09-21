module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        drukwide: ["Druk Wide", "sans-serif"],
        druk: ["Druk", "sans-serif"]
      },
      colors: {
        mainblack: "#070707",
        graydim: "#6d6d6d",
        darkblue: "	#303f84",
        wheat: "#F0E2BD"
      },
      margin: {
        "section": "100px"
      },
      padding: {
        "section": "100px",
        "pcontainer": "80px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
