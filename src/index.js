import './style/main.scss';
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

library.add(faEnvelope, faGithub, faLinkedinIn);
dom.watch();