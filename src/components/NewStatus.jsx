import React from 'react';
import PropTypes from 'prop-types'
import { v4 } from 'uuid';
import YourStatusList from './YourStatusList';

function NewStatus(props) {

            let state = {
                isFilled: false
            }

    let _names = null;
    let _status = null;
    let currentlyVisibleContent = null;

    function handleNewStatusSubmission(event) {

        event.preventDefault();
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date+' '+time;
        let currentTime = dateTime.toString();
        console.log(_names.value);
        props.onNewStatusCreation({names:_names.value, time:currentTime, status: _status.value, id: v4() });
        _names.value = '';
        _status.value = '';
        state.isFilled = true;

    }
    if(state.isFilled){
        currentlyVisibleContent = <YourStatusList></YourStatusList>;
    } else {
        currentlyVisibleContent = <p>No Previous Statuses to show</p>
    }
    return(


        <div>

            <form onSubmit={handleNewStatusSubmission}>
                <input
                    type='text'
                    id='names'
                    placeholder='Your Name'
                    ref={(input) => {_names = input;}}/>
                <textarea
                    id='status'
                    placeholder='New Status'
                    ref={(textarea) => {_status = textarea;}}/>

                <button type='submit'>Submit!</button>
            </form>
            {currentlyVisibleContent}
        </div>
    )
}

NewStatus.propTypes = {
    onNewStatusCreation: PropTypes.func
}

export default NewStatus;
