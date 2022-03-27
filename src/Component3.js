import React from 'react'
import styled from 'styled-components';
import Description from './Description';

const Component3 = () => {
  return (
    <ParentHeading>
        <Description title="How are you planning to use Eden?" descrip="We'll streamline your setup experience accordingly"/>
        <Elements>
            <Input1>
                <span>Workspace Name</span>
                <Inputbox>
                    <input />
                </Inputbox>
            </Input1>
            <Inputs>
                <span>Workspace URl <span>(optional)</span></span>
                <Inputs1>
                    <span>www.eden.com/</span>
                    <input />
                </Inputs1>
            </Inputs>
        </Elements>
    </ParentHeading>
  )
} 

export default Component3
const ParentHeading = styled.div`
    width:50%;
    height:100%;
    //background-color:pink;

    @media (max-width:425px){
        width:100%;
    }
    @media (max-width:320px){
        width:100%;
    }
`
const Elements = styled.div`
    width:100%;
    height:80%;
    // background-color:brown;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
`
const Input1 = styled.div`
    width:90%;
    //height:40%;
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
        border-radius:4px;
    }
    @media (max-width:475px){
        input{
            padding:4%;
        }
    }
`
const Inputs = styled.div`
    width:90%;
    height:40%;
    // background-color:aqua;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    span{
        span{
            color:grey;
        }
    }
`
const Inputs1 = styled.div`
    display:flex;
    text-align:center;
    justify-content:center;
    align-items:center;
    border: 0.5px solid #D3D3D3;
    border-radius:4px;
    span{
        flex:1 0 auto;
        background-color:#D3D3D3;
        padding:1.5%;
        font-color:#D3D3D3;
        font-size:0.8em;
    }
    input{
        flex:3 0 auto;
        padding:1.5%;
        border:none;
        outline:none;
        
    }
    // @media (max-width:768px){
    //     span{
    //         flex:1 0 auto;
    //         background-color:#D3D3D3;
    //         padding:5px;
    //         font-color:#D3D3D3;
            
    //     }
    //     input{
    //         flex:3 0 auto;
    //         padding:5px;
    //         border:none;
    //         outline:none;
            
    //     }
    // }
    // @media (max-width: 425px){
    //     flex:1 0 auto;
    //     background-color:#D3D3D3;
        
    //     font-color:#D3D3D3;
    //     font-size:100%;
    // }
`