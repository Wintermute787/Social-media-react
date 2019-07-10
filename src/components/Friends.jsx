import React from 'react';
import styled from 'styled-components';
import hack from './assets/hackerman.gif';
import olive from './assets/olive.gif';
import kfc from './assets/kfc.gif';
import bad from './assets/bad.gif';
const Wrapper = styled.div`
    height: 60rem;
    background: linear-gradient(45deg, #BBB9B9,#F8F8F8);
    width: 100%;
    box-shadow: 5px 5px 20px;
img{
    padding: 1rem;
    width: 90%;

}
`


export default (Friends) => {
    return(
        <Wrapper>
            <img src={hack}></img>
            <img src={olive}></img>
            <img src={kfc}></img>
            <img src={bad}></img>
        </Wrapper>
    )
}

