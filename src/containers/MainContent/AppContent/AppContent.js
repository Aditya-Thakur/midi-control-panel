import React, { Component } from 'react';
import Tinycharts from '../../Chartstypes/Tinycharts';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

import firebase from '.../../../src/firebase';


class AppContent extends Component {

    constructor(props) {
        super(props);
        this.appBannersDataRef = firebase.database().ref('AppData/app_banners');
        this.state = {
            appBannersDataList: [],

        }
    }

    componentDidMount() {
        this.appBannersDataRef.on('value', (snapshot) => {
            this.setState({
                appBannersDataList: snapshot.val()
            });
        });
    }
    render() {
        console.log(this.state.appBannersDataList);
        return (
            <AUX>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="page-title-box">
                            <h4 className="page-title">Application Content</h4>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="javascript:void(0);">Mirai Vizion</Link></li>
                                <li className="breadcrumb-item active">Application Content</li>
                            </ol>
                            <Tinycharts />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-5">
                        <div className="card m-b-20 ">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">ADD NEW BANNER</h4>
                                <p className="text-muted m-b-30 ">You can manage Image here.</p>

                                <form className="" action="#">
                                    <div className="form-group">
                                        <label>Banner Title *</label>
                                        <input type="text" className="form-control" required placeholder="Enter Banner Title" />
                                    </div>

                                    <div className="form-group">
                                        <label>Image *</label><br></br>
                                        <input type="file" className="filestyle" data-buttonname="btn-secondary" />
                                    </div>


                                    <div className="form-group button-items">
                                        <button type="submit" className="btn btn-primary waves-effect waves-light">
                                            Submit
                                                    </button>
                                        <button type="reset" className="btn btn-secondary waves-effect m-l-5">
                                            Cancel
                                                    </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-7">
                        <div className="card m-b-20">
                            <div className="card-body">
                                <h4 className="mt-0 header-title">Image List</h4>
                                <p className="text-muted m-b-30 ">You can manage image here.</p>
                                <table id="datatable" className="table table-vertical mb-1 dt-responsive nowrap">
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Title</th>
                                            <th>Image</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Banner 1</td>
                                            <td><img className="rounded mr-2 mo-mb-2" alt="200x200" width="120" src="assets/images/small/img-4.jpg" data-holder-rendered="true" /></td>

                                            <td><button type="button" className="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                <button type="button" className="btn btn-danger btn-sm waves-effect waves-light">Delete</button></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>Banner 2</td>
                                            <td><img className="rounded mr-2 mo-mb-2" alt="200x200" width="120" src="assets/images/small/img-4.jpg" data-holder-rendered="true" /></td>
                                            <td> <a href="#" className="waves-effect"><i className="fas fa-edit"></i><span> Edit </span></a>
                                                <a href="#" className="waves-effect"><i className="mdi mdi-delete"></i><span> Delete </span></a></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>Banner 3</td>
                                            <td><img className="rounded mr-2 mo-mb-2" alt="200x200" width="120" src="assets/images/small/img-4.jpg" data-holder-rendered="true" /></td>
                                            <td> <a href="#" className="waves-effect"><i className="fas fa-edit"></i><span> Edit </span></a>
                                                <a href="#" className="waves-effect"><i className="mdi mdi-delete"></i><span> Delete </span></a></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>Banner 4</td>
                                            <td><img className="rounded mr-2 mo-mb-2" alt="200x200" width="120" src="assets/images/small/img-4.jpg" data-holder-rendered="true" /></td>
                                            <td> <a href="#" className="waves-effect"><i className="fas fa-edit"></i><span> Edit </span></a>
                                                <a href="#" className="waves-effect"><i className="mdi mdi-delete"></i><span> Delete </span></a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            <div>
        </div>


        </AUX>
        );
    }
}
export default AppContent;