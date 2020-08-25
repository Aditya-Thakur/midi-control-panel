import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Tinycharts from '../../Chartstypes/Tinycharts';
import { Link } from 'react-router-dom';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class email_compose extends Component{
    render(){
        return(
            <AUX>
                <div className="row">
                            <div className="col-sm-12">
                                <div className="page-title-box">
                                    <h4 className="page-title">Email Compose</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/">Lexa</Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Email</Link></li>
                                        <li className="breadcrumb-item active">Email Compose</li>
                                    </ol>
                                    <Tinycharts />
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-12">
                                
                                <div className="email-leftbar card">
                                    <Link to="email-compose" className="btn btn-danger btn-rounded btn-custom btn-block waves-effect waves-light">Compose</Link>
        
                                    <div className="mail-list m-t-20">
                                        <Link to="#" className="active">Inbox <span className="ml-1">(18)</span></Link>
                                        <Link to="#">Starred</Link>
                                        <Link to="#">Important</Link>
                                        <Link to="#">Draft</Link>
                                        <Link to="#">Sent Mail</Link>
                                        <Link to="#">Trash</Link>
                                    </div>
        
        
                                    <h6 className="m-t-30">Labels</h6>
        
                                    <div className="mail-list m-t-20">
                                        <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-info float-right mt-1 m-r-10"></span>Theme Support</Link>
                                        <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-warning float-right mt-1 m-r-10"></span>Freelance</Link>
                                        <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-primary float-right mt-1 m-r-10"></span>Social</Link>
                                        <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-danger float-right mt-1 m-r-10"></span>Friends</Link>
                                        <Link to="#"><span className="mdi mdi-arrow-right-drop-circle text-success float-right mt-1 m-r-10"></span>Family</Link>
                                    </div>
        
                                    <h6 className="m-t-30">Chat</h6>
        
                                    <div className="m-t-20">
                                        <Link to="#" className="media">
                                            <img className="d-flex mr-3 rounded-circle" src="assets/images/users/user-2.jpg" alt="Generic" height="36" />
                                            <div className="media-body chat-user-box">
                                                <p className="user-title m-0">Scott Median</p>
                                                <p className="text-muted">Hello</p>
                                            </div>
                                        </Link>
        
                                        <Link to="#" className="media">
                                            <img className="d-flex mr-3 rounded-circle" src="assets/images/users/user-3.jpg" alt="Generic" height="36" />
                                            <div className="media-body chat-user-box">
                                                <p className="user-title m-0">Julian Rosa</p>
                                                <p className="text-muted">What about our next..</p>
                                            </div>
                                        </Link>
        
                                        <Link to="#" className="media">
                                            <img className="d-flex mr-3 rounded-circle" src="assets/images/users/user-4.jpg" alt="Generic" height="36" />
                                            <div className="media-body chat-user-box">
                                                <p className="user-title m-0">David Medina</p>
                                                <p className="text-muted">Yeah everything is fine</p>
                                            </div>
                                        </Link>
        
                                        <Link to="#" className="media">
                                            <img className="d-flex mr-3 rounded-circle" src="assets/images/users/user-6.jpg" alt="Generic" height="36" />
                                            <div className="media-body chat-user-box">
                                                <p className="user-title m-0">Jay Baker</p>
                                                <p className="text-muted">Wow that's great</p>
                                            </div>
                                        </Link>
        
                                    </div>
                                </div>
                                <div className="email-rightbar mb-3">
        
                                    <div className="card">
                                        <div className="card-body">
        
                                            <form>
                                                <div className="form-group">
                                                    <input type="email" className="form-control" placeholder="To" />
                                                </div>
        
                                                <div className="form-group">
                                                    <input type="text" className="form-control" placeholder="Subject" />
                                                </div>

                                                <Editor
                                                toolbarClassName="toolbarClassName"
                                                wrapperClassName="wrapperClassName"
                                                editorClassName="editorClassName" /> 

                                                <br></br>
        
                                                <div className="btn-toolbar form-group mb-0">
                                                    <div className="">
                                                        <button type="button" className="btn btn-success waves-effect waves-light m-r-5"><i className="far fa-save"></i></button>
                                                        <button type="button" className="btn btn-success waves-effect waves-light m-r-5"><i className="far fa-trash-alt"></i></button>
                                                        <button className="btn btn-primary waves-effect waves-light"> <span>Send</span> <i className="fab fa-telegram-plane m-l-10"></i> </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
            
            </AUX>
        );
    }
}

export default email_compose;