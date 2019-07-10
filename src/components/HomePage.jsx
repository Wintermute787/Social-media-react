import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { v4 } from 'uuid';
import YourStatusList from './YourStatusList';
import styled from 'styled-components';
import Moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import f1 from './assets/1.jpg';
import f2 from './assets/2.jpg';
import f3 from './assets/3.jpg';
import f4 from './assets/4.jpg';
import f5 from './assets/5.jpg';
import f6 from './assets/6.jpg';
import { loadPartialConfig } from '@babel/core';

const Wrapper = styled.div`

border-radius: 5px;

background-color: transparent;
    width: 100%;
   
    max-height: 100vh;
  overflow-y: scroll;
    img{
        float:left;
        border-radius: 50%;
        width:60px;
        height:60px;
    }
    .name{
        margin-left: 1.2rem;
        border-bottom: 1px solid grey;
        font-weight: bolder;
        font-size: 1.1rem;
    }
    .status{
        width: 21rem;
        padding-left: 1rem;
        font-size: 1.3rem;
        margin-left: 4rem;
    }
    .eachPost {  
        
        width: 60%;
        margin: 0 auto;
        margin-top: 1rem;
        background-color: #f0eded;
margin-bottom: 1rem;
padding: 0.75rem;
        border: 1px solid black;
    }
    .time {
        font-size:0.75rem;
        color: grey;
        font-style: italic;
    }
    .buttons {
        float:right;
        margin-left: 1.5rem;
        width: 4rem;
        padding: 0.3rem;
        background-color: #e8e6e6;
        text-align: center;
    }
    #dots{
        float: right;
        margin-top: -1.6rem;
        margin-right: 0.6rem;
        font-weight: bolder;
        font-size: 1.5rem;
    }
    ::-webkit-scrollbar { 
        display: none;  // Safari and Chrome
    }
`
let allFriend = [f1, f2, f3, f4, f5, f6];
let friendName = ['Joe Barnes', 'John Mulaney', 'Pretty Feet', 'Rick Turp', 'Steve John', 'Marc Ugly'];
let statuses = ['On my way home!', 'Can you believe its not butter?', 'The birds work for the bourgeoisie', 'Anyone know how to fix my pc?', 'Im not sure what to put here', 'Google rash on left leg after hiking', 'I love you all', 'More random messages', 'Hey now hey now hey now', 'Generic taylor swift song lyrics', 'I love this weather were having', 'Anyoen want to go to the fair today?', 'Ah I really dont miss highschool', 'Anyone have any good feet pics they want to pm me?', 'Buying feet pics', 'French people are kinda lame', 'The guy to my left is a baby', 'Anyone know how to eat beer?', 'i miss you all :(', 'feeling pretty good today', 'my left foot kinda hurst'];
let holdTime = new Moment();
let timeSince = (holdTime).fromNow(true);
var list = [{
    name: friendName[0],
    img: allFriend[0],
    status: statuses[0],
    time: new Moment(),
    refactorTime:  (holdTime).fromNow(true)
},
{
    name: friendName[1],
    img: allFriend[1],
    status: statuses[1],
    time: new Moment(),
    refactorTime: (holdTime).fromNow(true)
},
{
    name: friendName[2],
    img: allFriend[2],
    status: statuses[2],
    time: new Moment(),
    refactorTime:  (holdTime).fromNow(true)
},
{
    name: friendName[3],
    img: allFriend[3],
    status: statuses[3],
    time: new Moment(),
    refactorTime:  (holdTime).fromNow(true)
},
{
    name: friendName[4],
    img: allFriend[4],
    status: statuses[4],
    time: new Moment(),
    refactorTime:  (holdTime).fromNow(true)
},
{
    name: friendName[5],
    img: allFriend[5],
    status: statuses[5],
    time: new Moment(),
    refactorTime:  (holdTime).fromNow(true)
}
]

function addNew(){
    list.reverse();
   
    let x = Math.floor(Math.random() * (statuses.length));
    console.log("x: " + x);
    let y = Math.floor(Math.random() * (6));
    
    console.log("y: " + y );
    list.push({name:friendName[y], img: allFriend[y], status: statuses[x], time: new Moment(), refactorTime: (holdTime).fromNow(true)});
    list.reverse();
    list.forEach((eachPerson)=>
    eachPerson.refactorTime = eachPerson.time.fromNow(true)
    )
}

setInterval(function(){ 
    addNew();
 }, 7500);

function FriendsStatus(props) {
    return(
       <Wrapper>
            {list.map((person)=>
            <div class='eachPost'>
                <p><img src={person.img}></img><span class='name'>{person.name}</span><span id='dots'>...</span></p>
                <p class='status'>{person.status}</p>
                <hr></hr>
                <p class='time'>Posted {person.refactorTime} ago     <span class='buttons'>Share  </span><span class='buttons'>   Like   </span> <span class='buttons'>  Comment </span></p>
                </div>
                )}
       </Wrapper>
    )
}


export default FriendsStatus;
