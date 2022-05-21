import React from "react";

import PublicIcon from '@mui/icons-material/Public';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import IconButton from "@mui/material/IconButton"
import EmailIcon from '@mui/icons-material/Email';
import {useStyles} from './styles'

export default function Footer() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div>
        <h5 className={classes.text}>
          <CopyrightOutlinedIcon size="medium" />
          Darlio 2022 all rights reserved.
        </h5>
        
        
      </div>
      <div className={classes.contact}>
          <h5 className={classes.text}>
          Contact me
          </h5>
         
        
        <div className={classes.footerLinks}>
          <IconButton target="_blank" href="https://github.com/Darlio88"  color="primary" size="medium" className={classes.link}>
            <GitHubIcon  fontSize="inherit" />
          </IconButton>
          <IconButton target="_blank" href="https://www.linkedin.com/in/daniel-darlio-a9aba3194/"  color="primary" size="medium" className={classes.link} >
            <LinkedInIcon fontSize="inherit" />
          </IconButton>
          <IconButton target="_blank" href="mailto:danieldarlio01@gmail.com"  color="primary" size="medium" className={classes.link}>
            <EmailIcon   fontSize="inherit" />
          </IconButton>
           <IconButton target="_blank" href="https://darlio88.github.io/"  color="primary" size="medium" className={classes.link}>
            <PublicIcon fontSize="inherit" />
          </IconButton>
        </div>
      </div>
    </footer>
  );
}
