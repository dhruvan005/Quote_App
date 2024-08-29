import FancyText from "./FancyText";
import { quotes } from "./quotes";
import * as React from 'react';



const InspirationGenerator = () => {

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    // Usage example:
    let randomNumber = getRandomNumber(1, 50);

   
const [index , setIndex] = React.useState(randomNumber)
const quoteText = quotes[index]
const next = () => setIndex((index+1) % quotes.length)

    return (
        <>
           
            <p className=" text-2xl p-6" >Your Quote is <span className=" text-white font-mono font-bold text-xl"> "{quoteText}"</span></p>
            <button onClick={next} className="bg-transparent bg-blue-500 hover:bg-sky-200 hover:text-black transition-all font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent max-w-60 rounded">Inspire me again!!</button>
            
        </>
    );
}

export default InspirationGenerator;
