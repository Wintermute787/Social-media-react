import React from 'react'
import styled from 'styled-components';
import img1 from './assets/info1.jpg';
import img2 from './assets/info2.jpg';
import img3 from './assets/info3.jpg';
import img4 from './assets/info4.jpg';
import img5 from './assets/info5.jpg';
import img6 from './assets/info6.jpeg';
import f1 from './assets/1.jpg';
import f2 from './assets/2.jpg';
import f3 from './assets/3.jpg';
import f4 from './assets/4.jpg';
import f5 from './assets/5.jpg';
import f6 from './assets/6.jpg';
let allImg = [img1, img2, img3, img4, img5, img6];
let allFriend = [f1, f2, f3, f4, f5, f6];
let friendName = ['Joe Barnes', 'John Mulaney', 'Pretty Feet', 'Rick Turp', 'Steve John', 'Marc Ugly'];
var allInfo = [
{
name: 'Punchmi Indaface',
birthdate: '12/21/1964',
address: '123 Not Whitehouse st. Portland, OR. 97201',
relations: 'Single',
job: 'Unemployed',
college: 'Free Loader Univ Class of 2153'
}
];


const Wrapper = styled.div`
height: 60rem;
background: linear-gradient(45deg, #BBB9B9,#F8F8F8);

width: 100%;
   
    box-shadow: 5px 5px 20px;
#images {
    display: grid;
    
    grid-template-columns: repeat(3,1fr);
}
img{
    margin-bottom: 10px;
    width: 80px;
    height: 80px;
}
#friend {
    display: grid;
    grid-template-columns: repeat(3,1fr);
    font-size: 11px;
}
#friend p {
    font-weight: bolder;
    margin-top: -1em;
}
#content {
    padding: 1rem;
}

`




export default (Info) => {
    return(
        <Wrapper>
            <div id='content'>
            <div id='topInfo'>
            <h3>{allInfo[0].name}</h3>
            <p>Birthdate: {allInfo[0].birthdate}</p>
            <p>Home: {allInfo[0].address}</p>
            <p>RelationShip Status: {allInfo[0].relations}</p>
            <p>Job: {allInfo[0].job}</p>
            <p>Education: {allInfo[0].college}</p>
            </div>
            <h4>Albums</h4>
            <div id='images'>
            {allImg.map((imgSrc)=>
            <img src={imgSrc}></img>
            )}
            </div>
            <h4>{allInfo[0].name}'s Friends:</h4>
            <div id='friend'>
            {allFriend.map((imgSrc, index)=>
            <div>
            <img src={imgSrc}/>
            <p>{friendName[index]}</p>
            </div>
            )}
            </div>
            </div>
        </Wrapper>
    )
}