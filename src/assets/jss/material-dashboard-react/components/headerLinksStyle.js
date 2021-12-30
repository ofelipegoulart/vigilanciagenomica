import {
  defaultFont,
  dangerColor,
  whiteColor,
  grayColor,
} from "assets/jss/material-dashboard-react.js";

const headerLinksStyle = (theme) => ({
  linkText: {
    zIndex: "4",
    ...defaultFont,
    marginTop: "15px",
    fontSize: "14.5px",
    lineHeight:"1.2px",
    float: "right",
    color: "#333",
    textDecoration: "none",
  },
  update: {
    zIndex: "4",
    ...defaultFont,
    marginTop: "16px",
    fontSize: "13px",
    lineHeight:"1.2px",
    },
  margin: {
    zIndex: "4",
    margin: "0",
  },
  manager: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    display: "inline-block",
  },
  privateNavbarLinksContainer: {
    marginTop: "15px",
    width: "98%",
  },
  "@media (min-width: 320px) and (max-width:1024px)": {
    linkText: {
      display:"none",
    },
    update: {
      position: "absolute",
      top:"100px",
      right: "15px",
      color: "white",
    }
  },
});

export default headerLinksStyle;
