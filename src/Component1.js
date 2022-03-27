import React from 'react'
import styled from 'styled-components';
import Description from './Description';

const Component1 = () => {
  return (
    <ParentHeading>
        <Description title="Welcome! First things first..." descrip="You can always change them later." />
        <Elements>
            <Input1>
                <span>First Name</span>
                <Inputbox>
                    <input />
                </Inputbox>
            </Input1>
            <Inputs>
                <span>Display Name</span>
                <Inputs1>
                    <input />
                </Inputs1>
            </Inputs>
        </Elements>
    </ParentHeading>
  )
}

export default Component1

const ParentHeading = styled.div`
    width:50%;
    height:100%;
    // background-color:red;
    @media (max-width: 425px){
     
        width:90%;
    }
    @media (max-width: 375px){
     
        width:90%;
    }
    @media (max-width: 320px){
     
        width:90%;
    }
`

const Elements = styled.div`
    width:100%;
    height:70%;
    // background-color:brown;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`
const Input1 = styled.div`
    width:100%;
    height:40%;
    // background-color:red;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`
const Inputbox = styled.div`
    width:100%;
    height:30%;
    display:flex;
    justify-content:column;
    // background-color:red;
    input{
        width:100%;
        padding:3%;
        border:0.5px solid #D3D3D3;
        flex:1;
        outline:none;
        border-radius:5px;
    }
`
const Inputs = styled.div`
    width:100%;
    height:30%;
    /background-color:aqua;
    display:flex;
    flex-direction:column;
    justify-content:space-around;

`
const Inputs1 = styled.div`
width:100%;
height:30%;
display:flex;
justify-content:column;
// background-color:red;
input{
    width:100%;
    padding:3%;
    border:0.5px solid #D3D3D3;
    flex:1;
    outline:none;
    border-radius:5px;

}
`
