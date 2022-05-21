
import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#000034",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down('md')]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    justifyContent: "space-around",
    padding:"2em",
  },
  footerLinks: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    margin: ".5em",
  },
  contact: {
    display: "flex",
    flexDirection: "column",
    padding: ".25em 1em",
  },
  text:{
    color:"blue",
    fontSize:"1.5em",
    fontFamily: "Roboto",
    fontWeight:"400"
  }
}));