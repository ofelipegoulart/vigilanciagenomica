import {
  boxShadow,
  whiteColor,
  grayColor,
  hexToRgb,
} from "assets/jss/material-dashboard-react.js";

const iconsStyle = {
  iframe: {
    width: "100%",
    height: "500px",
    border: "0",
    ...boxShadow,
  },
  cardLogos: {
    marginTop: "-45px",
  },
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(" + hexToRgb(whiteColor) + ",.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
    },
    "& a,& a:hover,& a:focus": {
      color: whiteColor,
    },
  },
  cardTitleWhite: {
    color: whiteColor,
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
  row1: {
    display: "flex",
    justifyContent: "space-between",
    width:"1000px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "90px",
  },
  bioinfoLogo: {
    width:"25%",
    padding: "5px",
    height:"300px",
  },
  lacenLogo: {
    width:"35%",
    height:"300px",
  },
  diveLogo: {
    width:"55%",
  },
  row2: {
    display: "flex",
    justifyContent: "space-between",
    width:"1000px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "50px",
    marginBottom: "50px",
  },
  ifscLogo: {
    width:"21%",
    height:"210px",
  },
  fapescLogo: {
    width:"21%",
    height:"210px",
  },
  biomehubLogo: {
    width:"21%",
    height:"210px",
  },
  lvaLogo: {
    width:"21%",
    height:"210px",
  },
  row3: {
    display: "flex",
    justifyContent: "space-between",
    width:"1000px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "50px",
    marginBottom: "90px",
  },
  lbmmsLogo: {
    width:"21%",
    height:"210px",
  },
  nubioinfoLogo: {
    width:"21%",
    height:"210px",
  },
  capesLogo: {
    width:"21%",
    height:"210px",
  },
};

export default iconsStyle;
