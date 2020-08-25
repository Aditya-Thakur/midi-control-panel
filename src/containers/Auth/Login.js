import React, { Component } from 'react';
import AUX from '../../hoc/Aux_';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/action';
import { Link } from 'react-router-dom';
class login extends Component 
{
    componentDidMount() {
        if(this.props.loginpage === false)
        {
          this.props.UpdateLogin();
        }
        window.onpopstate  = (e) => {
          this.props.UpdateLoginAgain();
        }
       }

    render() {
        return (
            <AUX>
                <div className="wrapper-page">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="text-center m-0">
                                <Link to="/" onClick={()=> this.props.UpdateLoginAgain() } className="logo logo-admin"><img src="assets/images/midi.jpg" height="30" alt="logo" /></Link>
                            </h3>
                            <div className="p-3">
                                <h4 className="text-muted font-18 m-b-5 text-center">{!this.props.is_reg ? 'Welcome Back !' : 'Free Register'}</h4>
                                <p className="text-muted text-center">{!this.props.is_reg ? 'Sign in to continue to Mirai Vizion.' : 'Get your free fonik account now.'}</p>
                                <form className="form-horizontal m-t-30" action="index">

                                    {(this.props.is_reg) ?
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" className="form-control" id="email" placeholder="Enter email" />
                                        </div>
                                        : null}

                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" className="form-control" id="username" placeholder="Enter username" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="userpassword">Password</label>
                                        <input type="password" className="form-control" id="userpassword" placeholder="Enter password" />
                                    </div>

                                    <div className="form-group row m-t-20">

                                        <div className="col-6">
                                            {(!this.props.is_reg) ?
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                                    <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
                                                </div> : null}
                                        </div>
                                        <div className="col-6 text-right">
                                            <button className="btn btn-primary w-md waves-effect waves-light" type="submit">{!this.props.is_reg ? 'Log In' : 'Register'}</button>
                                        </div>
                                    </div>

                                    <div className="form-group m-t-10 mb-0 row">
                                        <div className="col-12 m-t-20">
                                            {(!this.props.is_reg) ?
                                                <button onClick={this.props.RecoverPass} className="text-muted btn btn-link"><i className="mdi mdi-lock"></i> Forgot your password?</button> : <p className="font-14 text-muted mb-0">By registering you agree to the Lexa <button className="text-primary btn btn-link">Terms of Use</button></p>}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="m-t-40 text-center">
                       
                        <p>© {new Date().getFullYear()} MiraiVizion. Crafted with <i className="mdi mdi-heart text-danger"></i> by <a href="https://www.nightowldevelopers.com/">NightOwl Developers</a></p>
                    </div>
                </div>
            </AUX>
        );
    }
}

const mapStatetoProps = state => {
    return {
        loginpage: state.ui_red.loginpage
    };
}

const mapDispatchtoProps = dispatch => {
    return {
        UpdateLogin: () => dispatch({ type: actionTypes.LOGINPAGE, value: true }),
        UpdateLoginAgain: () => dispatch({ type: actionTypes.LOGINPAGE, value: false })
    };
}

export default connect(mapStatetoProps, mapDispatchtoProps)(login);
