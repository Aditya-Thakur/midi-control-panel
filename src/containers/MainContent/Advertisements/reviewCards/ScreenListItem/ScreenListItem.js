import React, { Component } from 'react';
import AUX from '../../../../../hoc/Aux_';
import firebase from '../../../../../../src/firebase';
import axios from 'axios';


class ScreenListItem extends Component {

    constructor(props) {
        super(props);
        this.usersDataRef = firebase.database().ref('UsersData');
        this.onApprove = this.onApprove.bind(this);
        this.onReject = this.onReject.bind(this);
    }

    componentDidMount() {
        // console.log(this.props.screenDetails.screenPrice)
        // this.usersDataRef.child(this.props.userId+"/userAdvertisementDetails/singleAdvertisementDetails/"+this.props.advIndex+"/screens/"+this.props.screenIndex+"/screenApprovedStatus").on('value', (snapshot) => {
        //     console.log(snapshot.val());
        // });
    }

    onApprove(e) {
        e.preventDefault();
        this.usersDataRef = firebase.database().ref('UsersData');
        this.usersDataRef.child(this.props.userId+"/userAdvertisementDetails/singleAdvertisementDetails/"+this.props.advIndex+"/screens/"+this.props.screenIndex+"/screenApprovedStatus")
        .set("1")
      .then(_ => {
        const notify = {
            topic: "weather",
            notifyTitle:"Hurray!!",
            notifyBody:"Scrreen Approved "+this.props.screenDetails.screenId
          };
      
          axios.post(`https://nodejs-fcm-server.herokuapp.com/notify`, notify )
            .then(res => {
              console.log(res);
              console.log(res.data);
            })
        alert("Screen Approved.")
      });
    }

    onReject(e) {
        e.preventDefault();
        this.usersDataRef = firebase.database().ref('UsersData');
        this.usersDataRef.child(this.props.userId+"/userAdvertisementDetails/singleAdvertisementDetails/"+this.props.advIndex+"/screens/"+this.props.screenIndex+"/screenApprovedStatus")
        .set("2")
      .then(_ => {
        const refundAmount=this.props.screenDetails.screenPrice
        const refundFor=this.props.screenDetails.screenId
        this.usersDataRef.child(this.props.userId+"/userWalletDetails").once('value',(snapshot)=>{
            let transactionsDetails=snapshot.val().transactionsDetails
            const refundDetails={
                email: "admin@miraivizon.com",
                orderId: "",
                phone: "",
                transactionAmount: refundAmount,
                transactionDate: 0,
                transactionId: "refund_ORDER001",
                transactionMessage: "Refund For Scrreen "+refundFor,
                transactionMode: "",
                transactionStatus: "1",
            }
            transactionsDetails.push(refundDetails);
            this.usersDataRef.child(this.props.userId+"/userWalletDetails/transactionsDetails")
        .set(transactionsDetails).then(_=>{
            const notify = {
                topic: this.props.userId,
                notifyTitle:"Screen Rejected || Amount refunded",
                notifyBody:"Refund For Scrreen "+refundFor
              };
          
              axios.post(`https://nodejs-fcm-server.herokuapp.com/notify`, notify )
                .then(res => {
                  console.log(res);
                  console.log(res.data);
                })
                alert("Screen Rejected.")
        })
        })

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
                    {window.location.pathname==="/reviewed_advertisements"?
                        <div className="col-md-5">
                        {this.props.screenDetails.screenApprovedStatus===1?
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