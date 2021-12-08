import { createGlobalStyle } from "styled-components";
import { colors } from "../colors";
import { fontFamaly } from "../font";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: ${fontFamaly.font02}, sans-serif;
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: grey;
  list-style: none;
  background: ${colors.whiteLight};
}
`;
