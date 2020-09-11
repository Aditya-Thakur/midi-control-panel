import React, { Component } from 'react';
import AUX from '../../../../../hoc/Aux_';
import cloneDeep from 'lodash/cloneDeep';
import firebase from '../../../../../firebase/firebase';


class TableElements extends Component {

    constructor(props) {
        super(props);
        this.appBannersDataRef = firebase.database().ref('AppData/app_banners');
        this.onDelete = this.onDelete.bind(this);

    }

    state = {loaded: false};
  
    showImage = () => {
        this.setState({loaded: true});
    }

    onDelete(e){
        e.preventDefault();
        let localBannersList=cloneDeep(this.props.bannerList)
        localBannersList.splice(this.props.bannerIndex, 1);
        this.appBannersDataRef.set(localBannersList).then(_ => {
            alert("deleted.")
        });
    }

    render() {
        console.log(this.props.bannerIndex);
        return <AUX>
            <tr>
                <td>{parseInt(this.props.bannerIndex)+1}</td>
                <td>{this.props.bannerData.banner_name}</td>
                <td>
                    <img className="rounded mr-2 mo-mb-2" alt="200x200" width="120" src="assets/images/small/img-4.jpg" style={ this.state.loaded ? {display: "none"} : {}}/>
                    <img className="rounded mr-2 mo-mb-2" alt="200x200" width="120" src={this.props.bannerData.banner_url} data-holder-rendered="true" onLoad={this.showImage} style={ this.state.loaded ? {} : {display: "none"}}/>

                </td>
                <td> 
                    {/* <a href="#" className="waves-effect"><i className="fas fa-edit"></i><span> Edit </span></a> */}
                    <a href="#" className="waves-effect" onClick={this.onDelete}><i className="mdi mdi-delete"></i><span> Delete </span></a></td>
            </tr>
        </AUX>
    }

};

export default TableElements;
