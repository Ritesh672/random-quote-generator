import React, {useState, useEffect} from "react";
import Heading from "./components/Heading";
import axios from "axios";


function App() {

  const [quote, setQuote] = useState("");
  const [author, getAuthor] = useState("");

   const url = 'https://random-quote-generator2.p.rapidapi.com/randomQuote';

   useEffect(() => {
    axios.get(url, {
        headers: {  // 'headers' should be lowercase
            'x-rapidapi-key': 'bd0baec681msh42c55547a4efaccp1a7d62jsn2471f2d822cc',
            'x-rapidapi-host': 'random-quote-generator2.p.rapidapi.com'
        }
    })
    .then(response => {
        console.log(response.data[0]);
        setQuote(response.data[0].Quote);
        getAuthor(response.data[0].Author);
    })
    .catch(error => {  // Fixed the typo in the .catch block
        console.log("Error while fetching the API", error);
    });
}, []);


  
  return (
    <div className="App">
      <div>
        <Heading />
        <p>{quote}</p>
        <p>Author: {author}</p>
      </div>
     
    </div>
  );
}
export default App;
