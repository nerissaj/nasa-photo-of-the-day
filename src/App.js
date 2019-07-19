import React, {useState, useEffect} from "react";
import axios from "axios";
import PhotoCard from './components/card.js'
import "./App.css";
import styled from 'styled-components';
const StyledP = styled.p`
font-size: 50px;
color:pink;
border:3px solid orange;`;
function App() {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15')
    .then(res => {
      setData(res.data);
  });
}, []);

return (
  
   
  <div className="App">
    <StyledP>
  <p>
    Read through the instructions in the README.md file to build your NASA
    app!Have fun<span role="img" >🚀</span>!</p>
    </StyledP> 

      <PhotoCard title={data.title}
     url={data.url}
      explanation={data.explanation} />
     
</div>
      );
}
export default App;
