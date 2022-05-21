import { TextField, Button, Autocomplete } from "@mui/material";

import React, { useState } from "react";
import logo from "../../assets/images/urban.jpg";
import {useStyles} from './styles'

export default function SearchBar({ dictWord}) {
  const classes = useStyles();
  const [wordOptions, setWordOptions] = useState([]);
  const [targetValue, setTargetValue] = useState("");
  const handleChange = (e) => {
    setTargetValue(e.target.value);
    fetch(`https://api.datamuse.com/sug?s=${targetValue}`)
      .then((response) => response.json())
      .then((data) => {
        setWordOptions(data);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dictWord(targetValue);
  };
  return (
    <div  className={classes.nav}>
      <div className={classes.navContainer}

      >
        <img
          src={logo}
          alt="urban-dictionary-logo"
          className={classes.logo}
        />
        <form
          onSubmit={handleSubmit}
className={classes.form}
        >
          <div className={classes.formItems} >
            
              <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={wordOptions.map((option) => option.word)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    onChange={handleChange}
                    label="Type any word here..."
                    id="outlined-basic"
                    focused={false}
                    name="searchWord"
                    value={targetValue}
                    type="text"
                    variant="outlined"
                    sx={{
                      
                      width: "13em",
                      height: "3em",
                      "& label": { color: "gray" },
                      backgroundColor: "white",
                      borderRadius: "5px",
                    }}
                  />
                )}
              />
            
            <div>
              <Button 
              type="submit"
               variant="contained" 
               sx={{ height:"3.3em", marginLeft:"1em"}}
               >
                Search
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
