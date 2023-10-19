import React from "react";
import ReactDOM from "react-dom";
import QuoteBox from "./QuoteBox";
import { useState } from "react";
import quotesData from "./data/quotes";

const GetRandomNum = () => Math.floor(Math.random() * quotesData.length);

const App = () => {

    const [quote, setQuote] = useState(quotesData[GetRandomNum()]); 

    const handleNewQuote = () => {
        setQuote(quotesData[GetRandomNum()]);
    }

    return (
        <>
            <QuoteBox quote={quote} handleNewQuote={handleNewQuote}/>
        </>
        
    )
}

ReactDOM.render(<App />, document.getElementById('main'))
