import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { v4 } from 'uuid';
import YourStatusList from './YourStatusList';
import styled from 'styled-components';
import Moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const Wrapper = styled.div`
height: 60rem;
border-radius: 5px;
background: linear-gradient(45deg, #BBB9B9,#F8F8F8);
    width: 100%;
    box-shadow: 5px 5px 20px;
`

const useStyles = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      marginTop: '1rem',
      justifyContent: 'center'
    },
    textarea: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
  }));


const allStat = [];

function NewStatus(props) {   

    // const [isFilled, setFilled] = useState(false);
    const classes = useStyles();
    let _names = null;
    let _status = null;
    let currentlyVisibleContent = null;

    function handleNewStatusSubmission(event) {
        event.preventDefault();
        props.onNewStatusCreation({names:_names.value, time:new Moment, status: _status.value, id: v4() });
        allStat.push({names:_names.value, time: new Moment(), status: _status.value, id: v4() });
        _names.value = '';
        _status.value = '';       
        // setFilled(true);
    }
    if(allStat.length >= 1){
        currentlyVisibleContent = <YourStatusList yourStatusList={allStat}/>
    } else {
        currentlyVisibleContent = <p>No Previous Statuses to show</p>
    }
    
    return(


        <div>

            <form className={classes.container} onSubmit={handleNewStatusSubmission}>
                <input
                    type='text'
                    id='names'
                    className={classes.textarea}
                    placeholder='Your Name'
                    ref={(input) => {_names = input ;} }
                    value={_names}/>
                <textarea
                    id='status'
                    placeholder='New Status'
                    className={classes.textarea}
                    ref={(textarea) => {_status = textarea;}}/>

                <button type='submit'>Submit!</button>
            </form>
            {currentlyVisibleContent}
        </div>
    )
}

NewStatus.propTypes = {
    onNewStatusCreation: PropTypes.func
};


export default NewStatus;
