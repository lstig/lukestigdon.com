import css from 'styled-jsx/css';
import { global_BackgroundColor_dark_100, global_palette_black_100 } from '@patternfly/react-tokens';

const bg_img = '/img/cartographer.png';
const bg_color = global_BackgroundColor_dark_100.value;
const font_color = global_palette_black_100.value;

export default css.global`
  :root {
    --pf-global--Color--100: ${font_color};
  }
  html,
  body,
  body > div:first-child,
  div#__next,
  div#__next > div,
  div#__next > div > div {
    height: 100%;
    width: 100%;
    background-color: ${bg_color};
    background-image: url('${bg_img}');
  }
`;