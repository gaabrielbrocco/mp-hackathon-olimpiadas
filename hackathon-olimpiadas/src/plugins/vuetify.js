/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { pt } from "vuetify/locale";

// Composables
import { createVuetify } from "vuetify";

const myTheme = {
  dark: true,
  colors: {
    // background: "#ffffff",
    // surface: "#FFFFFF",
    primary: "#030712",
    // "primary-darken-1": "#3700B3",
    // secondary: "#03DAC6",
    // "secondary-darken-1": "#018786",
    // error: "#B00020",
    // info: "#2196F3",
    // success: "#4CAF50",
    // warning: "#FB8C00",
  },
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "myTheme",
    themes: {
      myTheme,
    },
  },
  locale: {
    locale: "pt",
    fallback: "pt",
    messages: { pt },
  },
});
