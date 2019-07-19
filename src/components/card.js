import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
max-width: 200px;
height: 200px;
border-radius:100%;
border:3px solid orange;
`;

function PhotoCard(props){
    return(
        <div>
        <h2>{props.title}
        </h2>
        <StyledImg src={props.url} alt="planet">
        {/* /<img /> */}
        </StyledImg>
        <p>{props.explanation}</p>
        </div>

        
    );
}



export default PhotoCard;
