
import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Tinycharts from '../../Chartstypes/Tinycharts';
import { Link } from 'react-router-dom';

class TablesEditable extends Component{
    render(){
        return(
            <AUX>
                <div className="row">
                            <div className="col-sm-12">
                                <div className="page-title-box">
                                <h4 className="page-title">Editable Table</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="javascript:void(0);">Lexa</Link></li>
                                        <li className="breadcrumb-item"><Link to="javascript:void(0);">Tables</Link></li>
                                        <li className="breadcrumb-item active">Editable Table</li>
                                    </ol>
                                    <Tinycharts />
                                </div>
                            </div>
                        </div>
                        
                        
                        <div className="row">
                            <div className="col-12">
                                <div className="card m-b-20">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Examples</h4>
                                        <p className="text-muted m-b-30 font-14">just start typing to edit, or move around with arrow keys or mouse clicks!</p>
        
                                        <table id="mainTable" className="table table-striped m-b-0">
                                            <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Cost</th>
                                                <th>Profit</th>
                                                <th>Fun</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Car</td>
                                                <td>100</td>
                                                <td>200</td>
                                                <td>0</td>
                                            </tr>
                                            <tr>
                                                <td>Bike</td>
                                                <td>330</td>
                                                <td>240</td>
                                                <td>1</td>
                                            </tr>
                                            <tr>
                                                <td>Plane</td>
                                                <td>430</td>
                                                <td>540</td>
                                                <td>3</td>
                                            </tr>
                                            <tr>
                                                <td>Yacht</td>
                                                <td>100</td>
                                                <td>200</td>
                                                <td>0</td>
                                            </tr>
                                            <tr>
                                                <td>Segway</td>
                                                <td>330</td>
                                                <td>240</td>
                                                <td>1</td>
                                            </tr>
                                            </tbody>
                                            <tfoot>
                                            <tr>
                                                <th><strong>TOTAL</strong></th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                            </tfoot>
                                        </table>
        
                                    </div>
                                </div>
                            </div>
                        </div>

            </AUX>
        );
    }
}

export default TablesEditable;