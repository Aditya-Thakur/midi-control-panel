import React, { Component } from 'react';
import AUX from '../../../../../hoc/Aux_';

class ScreenListItem extends Component {

    render() {
        console.log(this.props.screenDetails)
        return <AUX>
            <li className="list-group-item" key={this.props.screenDetails.screenId}>Screen 12XSDFS
                                <div className="row">
                    <div className="col-md-7">
                        <footer className="font-12">Location City XYZ <cite title="Source Title">Location Place</cite></footer>
                    </div>
                    <div className="col-md-5">
                        <button type="button" className="btn btn-outline-success waves-effect waves-light float-right"><i className="ti-check"></i></button>
                        <button type="button" className="btn btn-outline-danger waves-effect waves-light float-right mr-1"><i className="ti-close"></i></button>
                    </div>
                </div>
            </li>
        </AUX>

    };
}
export default ScreenListItem;