import {
  boxShadow,
  whiteColor,
  grayColor,
  hexToRgb,
  successColor,
  blackColor,
} from "assets/jss/material-dashboard-react.js";

const aboutStyle = {
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
  submitArea: {
    width:"40%",
    marginLeft:"auto",
    marginRight:"auto",
  },
  formArea: {
    textAlign:"center",
  },
  buttons: {
    margin:"6px auto 6px auto",
    fontFamily:"Roboto",
  },
  submitButton: {
    color:whiteColor,
    backgroundColor: successColor[0],
    letterSpacing: "0",
    marginTop:"10px",
    padding:"8px 16px",
    boxShadow:
      "0 2px 2px 0 rgba(" +
      hexToRgb(successColor[0]) +
      ", 0.14), 0 3px 1px -2px rgba(" +
      hexToRgb(successColor[0]) +
      ", 0.2), 0 1px 5px 0 rgba(" +
      hexToRgb(successColor[0]) +
      ", 0.12)",
    border: "none",
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    fontSize: "12px",
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition:
      "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      backgroundColor: successColor[0],
      boxShadow:
        "0 14px 26px -12px rgba(" +
        hexToRgb(successColor[0]) +
        ", 0.42), 0 4px 23px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.12), 0 8px 10px -5px rgba(" +
        hexToRgb(successColor[0]) +
        ", 0.2)",
    },
  },
  container: {
  width:"40%",
  marginLeft:"auto",
  marginRight:"auto",
  },
  form: {
    textAlign:"center",
  },
  inputSeq: {
    marginLeft:"8px",
    fontFamily:"Roboto",
    width:"210px",
    marginBottom:"3px",
  },
  inputTextSeq: {
    fontFamily:"Roboto",
    fontSize:"14px ! important",
    height:"20px!important",
    marginLeft:"21px",
    width:"210px",
    marginBottom:"3px",
  },
  submitButton: {
    color:whiteColor,
    backgroundColor: successColor[0],
    letterSpacing: "0",
    marginTop:"10px",
    padding:"8px 16px",
    boxShadow:
      "0 2px 2px 0 rgba(" +
      hexToRgb(successColor[0]) +
      ", 0.14), 0 3px 1px -2px rgba(" +
      hexToRgb(successColor[0]) +
      ", 0.2), 0 1px 5px 0 rgba(" +
      hexToRgb(successColor[0]) +
      ", 0.12)",
    border: "none",
    borderRadius: "3px",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    fontSize: "12px",
    fontWeight: "400",
    textTransform: "uppercase",
    letterSpacing: "0",
    willChange: "box-shadow, transform",
    transition:
      "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    lineHeight: "1.42857143",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    touchAction: "manipulation",
    cursor: "pointer",
    "&:hover,&:focus": {
      backgroundColor: successColor[0],
      boxShadow:
        "0 14px 26px -12px rgba(" +
        hexToRgb(successColor[0]) +
        ", 0.42), 0 4px 23px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.12), 0 8px 10px -5px rgba(" +
        hexToRgb(successColor[0]) +
        ", 0.2)",
    },
  },
};

export default aboutStyle;
