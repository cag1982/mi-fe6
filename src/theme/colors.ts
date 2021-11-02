import { Colors } from "./types";

export const baseColors = {
  failure: "#9e3760",
  primary: "#2b487d",
  primaryBright: "#627D98",
  primaryDark: "#334E68",
  secondary: "#7fa94a",
  success: "#7fa94a",
  warning: "#A6391C",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#b3e0e6",
  backgroundDisabled: "#aaa",
  contrast: "rgba(224, 224, 224, .12)",
  invertedContrast: "#FFFFFF",
  input: "rgba(224, 224, 224, .75)",
  tertiary: "rgba(224, 224, 224, .45)",
  text: "rgba(33, 33, 33, .87)",
  textDisabled: "rgba(33, 33, 33, .38)",
  textSubtle: "rgba(33, 33, 33, .60)",
  borderColor: "rgba(33, 33, 33, .12)",
  card: "rgba(224, 224, 224, .75)",
  modal: "#b3e0e6",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #272727 0%, #353535 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#b3e0e6",
  backgroundDisabled: "#aaa",
  contrast: "rgba(224, 224, 224, .12)",
  invertedContrast: "#FFFFFF",
  input: "rgba(224, 224, 224, .12)",
  tertiary: "rgba(224, 224, 224, .08)",
  text: "rgba(255, 255, 255, .87)",
  textDisabled: "rgba(255, 255, 255, .38)",
  textSubtle: "rgba(255, 255, 255, .60)",
  borderColor: "rgba(224, 224, 224, .12)",
  card: "rgba(224, 224, 224, .75)",
  modal: "#b3e0e6",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #272727 0%, #353535 100%)",
  },
};
