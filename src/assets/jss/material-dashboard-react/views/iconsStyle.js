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
    width:"955px",
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
    width:"66%",
    paddingTop:"90px",
    paddingBottom:"70px",
    paddingLeft:"40px",
    paddingRight:"40px",
  },
  ufscLogo: {
    width:"30%",
    paddingTop:"75px",
    paddingBottom:"70px",
    paddingLeft:"40px",
    paddingRight:"40px",
  },
  row2: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    width:"860px",
    height:"340px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  nubioinfoLogo: {
    width:"25%",
    paddingTop:"60px",
    paddingBottom:"60px",
  },
  bioinfoLogo: {
    width:"20%",
    paddingTop:"60px",
    paddingBottom:"60px",
    paddingLeft:"15px",
    paddingRight:"15px",
  },
  lbmmsLogo: {
    width:"24%",
    paddingTop:"60px",
    paddingBottom:"60px",
  },
  lvaLogo: {
    width:"25%",
    paddingTop:"60px",
    paddingBottom:"60px",
  },
  row3: {
    display: "flex",
    justifyContent: "space-between",
    width:"860px",
    height:"290px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "30px",
  },
  ifscLogo: {
    width:"25%",
    paddingTop:"50px",
    paddingBottom:"50px",
    paddingLeft:"10px",
    paddingRight:"10px",
  },
  capesLogo: {
    width:"21%",
    paddingTop:"60px",
    paddingBottom:"60px",
    paddingLeft:"10px",
    paddingRight:"10px",
  },
  biomehubLogo: {
    width:"24%",
    padding:"35px",
  },
  row4: {
    display: "flex",
    justifyContent: "space-between",
    width:"600px",
    height:"260px",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "50px",
    marginBottom:"50px",
  },
  diveLogo: {
    width:"35%",
    padding:"30px",
  },
};

export default iconsStyle;
