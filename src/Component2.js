import React from 'react'
import styled from 'styled-components'
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import Description from './Description';
const Component2 = () => {
  return (
    <ParentHeading>
        <Description title="Let's stepup a home for all your work" descrip="You can always create another 
        workspace leter."/>
        <Elements>
            <LeftElement>
                <Icon>
                    <PersonIcon />
                </Icon>
                <Texts>
                    <strong>For Myself</strong>
                    <p>Write better. Think 
                        more clearly. Stay
                        organized.
                    </p>
                </Texts>
            </LeftElement>
            <RightElement>
                <Icon>
                    <GroupsIcon />
                </Icon>
                <Texts>
                    <strong>With my team</strong>
                    <p>Wikis, docs, tasks &
                        project, all in on
                        place.
                    </p>
                </Texts>
            </RightElement>
        </Elements>
    </ParentHeading>
  )
}

export default Component2

const ParentHeading = styled.div`
    width:50%;
    height:100%;
    @media (max-width: 320px){
        width:100%;
    }
    @media (max-width: 375px){
        width:100%;
    }
    @media (max-width: 425px){
        width:100%;
    }
    
`

const Elements = styled.div`
    width:100%;
    height:58%;
    
    display:flex;
    justify-content: space-around;
    align-items:center;
    margin-top:5%;

`
const LeftElement = styled.div`
    width:30%;
    &:hover{
        border:3px solid #664EE0;
        border-radius:10px;
    }
    border-radius:10px;
    padding:7px;
`
const RightElement = styled.div`
    width:30%;
    
    
    &:hover{
        border:3px solid #664EE0;
        border-radius:10px;
    }
    padding:7px;

`
const Icon = styled.div`
    width:100%
    height:5%;
    
    padding-left:10px;
    
`
const Texts = styled.div`
padding-left:10px;
@media (max-width:768px){
    strong{
        font-size:13px;
    }
    p{
        font-size:11px;
    }

}
}
@media (max-width: 320px){
    width:100%;
    strong{
        font-size:13px;
    }
    p{
        font-size:11px;
    }
    padding: 4px;
}
@media (max-width: 1024px){

    strong{
        font-size:13px;
    }
    p{
        font-size:11px;
    }
    padding: 4px;
}
`