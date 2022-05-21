


import { makeStyles } from "@mui/styles"
export const useStyles = makeStyles((theme) => ({
  cover:{
    backgroundColor: theme.palette.primary.main,
    padingTop: "3em",
    margin: "1em",
    
  }
  ,
  container: {
    margin: 2,
    padding: 2,
  },
  bigContainer: {
    maxWidth: "500px",
    margin: "1em",
    padding: ".3em",
    borderRadius: "2em",
    [theme.breakpoints.up('md')]: {
      margin: "1em auto",
      minWidth: "500px"
    },
  },
  upper: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  share: {
    display: "flex",
    position: "relative",
    flexDirection: "row",
    margin: "1em",
  },
  initial: {
    backgroundColor: "#000034",
margin:"2em"

  },
  welcome: {
    margin:"auto",
    padding: "1em",
    fontStyle: "italic",
    color: "blue",
  },
  welcomeText: {
    display:"flex",
    flexDirection:"column",
    paddding: "5em",
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: "100%", 
    height: "100%",
    padding:"auto"
  },
  feedback: {
    marginTop: "10px",
    display:"flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignitems: "center"
  },
  thumb: {
    flexDirection: "row",
    justifyContent: "center",
    alignitems: "center",
    borderRadius: ".5em",
    borderBottom: ".3em",
    borderLeft: ".2em",
    borderRight: ".1em",
    borderTop: ".1em",
  },
  flag:{
    borderRadius: ".5em",
    borderBottom: ".3em",
    borderLeft: ".2em",
    borderRight: ".1em",
    borderTop: ".1em",
  },
  imageDiv: {
    justifyContent: "center",
    alignItems:"center"
  }
}))
