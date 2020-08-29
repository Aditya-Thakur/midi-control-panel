import React, { Component } from 'react';
import AUX from '../../../../hoc/Aux_';
import TableElements from './TableElement/TableElement'

class BannerTable extends Component {

    render(){
        return <AUX>
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
                                        {this.props.bannerList.length>0?
                                            this.props.bannerList.map((banner,index)=>
                                            <TableElements bannerData={banner} bannerIndex={index} bannerList={this.props.bannerList} key={index}/>)
                                            :<tr>
                                                <td>No Banner Available.</td>
                                            </tr>
                                        }
                                    </tbody>
                                </table>
        </AUX>
    }

};

export default BannerTable;