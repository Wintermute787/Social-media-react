import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import banner from './assets/yep.gif';
import ads2 from './assets/ad2.gif';
import ads3 from './assets/ad3.gif';
import ads4 from './assets/ad4.gif';
let color = ['red', 'blue', 'green', 'orange'];
let i = 0;
let x = 0;
let y = 0;
let z = 0;
const Wrapper = styled.div`
#ad1{
border-radius: 5px;
background-color: red;
height: 300px;
width: 700px;
background-image: url(${banner});
background-position: cover;
position: absolute;

   transition: all .2s;
  overflow-y: scroll;
  display: flex;

  color: white;
  :hover {
      transform: scale(4);
  }
}
#ad2{
    border-radius: 5px;
    background-color: red;
    height: 250px;
    width: 313px;
    background-image: url(${ads2});
    background-position: cover;
    position: absolute;
    
       transition: all .2s;
      overflow-y: scroll;
      display: flex;
    
      color: white;
      :hover {
          transform: scale(4);
      }
    }
    #ad3{
        border-radius: 5px;
        background-color: red;
        height: 600px;
        width: 138px;
        background-image: url(${ads3});
        background-position: cover;
        position: absolute;
        
           transition: all .2s;
          overflow-y: scroll;
          display: flex;
        
          color: white;
          :hover {
              transform: scale(4);
          }
        }
        #ad4{
            border-radius: 5px;
            background-color: red;
            height: 250px;
            width: 313px;
            background-image: url(${ads4});
            background-position: cover;
            position: absolute;
            
               transition: all .2s;
              overflow-y: scroll;
              display: flex;
            
              color: white;
              :hover {
                  transform: scale(4);
              }
            }
`
const TextAnimation = styled.a`
    transition: all .2s;
  
        :hover {
            transform: scale(1.2);
        }
`

setInterval(function(){ 
    console.log(i);
    i = Math.floor(Math.random() * (900));
    x = Math.floor(Math.random() * (900));
    y = Math.floor(Math.random() * (900));
    z = Math.floor(Math.random() * (900));
 }, 7);
function Ads(props) {
    return(
<Wrapper>
       <div id='ad1' style={{marginTop: i, marginLeft: i, marginRight: i}}>
<TextAnimation><Link id='link' to="/" style={{ textDecoration: 'none', color: 'white' }}>EXIT</Link></TextAnimation>
       </div>
       <div id='ad2' style={{marginTop: x, marginLeft: x, marginRight: x}}>
       <TextAnimation><Link id='link' to="/" style={{ textDecoration: 'none', color: 'white' }}>EXIT</Link></TextAnimation>
              </div>
              <div id='ad3' style={{marginTop: y, marginLeft: y, marginRight: y}}>
              <TextAnimation><Link id='link' to="/" style={{ textDecoration: 'none', color: 'white' }}>EXIT</Link></TextAnimation>
                     </div>
                     <div id='ad4' style={{marginTop: z, marginLeft: z, marginRight: z}}>
                     <TextAnimation><Link id='link' to="/" style={{ textDecoration: 'none', color: 'white' }}>EXIT</Link></TextAnimation>
                            </div>
                            </Wrapper>
    )
}


export default Ads;
