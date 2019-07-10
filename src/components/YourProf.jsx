import React from "react";
import PropTypes from "prop-types";
import Moment from 'moment';

function Status(props) {
    return (
        <div>

            <h3>{props.formattedWaitTime} - {props.names}</h3>
            <p>{props.status}</p>

        </div>
    );
}

function displayTimeOpen(time) {
    return time.from(new Moment(), true);
  }

Status.propTypes = {
    names: PropTypes.string,
    formattedWaitTime: PropTypes.string.isRequired,
    status: PropTypes.string
};
export default Status;
