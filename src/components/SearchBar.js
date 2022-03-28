import { TextField, Button, Autocomplete } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import logo from "../images/urban.jpg";

const useStyles = makeStyles((theme) => ({
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
    padding: "0.5em",
  },
  form: {
    display: "flex",
    flexDirection: "row",
    padding:"1em",

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
    width: "7em", height: "4em", borderRadius: "10px" 
  }
}));

export default function SearchBar({ dictWord }) {
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
