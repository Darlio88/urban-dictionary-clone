import { Card, Stack, Typography, Button, Divider, Container, IconButton } from "@mui/material";
import React, { useState, useEffect } from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import FlagIcon from "@mui/icons-material/Flag";
import image from "../images/urban.jpg"


import { makeStyles } from "@mui/styles"
const useStyles = makeStyles((theme) => ({
  cover:{
    padingTop: "3em"
  }
  ,
  audio: {
    display: "none",
    [theme.breakpoints.down('md')]: {
      display: "none",
    },
  },
  container: {
    margin: 2,
    padding: 2,
  },
  bigContainer: {
    width: "60vw",
    margin: "5em 3em",
    padding: ".3em",
    borderRadius: "1em"
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
    color: "#000034",
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



export default function Word({ results }) {
  const classes = useStyles()
  const [wordArray, setWordArray] = useState([])
  const handleClickFlag = () => {};
  const handleClickLike = () => {};
  const handleClickDisLike = () => {};

  useEffect(() => {
    if (results.length > 0) {
      setWordArray(results)
    }
  }, [wordArray, results])


  return (
    <Container  sx={{}} className={classes.cover}>
      {
        wordArray.length > 0 ?
          wordArray.map((wordDef, i) => (
            <Card key={i} elevation={2} className={classes.bigContainer}>
              <div className={classes.container}>
                <div className={classes.upper} >
                  <div>
                    <Typography
                      variant="heading"
                      component="h1"
                      sx={{ color: "blue", fontWeight: "bold", margin: "10px" }}
                    >
                      {wordDef['word']}
                    </Typography>
                    <div className="classes.audio">
                      {((wordDef['sound_urls'].length > 0) &&
                        <audio controls autoPlay muted>
                          <source src={wordDef['sound_urls']} type="audio/wav" />
                        </audio>)
                      }
                    </div>
                  </div>

                  <div className="classes.share" >
                    <IconButton aria-label="share on twitter" color="primary">
                      <TwitterIcon />
                    </IconButton>
                    <IconButton aria-label="share on facebook" color="primary">
                      <FacebookIcon />
                    </IconButton>

                  </div>
                </div>
                <div>
                  <Typography variant="body1" component="p" sx={{ display: "block" }}>
                    {wordDef['definition']}
                  </Typography>
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{ fontStyle: "italic", marginTop: "15px" }}
                  >
                    "{wordDef['example']}"
                  </Typography>
                </div>
                <div>
                  <Typography variant="body1" component="p">
                    by {wordDef['author']} on {wordDef['written_on']}
                  </Typography>
                </div>
                <div className={classes.feedback}
                >
                  <div className={classes.thumb}

                  >
                    <Button
                      onClick={handleClickLike}
                      startIcon={<ThumbUpIcon fontSize="small" />}
                      variant="text"
                    >
                      {wordDef['thumbs_up']}
                    </Button>
                    <Button
                      onClick={handleClickDisLike}
                      startIcon={<ThumbDownIcon fontSize="small" />}
                      variant="text"
                    >
                      {wordDef['thumbs_down']}
                    </Button>
                  </div>
                  <div className="classes.flag"
                   
                  >
                    <Button
                      onClick={handleClickFlag}
                      startIcon={<FlagIcon fontSize="small" />}
                      variant="text"
                    >
                      Flag
                    </Button>
                  </div>
                </div>
              </div>
            </Card>))
          :

          <Card elevation={2} className={classes.initial}>
            <div className={classes.welcomeText}>
              <Typography variant="h4" component='h1' className={classes.welcome} >
                Welcome to Urban dictionary
              </Typography>
            <div className={classes.imageDiv}>
              <img src={image} alt="urban-dictionary-logo" className={classes.image} />
              </div>
            </div>
          </Card>

      }
    </Container>

  )
}