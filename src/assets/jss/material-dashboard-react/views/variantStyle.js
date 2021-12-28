import {
  successColor,
  whiteColor,
  grayColor,
  hexToRgb,
} from "assets/jss/material-dashboard-react.js";

const dashboardStyle = {
  successText: {
    color: successColor[0],
  },
  upArrowCardCategory: {
    width: "16px",
    height: "16px",
  },
  stats: {
    color: grayColor[0],
    display: "inline-flex",
    fontSize: "12px",
    lineHeight: "22px",
    "& svg": {
      top: "4px",
      width: "16px",
      height: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px",
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      top: "4px",
      fontSize: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px",
    },
  },
  cardCategory: {
    color: grayColor[2],
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0",
    fontWeight: "300",
    letterSpacing: "0.55px",
  },
  cardCategoryWhite: {
    color: "rgba(" + hexToRgb(whiteColor) + ",.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitle: {
    color: grayColor[2],
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1",
    },
  },
  cardTitleWhite: {
    color: whiteColor,
    marginTop: "5px",
    minHeight: "auto",
    fontWeight: "400",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "5px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1",
    },
  },

  spacing: {
    paddingBottom: "10px",
  },

  chartVariant: {
    marginTop:"40px",
    marginRight: "150px",
    marginLeft: "150px",
    height: "450px",
    position: "relative",
    left: "0",
    right: "0",
  },
  cardVariant : {
    marginTop: "-80px",
    marginLeft: "0px",
    marginRight: "0px",
  },
  chartMobile: {
    display:"none",
  },

  "@media (min-width: 320px) and (max-width:1024px)": {
    cardVariantMobile : {
      marginTop: "-120px",
      marginLeft: "0px",
      marginRight: "0px",
    },
    chartVariantMobile: {
      marginTop:"90px",
    },
    cardTitleWhiteMobile: {
      color: whiteColor,
      marginTop: "5px",
      minHeight: "auto",
      fontWeight: "400",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "5px",
      textDecoration: "none",
      "& small": {
        color: grayColor[1],
        fontWeight: "400",
        lineHeight: "1",
      },
    },
    chartDesktop: {
      display:"none",
    },
    chartMobile: {
      display:"inline",
    },
  },
};

export default dashboardStyle;
