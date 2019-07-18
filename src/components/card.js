import React from 'react';
import styled from 'styled-components';
const WrapperImg = styled.img`
max-width: 200px;
height: 100%;
border:3px solid orange;
`;

function PhotoCard(props){
    return(
        <div>
        <h2>{props.title}
        </h2>
        <WrapperImg>
        <img src={props.url}/>
        </WrapperImg>
        <p>{props.explanation}</p>
        </div>

        
    );
}



export default PhotoCard;
