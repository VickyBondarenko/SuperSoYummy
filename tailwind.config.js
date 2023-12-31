/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    transitionDuration: {
      DEFAULT: "300ms",
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      400: "400ms",
      450: "450ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1000: "1000ms",
    },
    transitionTimingFunction: {
      DEFAULT: "ease-in-out",
    },
    extend: {
      screens: {
        xl: "1440px",
      },
      spacing: {
        loaderMardgin: "40%",
      },
      backgroundImage: {
        authPage_mob: "url('/src/assets/AuthPage/auth_back_mob.png')",
        authPage_tab: "url('/src/assets/AuthPage/auth_back_tablet.png')",
        authPage_desc: "url('/src/assets/AuthPage/auth_back_desktop.png')",
        recipePage: "url('/src/images/recipePage.webp')",
        hero: "url('/src/images/salat.webp')",
        mob_menu_leaf: "url('/src/images/bgLeafMobMenu.webp')",
        tablet_mob_menu_leaf: "url('/src/images/bgLeafTabletMobMenu.webp')",
        main_container_mob_leaf: "url('/src/images/bgMainContainerMob.webp')",
        main_container_tab_leaf: "url('/src/images/bgMainContainerTab.webp')",
        main_container_desc_leaf:
          "url('/src/images/bgMainContainerDesctop.webp')",
        main_container_bottom_leaf: "url('/src/images/leafs.png')",
        test_leaf: "url('/src/images/test-leaf.png')",
        welcome: "url('/src/images/salat.webp')",
        welcome_mob: "url('/src/images/salat_mob.png')",
        welcome_tab: "url('/src/images/salat_tab.png')",
        // HeroBackground
        m_angle: "url('/src/images/HeroBg/m-bg-green.png')",
        t_angle: "url('/src/images/HeroBg/t-bg-green.png')",
        d_angle: "url('/src/images/HeroBg/d-bg-green.png')",
        m_top_leaf: "url('./src/images/HeroBg/m-spinach-top.png')",
        t_top_leaf: "url('./src/images/HeroBg/t-spinach-top.png')",
        d_top_leaf: "url('./src/images/HeroBg/d-spinach-top.png')",
        m_bottom_leaf: "url('./src/images/HeroBg/m-spinach-bottom.png')",
        t_bottom_leaf: "url('./src/images/HeroBg/t-spinach-bottom.png')",
        d_bottom_leaf: "url('./src/images/HeroBg/d-spinach-bottom.png')",
        m_recipe_hero: "url('/src/images/RecipeHero/m-recipeHero-bg.png')",
        t_recipe_hero: "url('/src/images/RecipeHero/t-recipeHero-bg.png')",
        d_recipe_hero: "url('/src/images/RecipeHero/d-recipeHero-bg.png')",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "50%": "50%",
        16: "4rem",
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
        inputBorder: "rgba(250, 250, 250, 0.50)",
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
        customBaseH1: ["24px", "28px"],
        customLg: ["28px", "28px"],
        customLgH1: ["28px", "30px"],
        customXl: ["32px", "32px"],
        customXxl: ["44px", "44px"],
      },
      border: {
        grey1: "#F0F0F0",
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
        crossing1: "crossing1  1.5s infinite",
        crossing2: "crossing2  1.5s infinite",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  plugins: [
    require("tailwind-scrollbar"),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
};
