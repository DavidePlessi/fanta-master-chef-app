import { createMuiTheme } from "@material-ui/core/styles";

const palette = {
  primary: {
    main: "#CD243B"
  },
  secondary: {
    main: "#E16440"
  }
}

const typography = {
  fontFamily: ["Saira Extra Condensed"]
};

const theme = createMuiTheme({
  typography,
  palette
});

export default theme;