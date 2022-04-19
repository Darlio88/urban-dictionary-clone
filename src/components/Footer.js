import React from "react";
import {} from "@mui/icons-material";

import { makeStyles } from "@mui/styles";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import IconButton from "@mui/material/IconButton"
import EmailIcon from '@mui/icons-material/Email';


const useStyles = makeStyles((theme) => ({
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
    fontSize:"2em",
    fontFamily: "Roboto",
    fontWeight:"400"
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div>
        <h4 className={classes.text}>
          <CopyrightOutlinedIcon size="medium" />
          Urban dictionary Clone 2022
        </h4>
        
        
      </div>
      <div className={classes.contact}>
          <h3 className={classes.text}>
          Contact us
          </h3>
         
        
        <div className={classes.footerLinks}>
          <IconButton target="_blank" href="https://github.com/Darlio88" aria-label="delete" color="primary" size="medium" className={classes.link}>
            <GitHubIcon  fontSize="inherit" />
          </IconButton>
          <IconButton target="_blank" href="https://www.linkedin.com/in/daniel-darlio-a9aba3194/" aria-label="delete" color="primary" size="medium" className={classes.link} >
            <LinkedInIcon fontSize="inherit" />
          </IconButton>
          <IconButton target="_blank" href="mailto:danieldarlio01@gmail.com" aria-label="delete" color="primary" size="medium" className={classes.link}>
            <EmailIcon   fontSize="inherit" />
          </IconButton>
        </div>
      </div>
    </footer>
  );
}
