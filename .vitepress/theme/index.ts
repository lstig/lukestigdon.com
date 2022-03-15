import "./style/main.scss";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

library.add(faEnvelope, faLinkedinIn, faGithub);

import { Theme } from "vitepress";
import Layout from "./Layout.vue";
import NotFound from "./NotFound.vue";

const theme: Theme = {
  Layout,
  NotFound,
  enhanceApp({ app }) {
    app.component("font-awesome-icon", FontAwesomeIcon);
  },
};

export default theme;
