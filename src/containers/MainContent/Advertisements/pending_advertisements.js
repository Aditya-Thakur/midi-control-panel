import React, { Component } from 'react';
import Tinycharts from '../../Chartstypes/Tinycharts';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import ReviewCards from '../Advertisements/reviewCards/ReviewCards';

import firebase from '../../../firebase/firebase';

class pending_advertisements extends Component {

    constructor(props) {
        super(props);
        this.usersDataRef = firebase.database().ref('UsersData');
        this.state = {
            pendingAdvList: [],

        }
    }

    componentDidMount() {
        this.usersDataRef.on('value', (snapshot) => {
            let rows = [];
            snapshot.forEach(userSnapshot => {
                let data = userSnapshot.val();                
                if (data.userAdvertisementDetails != null) {
                    Object.values(data.userAdvertisementDetails.singleAdvertisementDetails).forEach(adv => {
                        let advScreens = [];
                        Object.values(adv.screens).forEach(screen => {
                            if (screen.screenApprovedStatus == 0) {
                                advScreens.push(screen)
                            }
                        })
                        rows.push({
                            "advId":adv.advId,
                            "screens":advScreens,
                            "advData":adv,
                            "userId":data.userId
                        })
                    })
                }
            });
            this.setState({
                pendingAdvList: rows
            });
        });
    }
    render() {

        // console.log(this.state.pendingAdvList)
        return (
            <AUX>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-title-box">
                            <h4 className="page-title">Pending Advertisements</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="javascript:void(0);">Mirai Vizion</Link></li>
                                <li className="breadcrumb-item"><Link to="javascript:void(0);">Advertisements</Link></li>
                                <li className="breadcrumb-item active">Pending Advertisements</li>
                            </ol>
                            {/* <Tinycharts /> */}
                        </div>
                    </div>
                </div>

                
                <ReviewCards
                 reviewPendingAdvList={this.state.pendingAdvList} 
                />
            </AUX>
        );
    }
}
export default pending_advertisements;