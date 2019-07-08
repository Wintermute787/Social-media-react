import React from "react";
import PropTypes from "prop-types";
function Status(props) {
    return (
        <div>

            <h3>{props.time} - {props.names}</h3>
            <p>{props.status}</p>
        </div>
    );
}

Status.propTypes = {
    names: PropTypes.string,
    time: PropTypes.string,
    status: PropTypes.string
};
export default Status;
