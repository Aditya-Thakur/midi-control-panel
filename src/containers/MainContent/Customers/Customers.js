import React , {Component } from 'react';
import Tinycharts from '../../../containers/Chartstypes/Tinycharts';
import AUX from '../../../hoc/Aux_';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';
import StatusButton from '../Buttons/StatusButton'

import firebase from '../../../firebase/firebase';

class Customers extends Component{

    constructor(props){
        super (props);
        this.usersDataRef=firebase.database().ref('UsersData');
        this.state={
          usersDataList:[]
        }
      }
    
      componentDidMount(){
        this.usersDataRef.on('value',(snapshot)=>{
          let rows=[];
          snapshot.forEach(userSnapshot => {
            let data = userSnapshot.val();
            
            rows.push({
              "company":data.userPersonalDetails.company,
              "name":data.userPersonalDetails.firstName+" "+data.userPersonalDetails.lastName,
              "email":data.userPersonalDetails.email,
              "active_ads":data.userAdvertisementDetails ? this.countPendingAds(data.userAdvertisementDetails.singleAdvertisementDetails) : 0,
              "rejected_ads":data.userAdvertisementDetails ? this.countRejectedAds(data.userAdvertisementDetails.singleAdvertisementDetails) : 0,
              "pending_ads": data.userAdvertisementDetails ? this.countPendingAds(data.userAdvertisementDetails.singleAdvertisementDetails) : 0,
              "invested":data.userWalletDetails.transactionsDetails?this.getTotalInvestment(data.userWalletDetails.transactionsDetails):0,
              "status":<StatusButton userAccountData={data.userPersonalDetails} userId={data.userId} key={data.userId}/>
            });
        });  
        this.setState({
            usersDataList:rows
          });
        });
      }

      countPendingAds(singleAdvertisementDetails){
          let sum=0
          singleAdvertisementDetails.forEach(advDetails=>{
              if(advDetails.advOverallStatus===2){
                sum+=1
              }
          })
          return sum;
      };
      countRejectedAds(singleAdvertisementDetails){
        let sum=0
        singleAdvertisementDetails.forEach(advDetails=>{
          sum+=Number(advDetails.rejectionCount)
        })
        return sum;
    };
    countApprovedAds(singleAdvertisementDetails){
        let sum=0
        singleAdvertisementDetails.forEach(advDetails=>{
              if(advDetails.advOverallStatus==1){
                sum+=1
              }
          })
          return sum;
    };
    getTotalInvestment(transactionsDetails){
        let sum=0
        transactionsDetails.forEach(transaction=>{
            if(transaction.transactionStatus==2){
                sum+=-(Number(transaction.transactionAmount))
            }
        });
        return sum
    }

    render(){

        console.log(this.state.usersDataList)


        let data = {
            columns: [
              {
                label: 'Name',
                field: 'name',
                sort: 'asc',
                width: 270               
              },
              {
                label: 'Email',
                field: 'email',
                sort: 'asc',
                width: 100
                
              },
              {
                label: 'Company',
                field: 'company',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Active Ads',
                field: 'active_ads',
                sort: 'asc',
                width: 100
              },
              {
                label: 'Rejected Ads',
                field: 'rejected_ads',
                sort: 'asc',
                width: 150
              },
              {
                label: 'Pending Ads',
                field: 'pending_ads',
                sort: 'asc',
                width: 100
              },
              {
                label: 'Invested',
                field: 'invested',
                sort: 'asc',
                width: 100
              },
              {
                label: 'Status',
                field: 'status',
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
                                <h4 className="page-title">Customer List</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="javascript:void(0);">Mirai Vizion</Link></li>
                                        <li className="breadcrumb-item"><Link to="javascript:void(0);">Tables</Link></li>
                                        <li className="breadcrumb-item active">Customer List</li>
                                    </ol>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="card m-b-20">
                                    <div className="card-body">

                                        <h4 className="mt-0 header-title">Registered User</h4>
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
}
export default Customers;