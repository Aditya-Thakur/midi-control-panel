import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';

class StatusButton extends Component {

    constructor(props) {
        super(props);
        let checked = true;
        if (props.switchStatus == "1") {
            checked = true
        }
        else {
            checked = false
        }

        this.state = {
            switch: checked,
        };

        this.changeswitch = this.changeswitch.bind(this);
    }
    changeswitch() { this.setState({ switch: !this.state.switch }); }

    render() {
        return (
            <AUX>
                <input type="checkbox" id={this.props.switchId} switch="bool" checked={this.state.switch ? "checked" : ""} onChange={this.changeswitch} />
                <label for={this.props.switchId} data-on-label="On" data-off-label="Off"></label>
            </AUX>
        )
    }
};
export default StatusButton;
