
import { makeStyles } from "@mui/styles";


export const useStyles = makeStyles((theme) => ({
  nav: {
    margin: "0",
    padding: "0em",
    backgroundColor: "#000034",
    width: "100%",
    
    zIndex: "1",
  },
  navContainer: {
    alignItems: "flex-start",
    justifyContent: "",
    margin: "0em",
    paddingLeft: "3em",
    paddingBottom: "1em"
  },
  form: {
    display: "flex",
    flexDirection: "row",
    marginTop:"0.2em",

  },
  formItems: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    
  },
  button: {
    margin: "0 1em"
  },
  logo:{
    marginTop: "2em",
    width: "7em",
     height: "4em",
      borderRadius: "10px" 
  }
}));