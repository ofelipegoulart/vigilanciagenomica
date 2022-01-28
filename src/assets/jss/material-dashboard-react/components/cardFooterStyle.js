import { grayColor } from "assets/jss/material-dashboard-react.js";

const cardFooterStyle = {
  cardFooter: {
    padding: "0",
    paddingTop: "10px",
    margin: "0 15px 10px",
    borderRadius: "0",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    backgroundColor: "transparent",
    border: "0",
  },
  cardFooterProfile: {
    marginTop: "-15px",
  },
  cardFooterPlain: {
    paddingLeft: "5px",
    paddingRight: "5px",
    backgroundColor: "transparent",
  },
  cardFooterStats: {
    marginTop: "10px",
    "& svg": {
      position: "relative",
      top: "4px",
      marginRight: "3px",
      marginLeft: "3px",
      width: "16px",
      height: "16px",
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      fontSize: "16px",
      position: "relative",
      top: "4px",
      marginRight: "3px",
      marginLeft: "3px",
    },
  },
  cardFooterChart: {
    borderTop: "1px solid " + grayColor[10],
  },
  "@media screen and (min-width:1366px)": {
    cardFooterStats: {
      marginTop: "-10px",
    },
  },
  "@media screen and (min-width:1600px)": {
    cardFooterStats: {
      marginTop: "-10px",
    },
  },
  "@media screen and (min-width:1280px)": {
    cardFooterStats: {
      marginTop: "-40px",
    },
  },
  "@media screen and (min-width:1280px)": {
    cardFooterStats: {
      marginTop: "-40px",
    },
  },
};

export default cardFooterStyle;
