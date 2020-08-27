import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';
import firebase from '.../../../src/firebase';


class StatusButton extends Component {

    constructor(props) {
        super(props);
        this.screensDataRef=firebase.database().ref('AvailableLocations');
        let checked = true;
        if (props.screenData.screenStatus == "1") {
            checked = true
        }
        else {
            checked = false
        }
        this.state = {
            switch: checked,
            modal: false
        };

        this.changeswitch = this.changeswitch.bind(this);
    }

    changeswitch() {
        if(!this.state.switch==false){
            this.props.screenData.screenStatus="0"
        }
        else{
            this.props.screenData.screenStatus="1"
        }
        this.props.screenData.screen_status=null
        this.props.screenData.action=null
        this.screensDataRef.child(this.props.screenData.screenCity+"/screenData/"+this.props.screenData.screenId)
    .set(this.props.screenData)
    .then(_ => {
        this.setState({ switch: !this.state.switch }); 
    });
    }

    render() {
        console.log(this.props.screenData)
        return (
            <AUX>
                <input type="checkbox" id={this.props.screenData.screenId} switch="bool" checked={this.state.switch ? "checked" : ""} onChange={this.changeswitch} />
                <label for={this.props.screenData.screenId} data-on-label="On" data-off-label="Off"></label>
            </AUX>
        )
    }
};
export default StatusButton;
