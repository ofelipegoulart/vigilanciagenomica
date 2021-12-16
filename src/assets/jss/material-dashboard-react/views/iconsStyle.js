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
    fontWeight: "400",
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
    alignContent: "center",
    width:"910px",
    height:"340px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "90px",
  },
  fapescLogo: {
    width:"46%",
    paddingTop:"60px",
    paddingBottom:"60px",
    paddingLeft:"60px",
    paddingRight:"60px",
  },
  sesLogo: {
    width:"55%",
    paddingTop:"80px",
    paddingBottom:"80px",
    paddingLeft:"40px",
    paddingRight:"40px",
  },
  ufscLogo: {
    width:"30%",
    paddingTop:"80px",
    paddingBottom:"80px",
    paddingLeft:"40px",
    paddingRight:"40px",
  },
  row2: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    width:"910px",
    height:"300px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "90px",
  },
  nubioinfoLogo: {
    width:"27%",
    paddingTop:"60px",
    paddingBottom:"60px",
    paddingLeft:"60px",
    paddingRight:"60px",
  },
  bioinfoLogo: {
    width:"25%",
    padding: "5px",
  },
  lacenLogo: {
    width:"35%",
  },
  ifscLogo: {
    width:"21%",
  },
  biomehubLogo: {
    width:"21%",
  },
  lvaLogo: {
    width:"41%",
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
  capesLogo: {
    width:"21%",
    height:"210px",
  },
};

export default iconsStyle;
