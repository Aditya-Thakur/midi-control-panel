import React , {Component } from 'react';
import Tinycharts from '../../Chartstypes/Tinycharts';
import AUX from '../../../hoc/Aux_';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';

import firebase from '.../../../src/firebase';

class screen_list extends Component{
  constructor(props){
    super (props);
    this.usersDataRef=firebase.database().ref('AvailableLocations');
    this.state={
      usersDataList:[],

    }
  }

  componentDidMount(){
    this.usersDataRef.on('value',(snapshot)=>{
      let rows=[];
      snapshot.forEach(userSnapshot => {
        let data = userSnapshot.val();
        Object.values(data.screenData).forEach(screen=>{
          rows.push(
            screen
          );
        })
        
    });  
    this.setState({
        usersDataList:rows
      });
    });
  }

render(){

    console.log(this.state.usersDataList)


    let data = {
        columns: [
          {
            label: 'Screen_id',
            field: 'screenId',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Screen Location',
            field: 'screenLocation',
            sort: 'asc',
            width: 270
          },
          {
            label: 'Screen Status',
            field: 'screenStatus',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Screen Number',
            field: 'screen_number',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Screen Price',
            field: 'screenPrice',
            sort: 'asc',
            width: 150
          },
          {
            label: 'Action',
            field: 'action',
            sort: 'asc',
            width: 100
          }
        ],
        rows: this.state.usersDataList
    };
    return(
        <AUX>

            <div className="row">
                        <div className="col-sm-12">
                            <div className="page-title-box">
                            <h4 className="page-title">Screenboards List</h4>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="javascript:void(0);">Mirai Vizion</Link></li>
                                    <li className="breadcrumb-item"><Link to="javascript:void(0);">Tables</Link></li>
                                    <li className="breadcrumb-item active">Screenboards List</li>
                                </ol>
                                <Tinycharts />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="card m-b-20">
                                <div className="card-body">
                                    <h4 className="mt-0 header-title">Available Screens</h4>
                                    <p className="text-muted m-b-30 font-14">Creating ad content which implies knowledge of personally identifiable information or sensitive information about your customers ; Using a customer list that targets an overly narrow or specific audience.
                                    </p>
                                    <MDBDataTable
                                        striped
                                        bordered
                                        hover
                                        data={data}
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
        </AUX>
    );
}
};
export default screen_list;