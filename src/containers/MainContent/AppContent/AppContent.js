import React , {Component } from 'react';
import Tinycharts from '../../Chartstypes/Tinycharts';
import AUX from '../../../hoc/Aux_';
import { MDBDataTable } from 'mdbreact';
import { Link } from 'react-router-dom';

import firebase from '.../../../src/firebase';

class AppContent extends Component{
  render(){
        return(
            <AUX>
                <div className="row">
                            <div className="col-sm-12">
                                <div className="page-title-box">
                               <h4 class="page-title">Application Details</h4>
                                    
                                    
                                </div>
                            </div>
                        </div>
                        
                         <div class="row">
                            <div class="col-lg-5">
                                <div class="card m-b-20 ">
                                    <div class="card-body">
        
                                        <h4 class="mt-0 header-title">ADD NEW BANNER</h4>
                                        <p class="text-muted m-b-30 ">You can manage Image here.</p>
        
                                        <form class="" action="#">
                                            <div class="form-group">
                                                <label>Banner Title *</label>
                                                <input type="text" class="form-control" required placeholder="Enter Banner Title"/>
                                            </div>
                                        
                                                <div class="form-group">
                                                <label>Image *</label><br></br>
                                                <input type="file" class="filestyle" data-buttonname="btn-secondary"/>
                                            </div>
                                            
                                        
                                            <div class="form-group">
                                                <div>
                                                    <button type="submit" class="btn btn-primary waves-effect waves-light">
                                                        Submit
                                                    </button>
                                                    <button type="reset" class="btn btn-secondary waves-effect m-l-5">
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
        
                                    </div>
                                </div>
                   </div>
             
            
            
                     
            <div class="col-lg-7">
                                <div class="card m-b-20">
                                    <div class="card-body">
        
                                        <h4 class="mt-0 header-title">Image List</h4>
                                        <p class="text-muted m-b-30 ">You can manage image here.</p>
        
                                       
                                       
            
            
            
            
                                        <table id="datatable" class="table table-vertical mb-1 dt-responsive nowrap">
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
                                                <td><img className="rounded mr-2 mo-mb-2" alt="200x200" width="120" src="assets/images/small/img-4.jpg" data-holder-rendered="true"/></td>
                                                
                                                <td><button type="button" class="btn btn-secondary btn-sm waves-effect waves-light">Edit</button>
                                                    <button type="button" class="btn btn-danger btn-sm waves-effect waves-light">Delete</button></td>                          
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Banner 2</td>
                                                <td><img className="rounded mr-2 mo-mb-2" alt="200x200" width="120" src="assets/images/small/img-4.jpg" data-holder-rendered="true"/></td>
                                                <td> <a href="#" class="waves-effect"><i class="fas fa-edit"></i><span> Edit </span></a> 
                                                <a href="#" class="waves-effect"><i class="mdi mdi-delete"></i><span> Delete </span></a></td>                 
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Banner 3</td>
                                                <td><img className="rounded mr-2 mo-mb-2" alt="200x200" width="120" src="assets/images/small/img-4.jpg" data-holder-rendered="true"/></td>
                                               <td> <a href="#" class="waves-effect"><i class="fas fa-edit"></i><span> Edit </span></a> 
                                                <a href="#" class="waves-effect"><i class="mdi mdi-delete"></i><span> Delete </span></a></td>                   
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Banner 4</td>
                                                <td><img className="rounded mr-2 mo-mb-2" alt="200x200" width="120" src="assets/images/small/img-4.jpg" data-holder-rendered="true"/></td>
                                                <td> <a href="#" class="waves-effect"><i class="fas fa-edit"></i><span> Edit </span></a> 
                                                <a href="#" class="waves-effect"><i class="mdi mdi-delete"></i><span> Delete </span></a></td>     
                                                   
                                                          
                                            </tr>
                                        
                                         
                                            </tbody>
                                        </table>
        
            
            
            
            
            
            
            
            
            
        
                                    </div>
                                </div>
                           </div>
                 </div>
            <div></div>
        
        
            </AUX>
        );
    }
}
export default AppContent;