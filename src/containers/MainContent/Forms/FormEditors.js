import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import Tinycharts from '../../Chartstypes/Tinycharts';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class FormEditors extends Component{


    render(){
       

        return(
            <AUX>
                   <div>

                        <div className="row">
                            <div className="col-sm-12">
                                <div className="page-title-box">
                                    <h4 className="page-title">Form Editors</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="#">Lexa</Link></li>
                                        <li className="breadcrumb-item"><Link to="#">Forms</Link></li>
                                        <li className="breadcrumb-item active">Form Editors</li>
                                    </ol>

                                    <Tinycharts />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="card m-b-20">
                                    <div className="card-body">

                                        <h4 className="mt-0 header-title">Tinymce wysihtml5</h4>
                                        <p className="text-muted m-b-30">Bootstrap-wysihtml5 is a javascript
                                            plugin that makes it easy to create simple, beautiful wysiwyg editors
                                            with the help of wysihtml5 and Twitter Bootstrap.</p>
                                    <Editor
                                        toolbarClassName="toolbarClassName"
                                        wrapperClassName="wrapperClassName"
                                        editorClassName="editorClassName" />

                                    </div>
                                </div>
                            </div> 
                         </div> 
                        </div>
            </AUX>
        );
    }
}

export default FormEditors;