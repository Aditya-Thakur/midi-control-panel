import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/action';
import { Link } from 'react-router-dom';

class Error_404 extends Component{

    componentDidMount() {
        if(this.props.loginpage === false)
        {
          this.props.UpdateLogin();
        }
        window.onpopstate  = (e) => {
          this.props.UpdateLoginAgain();
        }
       }
       

    render(){
        return(
                
        <AUX>
            <div className="wrapper-page">
                <div className="card">
                    <div className="card-block">

                        <div className="ex-page-content text-center">
                            <h1 className="text-dark">404</h1>
                            <h4 className="">Sorry, page not found</h4><br />

                             <Link onClick={()=> this.props.UpdateLoginAgain() } to="/"><button className="btn btn-info mb-5 waves-effect waves-light"><i className="mdi mdi-home"></i> Back to Dashboard</button></Link>
                          </div>

                    </div>
                </div>
                <div className="m-t-40 text-center">
                     <p>© {new Date().getFullYear()} Lexa. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>
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

export default connect(mapStatetoProps, mapDispatchtoProps)(Error_404);


