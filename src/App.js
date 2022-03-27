import React, { useState } from 'react'
import styled from 'styled-components';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
import size from './screensize';
const App = () => {
  const progress=[{id:1,status:true,butnName:"Create Workspace"},
                  {id:2,status:false,butnName:"Create Workspace"},
                  {id:3,status:false,butnName:"Create Workspace"},
                  {id:4,status:false,butnName:"Launch Eden"
                }]

  const [data, setData] = useState(progress)
  const [counter,setCounter] = useState(1)
  const setCount=(x)=>{
    if(counter<=data.length+1){
      setCounter(counter+1)
    }
  }
  const onProgress=()=>{
    if(counter<=data.length+1){
    let x = data.map((item,idx=1)=>{
      
      if((idx)==counter){
        return {...item,status:true}
      }else{
        return {...item}
      }
    })
    setData(x)
    setCounter(setCount)
  }
  }
  const changeComponent=()=>{
    
    if(counter==1){
      
      return <Component1/>
    }
    if(counter==2){
      return <Component2/>
    }
    if(counter==3){
     return <Component3/>
    }
    if(counter==4){
      return <Component4/>
    }
    
    
    
  }
  return (
    <GrandParent>
      <ImgParent>
        <ImgChild >
            <img src='/image/eden.png' />
        </ImgChild>
      </ImgParent>
      <ProgressParent>
        <ProgressChild counter={counter} dataLen={data.length}>
          {
            data.map(items=>{
              return <ProgressCircle isActive={items.status}>{items.id}</ProgressCircle>
            })
          }
        </ProgressChild>
      </ProgressParent>
      <ParentContent>
          {/* <Component4/> */}
          {changeComponent()}
      </ParentContent>
      <ParentButton>
        <Button onClick={onProgress} >{data.length==counter?"Launch Eden":"Create Workspace"}</Button>
      </ParentButton>
    </GrandParent>
  )
}

export default App


const GrandParent = styled.div`
  width:100vw;
  height:100vh;
  // background-color:Aqua;
  display: flex;
  flex-direction:column;
  
`
const ImgParent = styled.div`
  display:flex;
  background-color:white;
  width:100vw;
  height:15%;
  flex: 0 0 auto;
  justify-content:center;
  align-items:center;
`
const ImgChild = styled.div`
  width:20%;
  height:100%;
  background-color:red;
  display:flex;
  img{
    width:100%;
    height:100%;
  }
`
const ProgressParent = styled.div`
display:flex;
background-color:white;
width:100vw;
height:15%;
flex: 0 0 auto;
justify-content:center;
align-items:center;
margin-top:1%;
position:relative;

`
const ProgressChild = styled.div`
  width:60%;
  height:90%;
  //background-color:red;
  display:flex;
  justify-content:space-between;
  align-items:center;
  overflow:hidden;
  position:relative;
  &: before{
    content:"";
    background:#664EE0;
    position:absolute;
    top:50%;
    left:0;
    transform:translateY(-50%);
    height:2%;
    width:${props=>(100/props.dataLen)*props.counter}%;
    z-index:1;
    transition: 0.4s ease;
    display:flex; 
    flex:0 1 auto;
    
  }
  
   &: after{
     content:"";
     background:grey;
     position:absolute;
     top:50%;
     left:0;
     transform:translateY(-50%);
    height:2%;
     width:100%;
     // ${props=>(100/(props.dataLen))*props.counter}%;
    //  z-index:-2;
     transition: 0.4s ease;
     display:flex; 
    flex:0 1 auto;
    
   }

   @media (max-width:${size.mobileL}){
     width:90%;

   }
   @media (max-width:${size.mobileM}){
     width:90%;

  }
  @media (max-width: ${size.mobileS}){
     
    width:90%;
}
`
const ProgressCircle = styled.div`
  width:50px;
  height:50px;
  background-color:${props=>props.isActive?'#664EE0':'white'};
  color:${props=>props.isActive?'white':'black'};
  border-radius:50%;
  z-index:1;
  display:flex;
  justify-content:center;
  align-items:center;
  font-weight:5px;
  border: 0.5px solid ;
  @media (max-width: ${size.mobileS}){
     
    width:30px;
    height:30px;
}
  
`
const ParentContent = styled.div`
  width: 100vw;
  height:40vh;
  background-color:white;
  margin-top:2px;
  display:flex;
  justify-content:center;

 
`
const ParentButton = styled.div`
width: 100vw;
height:5vh;
//background-color:brown; 
display:flex;
justify-content:center;
align-items:center;
margin-top:5px;

`
const Button = styled.div`
  background-color:#664EE0;
  width:50%;
  cursor:pointer;
  height:100%;
  border-radius:5px;
  border: 0.2px solid #664EE0 ;
  text-align:center;
  align-items:center;
  justify-content:center;
  display:flex;
  color:#f1f1f1;
  @media (max-width:${size.mobileL}){
    width:90%;

  }
  @media (max-width:${size.mobileM}){ 
    width:90%;
  }

`