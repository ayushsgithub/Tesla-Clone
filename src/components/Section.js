
import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section( {  title,  description,  leftBtn,  rightBtn,  backgroundImage  } ) {
  return (
    <Wrap bgImg={backgroundImage}>
      <Fade bottom>
      <ItemText>
        <h1>{ title }</h1>
        <p>{ description }</p>
      </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
        <ButtonGroup>
          <LeftButton className="LeftButton">{ leftBtn }</LeftButton>
          {rightBtn && 
          <RightButton className="RightButton">{ rightBtn }</RightButton>
          }
          
        </ButtonGroup>  
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  z-index:10px;
  width: 100vw;
  height: 100vh;
  background-image: url("/images/model-s.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  background-image: ${props => `url("/images/${props.bgImg}")`}
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 30px;
  @media (max-width: 768px){
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 35px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
  padding-left: 35px;
  padding-right: 35px;
`;
const RightButton = styled(LeftButton)`
background: white;
opacity:0.65;
color:black;
`;


const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;
