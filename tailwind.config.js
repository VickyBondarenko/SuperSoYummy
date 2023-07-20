/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: "1440px",
      },
      backgroundImage: {
        recipePage: "url('/src/images/recipePage.webp')",
        hero: "url('/src/images/salat.webp')",
        main_d: "url('/src/images/bg_main-desc.webp')",
        main_t: "url('/src/images/bg_main-tablet.webp')",
        main_m: "url('/src/images/bg_main-mob.webp')",
        mob_menu_leaf: "url('/src/images/bgLeafMobMenu.webp')",
        tablet_mob_menu_leaf: "url('/src/images/bgLeafTabletMobMenu.webp')",
        main_container_mob_leaf: "url('/src/images/bgMainContainerMob.webp')",
        main_container_tab_leaf: "url('/src/images/bgMainContainerTab.webp')",
        main_container_desc_leaf:
          "url('/src/images/bgMainContainerDesctop.webp')",
      },

      colors: {
        accentMain: "#8BAA36",
        accentLighter: "#EBF3D4",
        accentDark: "#22252A",
        accentDarker: "#1E1F28",
        accentHalfDark: "#2A2C36",
        accentGray: "#D9D9D9",
        mainText: "#001833",
        secondaryText: "#3E4462",
        whiteText: "#FAFAFA",
        greyInput: "#BDBDBD",
        listUnderline: "#E0E0E0",
        greenSelectArrow: "8BAA36",
        overlayBackdrop: "rgba(139, 170, 54, 0.8)",
      },
      boxShadow: {
        custom: "0px 4px 4px rgba(135, 135, 135, 0.2)",
      },
      spacing: {
        "52px": "52px",
      },
      fontFamily: {
        main: ["Poppins", "sans-serif"],
      },
      fontSize: {
        customRecipesText: ["8px", "10px"],
        customRecipesTime: ["10px", "14px"],
        customShoppingList: ["12px", "18px"],
        customXxs: ["14px", "14px"],
        customXs: ["14px", "21px"],
        customSm: ["16px", "20px"],
        customBase: ["24px", "24px"],
        customLg: ["28px", "28px"],
        customXl: ["32px", "32px"],
        customXxl: ["44px", "44px"],
      },
      border: { grey1: "#F0F0F0" },
      transitionTimingFunction: {
        customCubic: "cubic-bezier(0.1, 0.7, 1.0, 0.1)",
        altCubic: "cubic-bezier(0.4, 0.0, 0.2, 1)",
      },
      transitionDuration: {
        400: "400ms",
        2000: "2000ms",
      },
      keyframes: {
        crossing1: {
          "0%, 100%": { transform: "rotateZ(0deg)" },
          "50%": { transform: "rotate(35deg)" },
        },
        crossing2: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(-35deg)" },
        },
      },
      animation: {
        crossing1: "crossing1 1.5s infinite",
        crossing2: "crossing2 1.5s infinite",
      },
    },
  },

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  plugins: [require("tailwind-scrollbar")],
};
