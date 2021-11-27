import {
  drawerWidth,
  transition,
  container,
} from "assets/jss/material-dashboard-react.js";

import {
  infoColor,
  blackColor,
  hexToRgb,
  grayColor,
} from "assets/jss/material-dashboard-react.js";

const appStyle = (theme) => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh",
  },
  mainPanel: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch",
  },
  content: {
    marginTop: "70px",
    padding: "30px 15px",
    minHeight: "calc(100vh - 123px)",
  },
  container,
  map: {
    marginTop: "70px",
  },
  card: {
    height: "370px",
    margin: "120px auto",
    width: "400px",
    backgroundColor: " rgba(196, 196, 196, 0.33) !important",
  },
  formTitle: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "28px",
    paddingTop: "40px",
    paddingLeft: "120px",
  },
  formSignIn: {
    textAlign:"center",
    margin:"auto",
  },
  underline: {
    display:"flex",
    marginLeft:"100px",
    width: "200px",
    height: "30px",
    border:"0",
  },
  submitButton: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "20px",
    border: "none",
    color: "white",
    padding: "12px 30px",
    transition:
      "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    textTransform: "uppercase",
    touchAction: "manipulation",
    willChange: "box-shadow, transform",
    backgroundColor: infoColor[0],
    boxShadow:
      "0 2px 2px 0 rgba(" +
      hexToRgb(infoColor[0]) +
      ", 0.14), 0 3px 1px -2px rgba(" +
      hexToRgb(infoColor[0]) +
      ", 0.2), 0 1px 5px 0 rgba(" +
      hexToRgb(infoColor[0]) +
      ", 0.12)",
    "&:hover,&:focus": {
      backgroundColor: infoColor[0],
      boxShadow:
        "0 14px 26px -12px rgba(" +
        hexToRgb(infoColor[0]) +
        ", 0.42), 0 4px 23px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.12), 0 8px 10px -5px rgba(" +
        hexToRgb(infoColor[0]) +
        ", 0.2)",
      },
  },
  container,
  map: {
    marginTop: "70px",
  },
}
);

export default appStyle;
