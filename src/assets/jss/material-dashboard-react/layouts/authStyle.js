import {
  drawerWidth,
  transition,
  container,
} from "assets/jss/material-dashboard-react.js";

const appStyle = (theme) => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh",
  },
  mainPanel: {
    marginTop: "200px",
    marginLeft: "auto",
    marginRight: "auto",
    width: "320px",
    paddingBottom: "20px",
    background: "#fff",
  },
  content: {
    marginTop: "70px",
    padding: "30px 15px",
    minHeight: "calc(100vh - 123px)",
  },
  submitButton: {
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "20px",
  },
  container,
  map: {
    marginTop: "70px",
  },
});

export default appStyle;
