import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#033A77",
          secondary: "#E41523",
          tertiary: "#FEFDE0",
          background: "#001123",
          "on-background": "#FEFDE0",
        },
      },
    },
  },
});
