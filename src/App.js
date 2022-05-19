import React, { useContext } from 'react';
import "./css/layout.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Quote from "./components/Quote";
// import { ThemeProvider } from "styled-components";
// import ThemeContext from "./contexts/ThemeContext";
// import GlobalStyles from "../src/components/Styles/GlobalStyles"

const App = () => {
  const [getQuote, setGetQuote] = useState(null);

  useEffect(() => {
    axios.get("https://api.adviceslip.com/advice").then((res) => {
      setGetQuote(res.data.slip);
    });
  }, []);

  const newQuote =async () => {
    const res = await axios.get("https://api.adviceslip.com/advice");
    
    setGetQuote(res.data.slip)
  }

  // const { theme } = useContext(ThemeContext);

  return (
    <div className="App">
    {/* <ThemeProvider theme={{ theme }}> */}
      {/* <GlobalStyles />   */}
      <Quote 
      QuoteId={getQuote?.id} 
      QuoteText={getQuote?.advice} 
      activeQuote={newQuote} />
    {/* </ThemeProvider> */}
    </div>
  );
};

export default App;
