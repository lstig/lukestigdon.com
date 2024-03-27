// https://vitepress.dev/guide/custom-theme
import Layout from "./Layout.vue";
import type { Theme } from "vitepress";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./style/main.scss";

library.add(faEnvelope, faLinkedinIn, faGithub);

export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.component("font-awesome-icon", FontAwesomeIcon);
  },
} satisfies Theme;
