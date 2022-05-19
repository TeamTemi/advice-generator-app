import React from 'react'
import dice from '../Assets/images/icon-dice.svg'
import linepause from '../Assets/images/pattern-divider-desktop.svg' 
// import ThemeSwitcher from "../components/ThemeSwitcher";

const Quote = ({QuoteId, QuoteText, activeQuote }) => {
  return (
    <>
      <div>
      {/* <ThemeSwitcher />   */}
      </div>
      <section className="Quote">
        <div className="Quotecontent">
          <h3 className="Quote__Title">Advice #{QuoteId}</h3>
          <p className="Quote__Text">{QuoteText}</p>
        </div>
          <div className="pauseline">
            <img src={linepause} alt="dice" />
          </div>
          <div className="Quote__Btn" onClick = {()=>activeQuote()}>
            <img src={dice} alt="dice" />
          </div>
      </section>
    </>
  );
};

export default Quote;