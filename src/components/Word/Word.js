
import React, {useState} from "react";
import { Card, Typography,  Container, IconButton} from "@mui/material";
import {Favorite as FavoriteIcon, FavoriteBorder as FavoriteBorderIcon } from "@mui/icons-material/";



import Moment from 'react-moment'

import {useStyles} from './styles'

import videoBook from '../../assets/videos/urban-dictionary.mp4'
export default function Word({ results }) {
  const [liked, setLiked] = useState(false)
  const classes = useStyles() 
const handleClick =(e) =>{
  setLiked((prevState) =>(!prevState))
}
  return (
    <Container  sx={{display: 'Grid', }} className={classes.cover}>
      {
        results?.length > 1?
          results?.map((wordDef, i) => (
            <Card key={i} elevation={2} className={classes.bigContainer}>
              <div className={classes.container}>
                <div className={classes.upper} >
                  <div>
                    <Typography
                      variant="heading"
                      component="h1"
                      sx={{ color: "blue", fontWeight: "bold", margin: "10px" }}
                    >
                      {wordDef.word}
                    </Typography>
                    
                  </div>

                  <div className="classes.share" >
                      <IconButton onClick={handleClick} >
                      {liked?   <FavoriteIcon color='secondary'/> : <FavoriteBorderIcon color='primary'/> }
                        </IconButton>                  

                  </div>
                </div>
                <div>
                  <Typography variant="h6" component="p" sx={{ display: "block" }}>
                    {wordDef.definition}
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    sx={{ fontStyle: "italic", marginTop: "15px" }}
                  >
                    "{wordDef.example}"
                  </Typography>
                </div>
                <div style={{marginTop: "15px"}}>
                  <Typography variant="body1" component="p">
                    by {wordDef.author} 
                  </Typography>
                  <Typography variant="body2" component="p" sx={{ fontStyle: "italic", marginTop: "15px" }}> 
                  <Moment >{wordDef.written_on}</Moment> 
                  </Typography>
                </div>
                <div className={classes.feedback}
                >
                 <div>
                    <Typography variant='body1' component='p' >
                       Likes {wordDef.thumbs_up}
                    </Typography>
                    
                 </div>
                    <div>
                    <Typography variant='body1' component='p' >
                           Dislikes  {wordDef.thumbs_down}
                      </Typography>                    
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
         <video width="350" height="260" autoPlay loop muted>
  <source src={videoBook} type="video/mp4"/>
  
</video>
            </div>
          </Card>

      }
    </Container>

  )
}