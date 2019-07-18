import React, {useEffect, useState} from "react";
import axios from "axios";
import PhotoCard from './components/card.js'
import "./App.css";
import styled from 'styled-components';
import { Grid, Form, Input, TextArea, Button, Select } from "semantic-ui-react";

const WrapperP = styled.p`
font-size: 200px;
color:pink;
border:3px solid orange;

`;
function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15')
    .then(response => {
      setData(response.data);
  });
}, []);

      return (
  <div className="App">
  <WrapperP>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <WrapperP />
      <PhotoCard title={data.title}
      url={data.url}
      explanation={data.explanation} />
  </div>
      );
}
export default App;
