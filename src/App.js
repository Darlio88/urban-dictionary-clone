import React, { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import NavBar from "./components/NavBar";
import Word from "./components/Word";
import Footer from "./components/Footer";


const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: "black",
          borderBottom: "1px solid white",
          height: "15px",
        },
      },
    },
  },
});

export default function App() {
  const [dict, setDict] = useState("");
  const[results, setResults] = useState([])
  const dictWord = (w) => {
    setDict(w);
    
  };
useEffect(()=>{
  fetch(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${dict}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
		"x-rapidapi-key": "7f0abfd512msh0d18b49d6bf6b3dp1a45f9jsn47799d9c9ea4"
	}
})
.then(response => 
	response.json()
).then((data)=>{
setResults(data['list'])
})
},[dict])
  return (
    <ThemeProvider theme={theme}>
      <NavBar dictWord={dictWord} />
      <Word results={results}/>
      <Footer />
    </ThemeProvider>
  );
}
