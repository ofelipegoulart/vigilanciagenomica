import {
  container,
  defaultFont,
  primaryColor,
  defaultBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  whiteColor,
  grayColor,
} from "assets/jss/material-dashboard-react.js";

const headerStyle = () => ({
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    borderBottom: "0",
    marginBottom: "0",
    position: "absolute",
    width: "100%",
    paddingTop: "10px",
    zIndex: "1029",
    color: grayColor[7],
    border: "0",
    borderRadius: "3px",
    padding: "10px 0",
    transition: "all 150ms ease 0s",
    minHeight: "50px",
    display: "block",
  },
  container: {
    ...container,
    minHeight: "50px",
  },
  flex: {
    flex: 1,
  },
  appResponsive: {
    top: "8px",
  },
  titlePageMobile: {
    visibility:"hidden",
  },
  "@media screen and (min-width:200px) and (max-width:960px)": {
    titlePageMobile: {
      visibility:"visible ! important",
      fontWeight:"400",
    },
  },
});

export default headerStyle;
