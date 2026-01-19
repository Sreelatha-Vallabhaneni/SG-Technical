import theme from "@src/styles/theme";

type Theme = typeof theme;

// From https://git.io/fjH9b
declare module "styled-components" {
  interface DefaultTheme extends Theme {}
}
