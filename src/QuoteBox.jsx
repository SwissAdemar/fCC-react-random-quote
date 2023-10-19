import React from "react";
import './QuoteBox.scss';


 const QuoteBox = ({quote, handleNewQuote}) => (
    <div id="quote-box">
        <p id="text">{quote.text}</p>
        <p id="author">{quote.author}</p>
        <div className="quote-btns">
            <a id="tweet-quote"  href="" target="_blank">Tweet</a>
            <button onClick={handleNewQuote}>New Quote</button>
        </div>
    </div>
 )

export default QuoteBox;
