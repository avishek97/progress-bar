import React from 'react'
import styled from 'styled-components'

const Description = (props) => {
  return (
    <>
        <Title>
           <strong><p>{props.title}</p></strong>
        </Title>
        <SubTitle>
            <p>{props.descrip}</p>
        </SubTitle>
    </>
  )
}

export default Description

const Title = styled.div`
top:-10;
width:100%;
height:15%;
// background-color:pink;
display:flex;
flex: 0 1 auto;
justify-content:center;
align-items:center;
p{
    color:black;
    font-size:4vmin;
    font-family:cursive;
}
@media (max-width: 320px){
    p{
        color:black;
        font-size:5vmin;
        font-family:cursive;    
    }
}
@media (max-width:425px){
    p{
        color:black;
        font-size:5vmin;
        font-family:cursive;    
    }
}
@media (max-width:768px){
    p{
        font-size:3vmin;

    }
    
}
`
const SubTitle = styled.div`
    width:100%;
    height:10%;
    // background-color:pink;
    display:flex;
    align-items:center;
    justify-content:center;
    p{
    font-family:cursive;
    font-size:2vmin;
    letter-spacing:2px;
    font-color:grey;
    }
    @media (max-width: 320px){
        p{
            font-family:cursive;
            font-size:2vmin;
            letter-spacing:2px;
            font-color:grey;
        }
    }
`