import React from "react";
import Status from "./YourProf";
import PropTypes from 'prop-types';


function YourStatusList(props) {
    console.log(props.yourStatusList);

    return(
        <div>
            {props.yourStatusList.map((statuses)=>
                <Status names={statuses.names}
                        time = {statuses.time}
                        status={statuses.status}
                        key={statuses.id}/>
            )}
        </div>
    )
}

YourStatusList.propTypes = {
    yourStatusList: PropTypes.array
};

export default YourStatusList;
