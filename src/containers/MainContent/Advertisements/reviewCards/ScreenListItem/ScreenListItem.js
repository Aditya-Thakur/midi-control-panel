import React, { Component } from 'react';
import AUX from '../../../../../hoc/Aux_';
import firebase from '../../../../../../src/firebase';


class ScreenListItem extends Component {

    constructor(props) {
        super(props);
        this.usersDataRef = firebase.database().ref('UsersData');
        this.onApprove = this.onApprove.bind(this);
        this.onReject = this.onReject.bind(this);
    }

    componentDidMount() {
        this.usersDataRef.child(this.props.userId+"/userAdvertisementDetails/singleAdvertisementDetails/"+this.props.advIndex+"/screens/"+this.props.screenIndex+"/screenApprovedStatus").on('value', (snapshot) => {
            console.log(snapshot.val());
        });
    }

    onApprove(e) {
        e.preventDefault();
        this.usersDataRef = firebase.database().ref('UsersData');
        this.usersDataRef.child(this.props.userId+"/userAdvertisementDetails/singleAdvertisementDetails/"+this.props.advIndex+"/screens/"+this.props.screenIndex+"/screenApprovedStatus")
        .set("1")
      .then(_ => {
        alert("Screen Approved.")
      });
    }

    onReject(e) {
        e.preventDefault();
        this.usersDataRef = firebase.database().ref('UsersData');
        this.usersDataRef.child(this.props.userId+"/userAdvertisementDetails/singleAdvertisementDetails/"+this.props.advIndex+"/screens/"+this.props.screenIndex+"/screenApprovedStatus")
        .set("2")
      .then(_ => {
        alert("Screen Approved.")
      });
    }


    render() {

    // console.log(window.location.pathname);
        return <AUX>
            <li className="list-group-item" key={this.props.screenDetails.screenId}>{this.props.screenDetails.screenId}
                                <div className="row">
                    <div className="col-md-7">
                        <footer className="font-12">{this.props.screenDetails.screenLocation}, <cite title="Source Title">{this.props.screenDetails.screenCity}</cite></footer>
                    </div>
                    {window.location.pathname=="/reviewed_advertisements"?
                        <div className="col-md-5">
                        {this.props.screenDetails.screenApprovedStatus==1?
                            <div type="button" disabled className="btn btn-outline-success waves-effect waves-light float-right">Approved</div>
                            :
                            <div type="button" className="btn btn-outline-danger waves-effect waves-light float-right mr-1">Rejected</div>

                        }
                        </div>
                        :
                        <div className="col-md-5">
                        <button type="button" className="btn btn-outline-success waves-effect waves-light float-right" onClick={this.onApprove}><i className="ti-check"></i></button>
                        <button type="button" className="btn btn-outline-danger waves-effect waves-light float-right mr-1" onClick={this.onReject}><i className="ti-close"></i></button>
                    </div>
                    }
                </div>
            </li>
        </AUX>
    };
}
export default ScreenListItem;