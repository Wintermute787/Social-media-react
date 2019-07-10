import React from "react";
import Status from "./YourProf";
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Wrapper = styled.div`
    border: 1px solid black;
    width: 75%;
    height: 8em;
    margin-left: 3rem;
    padding: 2rem;
    margin-top: 1rem;
`

function YourStatusList(props) {
    function formatTime(){
       let allStatusList = props.yourStatusList.slice();
       allStatusList.forEach((status) =>
       status.formattedWaitTime = status.time.fromNow(true)
       )
    }
    formatTime();
    return(
       <Wrapper>
            {props.yourStatusList.map((statuses)=>
                <Status names={statuses.names}
                        formattedWaitTime = {statuses.formattedWaitTime}
                        status={statuses.status}
                        key={statuses.id}/>
            )}
       </Wrapper>
    )
}

YourStatusList.propTypes = {
    yourStatusList: PropTypes.array
};

export default YourStatusList;
