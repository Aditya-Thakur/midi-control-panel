import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import BannerTable from './BannerTable/BannerTable'
import firebase from '../../../firebase/firebase';


class ImageTemplate extends Component {

    constructor(props) {
        super(props);
        this.appBannersDataRef = firebase.database().ref('AppData/imageTemplates');
        this.state = {
            image: null,
            url: '',
            progress: 0,
            appBannersDataList: [],
        }
        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    componentDidMount() {
        this.appBannersDataRef.on('value', (snapshot) => {
            snapshot.val()!=null?
                this.setState({
                    appBannersDataList: snapshot.val()
                })
                :
                this.setState({
                    appBannersDataList: []
                });
            }
        );
    }
    handleChange = e => {
        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image }));
        }
    }
    handleUpload = (e) => {
        e.preventDefault();
        const { image } = this.state;
        const uploadTask = firebase.storage().ref(`BannerImages/${image.name}`).put(image);
        uploadTask.on('state_changed',
            (snapshot) => {
                // progrss function ....
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({ progress });
            },
            (error) => {
                // error function ....
                console.log(error);
            },
            () => {
                // complete function ....
                firebase.storage().ref('BannerImages').child(image.name).getDownloadURL().then(url => {
                    this.setState({ url });
                    const obj = {'banner_name':this.banner_name.value, 'banner_url':url};
                    this.setState({
                        appBannersDataList: [...this.state.appBannersDataList, obj]
                    });
                    this.appBannersDataRef
                    .set(this.state.appBannersDataList).then(_ => {
                        alert("Text Image Background template Added.")
                      });
                })
            }
        )
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
                            {/* <Tinycharts /> */}
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-5">
                        <div className="card m-b-20 ">
                            <div className="card-body">

                                <h4 className="mt-0 header-title">Add new Image Template</h4>
                                <p className="text-muted m-b-30 ">You can manage Image here.</p>

                                    <div className="form-group">
                                        <label>Banner Title *</label>
                                        <input type="text" className="form-control" required placeholder="Enter Banner Title" name="banner_name" ref={(c) => this.banner_name = c}/>
                                    </div>

                                    <div className="form-group">
                                        <label>Image *</label><br></br>
                                        <input type="file" className="filestyle" data-buttonname="btn-secondary" onChange={this.handleChange}/>
                                    </div>


                                    <div className="form-group button-items">
                                        <button type="submit" className="btn btn-primary waves-effect waves-light" onClick={this.handleUpload}>
                                            Submit
                                                    </button>
                                        <button type="reset" className="btn btn-secondary waves-effect m-l-5">
                                            Cancel
                                                    </button>
                                    </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-7">
                        <div className="card m-b-20">
                            <div className="card-body">
                                <h4 className="mt-0 header-title">Image List</h4>
                                <p className="text-muted m-b-30 ">You can manage image here.</p>
                                <BannerTable bannerList={this.state.appBannersDataList}/>
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
export default ImageTemplate;