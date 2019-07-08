import React from 'react';
import NewStatusForm from "./NewStatus";
import PropTypes from "prop-types";




class NewStatusControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false
        };
        this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);

    }

    handleTroubleshootingConfirmation(){
        this.setState({ formVisibleOnPage: true});
    }

    render() {
        let currentlyVisibleContent = null;
        if(this.state.formVisibleOnPage){
            currentlyVisibleContent = <NewStatusForm onNewStatusCreation={this.props.onNewStatusCreation}/>;
        } else {
            currentlyVisibleContent = <NewStatusForm onNewStatusCreation={this.props.onNewStatusCreation}/>;
        }
        return(
            <div>
                { currentlyVisibleContent }
            </div>
        );
    }
}
NewStatusControl.propTypes = {
    onNewStatusCreation: PropTypes.func
};



export default NewStatusControl;
