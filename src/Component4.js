import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styled from 'styled-components'
import Description from './Description';

const Component4 = () => {
  return (
    <ParentHeading>
        <Icon>
            <CheckCircleIcon style={{fontSize:70,color:"#664EE0"}}/>
        </Icon>
        <Description title='Congratulations, Eden!' descrip="You have completed onboarding, you can start using Eden!"/>
    </ParentHeading >
  )
}

export default Component4;

const ParentHeading = styled.div`
    width:50%;
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    @media (max-width: 375px){
        width:100%;
    }
    @media (max-width: 425px){
        width:100%;
    }
`
const Icon = styled.div`
    font-size:50%;
    @media (max-width: 375px){
        fontSize{
            font-size:70px;
        }
    }
`