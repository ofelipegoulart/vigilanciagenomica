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
  chartVariant: {
    marginRight: "auto",
    marginLeft: "auto",
  },
  cardVariant : {
    marginTop: "-80px",
  },
  chartMobile: {
    display:"none",
  },
  rowDesktop: {
    width:"80%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    marginLeft:"auto",
    marginRight:"auto",
  },
  chartTablet: {
    display:"none",
  },
  "@media (min-width: 320px) and (max-width:400px)": {
    cardVariantMobile : {
      marginTop: "-80px",
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
      marginLeft:"-25px",
    },
    chartTablet: {
      display:"none",
    },
  },
  "@media (min-width: 400px) and (max-width:960px)": {
    cardVariantTablet : {
      marginTop: "-80px",
    },
    chartVariantTablet: {
      marginTop:"90px",
    },
    cardTitleWhiteTablet: {
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
      display:"none",
    },
    chartTablet: {
      display:"inline",
    }
  },
};

export default dashboardStyle;
