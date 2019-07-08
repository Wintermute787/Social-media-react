import React from "react";
import Header from "./Header";
import YourStatusList from "./YourStatusList";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NewStatusControl from './NewStatusControl'


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            masterYourStatusList: []
        };
        this.handleAddingNewStatusToList = this.handleAddingNewStatusToList.bind(this);
    }
    handleAddingNewStatusToList(newStatus){
        const newMasterYourStatusList = this.state.masterYourStatusList.slice();
        newMasterYourStatusList.push(newStatus);
        this.setState({masterYourStatusList: newMasterYourStatusList})
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path='/' render={() =><YourStatusList yourStatusList={this.state.masterYourStatusList}/>} />
                        <Route path='/newstatus' render={()=><NewStatusControl onNewStatusCreation={this.handleAddingNewStatusToList}/>} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }

}



export default App;
