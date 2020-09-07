// add useContext
import React, {useContext} from 'react';
import {firebaseAuth} from '../../provider/AuthProvider'

const Signin = () => {


  const {handleSignin, inputs, setInputs, errors} = useContext(firebaseAuth)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('handleSubmit')
    handleSignin()
    
  }
  const handleChange = e => {
    const {name, value} = e.target
    console.log(inputs)
    setInputs(prev => ({...prev, [name]: value}))
  }

  return (
    <div className="wrapper-page">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="text-center m-0">
                                    <div to="/" className="logo logo-admin"><img src="assets/images/midi.jpg" height="30" alt="logo" /></div>
                                </h3>
                                <div className="p-3">
                                    <h4 className="text-muted font-18 m-b-5 text-center">Welcome Back !</h4>
                                    <p className="text-muted text-center">Sign in to continue to Mirai Vizion.</p>
                                    <form className="form-horizontal m-t-30" onSubmit={handleSubmit}>
                                    {errors.length > 0 ? errors.map(error => <p style={{color: 'red'}}>{error}</p> ) : null}

                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" onChange={handleChange} value={inputs.email}/>
                                            </div>
    
    
                                        <div className="form-group">
                                            <label htmlFor="userpassword">Password</label>
                                            <input type="password" className="form-control" id="userpassword"  name="password" placeholder="Enter password" onChange={handleChange} value={inputs.password}/>
                                        </div>
    
                                        <div className="form-group row m-t-20">
    
                                            <div className="col-6">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                                        <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
                                                    </div>
                                            </div>
                                            <div className="col-6 text-right">
                                                <button className="btn btn-primary w-md waves-effect waves-light" type="submit" >Log In</button>
                                            </div>
                                        </div>
    
                                        <div className="form-group m-t-10 mb-0 row">
                                            <div className="col-12 m-t-20">
                                               <button className="text-muted btn btn-link"><i className="mdi mdi-lock"></i> Forgot your password?</button>
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
  );
};

export default Signin;