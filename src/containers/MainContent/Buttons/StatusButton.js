import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';
import firebase from '../../../firebase/firebase';


class StatusButton extends Component {

    constructor(props) {
        super(props);
        let checked = true;
        if(window.location.pathname == "/customers"){
            this.usersDataRef=firebase.database().ref('UsersData');
            if (props.userAccountData.userAccountStatus == "1") {
                checked = true
            }
            else {
                checked = false
            }
        }
        else{
            this.screensDataRef = firebase.database().ref('AvailableLocations');
            if (props.screenData.screenStatus == "1") {
                checked = true
            }
            else {
                checked = false
            }
        }
        this.state = {
            switch: checked,
            modal: false
        };

        this.changeswitch = this.changeswitch.bind(this);
        this.changeUserStatusswitch = this.changeUserStatusswitch.bind(this);
    }

    changeUserStatusswitch() {
        if (!this.state.switch == false) {
            this.props.userAccountData.userAccountStatus = "0"
        }
        else {
            this.props.userAccountData.userAccountStatus = "1"
        }
        
        this.usersDataRef.child(this.props.userId + "/userPersonalDetails/userAccountStatus")
            .set(this.props.userAccountData.userAccountStatus)
            .then(_ => {
                this.setState({ switch: !this.state.switch });
            });
    }
    changeswitch() {
        if (!this.state.switch == false) {
            this.props.screenData.screenStatus = "0"
        }
        else {
            this.props.screenData.screenStatus = "1"
        }
        this.props.screenData.screen_status = null
        this.props.screenData.action = null
        this.screensDataRef.child(this.props.screenData.screenCity + "/screenData/" + this.props.screenData.screenId)
            .set(this.props.screenData)
            .then(_ => {
                this.setState({ switch: !this.state.switch });
            });
    }

    render() {
        return (
            <AUX>
                {window.location.pathname == "/customers" ?
                    <AUX>
                        <input type="checkbox" id={this.props.userId} switch="bool" checked={this.state.switch ? "checked" : ""} onChange={this.changeUserStatusswitch} />
                        <label for={this.props.userId} data-on-label="On" data-off-label="Off"></label>
                    </AUX>
                    :
                    <AUX>
                        <input type="checkbox" id={this.props.screenData.screenId} switch="bool" checked={this.state.switch ? "checked" : ""} onChange={this.changeswitch} />
                        <label for={this.props.screenData.screenId} data-on-label="On" data-off-label="Off"></label>
                    </AUX>
                }
                
            </AUX>
        )
    }
};
export default StatusButton;
