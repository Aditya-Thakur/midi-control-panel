import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import Tinycharts from '../../Chartstypes/Tinycharts';
import { Link } from 'react-router-dom';

class ui_buttons extends Component{
    render(){
        return(
            <AUX>
                <div className="row">
                            <div className="col-sm-12">
                                <div className="page-title-box">
                                <h4 className="page-title">Buttons</h4>
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="javascript:void(0);">Lexa</Link></li>
                                        <li className="breadcrumb-item"><Link to="javascript:void(0);">UI Elements</Link></li>
                                        <li className="breadcrumb-item active">Buttons</li>
                                    </ol>
            
                                    <Tinycharts />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card m-b-30">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Examples</h4>
                                        <p className="text-muted m-b-30 font-14">Bootstrap includes six predefined button styles, each serving its own semantic purpose.</p>
        
                                        <div className="button-items">
                                            <button type="button" className="btn btn-primary waves-effect waves-light">Primary</button>
                                            <button type="button" className="btn btn-secondary waves-effect">Secondary</button>
                                            <button type="button" className="btn btn-success waves-effect waves-light">Success</button>
                                            <button type="button" className="btn btn-info waves-effect waves-light">Info</button>
                                            <button type="button" className="btn btn-warning waves-effect waves-light">Warning</button>
                                            <button type="button" className="btn btn-danger waves-effect waves-light">Danger</button>
                                            <button type="button" className="btn btn-dark waves-effect waves-light">Dark</button>
                                            <button type="button" className="btn btn-link waves-effect">Link</button>
                                            <button type="button" className="btn btn-light waves-effect">Light</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <div className="col-lg-6">
                                <div className="card m-b-30">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Outline buttons</h4>
                                        <p className="text-muted m-b-30 font-14">Replace the default modifier classes with
                                            the <code className="highlighter-rouge">.btn-outline-*</code> ones to remove
                                            all background images and colors on any button.</p>
        
                                        <div className="button-items">
                                            <button type="button" className="btn btn-outline-primary waves-effect waves-light">Primary</button>
                                            <button type="button" className="btn btn-outline-secondary waves-effect">Secondary</button>
                                            <button type="button" className="btn btn-outline-success waves-effect waves-light">Success</button>
                                            <button type="button" className="btn btn-outline-info waves-effect waves-light">Info</button>
                                            <button type="button" className="btn btn-outline-warning waves-effect waves-light">Warning</button>
                                            <button type="button" className="btn btn-outline-danger waves-effect waves-light">Danger</button>
                                            <button type="button" className="btn btn-outline-dark waves-effect waves-light">Dark</button>
                                            <button type="button" className="btn btn-outline-light waves-effect">Light</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
        
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card m-b-30">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Button tags</h4>
                                        <p className="text-muted m-b-30 font-14">The <code className="highlighter-rouge">.btn</code>
                                            classes are designed to be used with the <code
                                                    className="highlighter-rouge">&lt;button&gt;</code> element.
                                            However, you can also use these classes on <code
                                                    className="highlighter-rouge">&lt;a&gt;</code> or <code
                                                    className="highlighter-rouge">&lt;input&gt;</code> elements (though
                                            some browsers may apply a slightly different rendering).</p>
        
                                        <div className="button-items">
                                            <a className="btn btn-primary waves-effect waves-light" role="button">Link</a>
                                            <button className="btn btn-success waves-effect waves-light" type="submit">Button</button>
                                            <input className="btn btn-info" type="button" value="Input"/>
                                            <input className="btn btn-danger" type="submit" value="Submit"/>
                                            <input className="btn btn-warning" type="reset" value="Reset"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <div className="col-lg-6">
                                <div className="card m-b-30">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Sizes</h4>
                                        <p className="text-muted m-b-30 font-14">Fancy larger or smaller buttons? Add
                                            <code className="highlighter-rouge">.btn-lg</code> or <code
                                                    className="highlighter-rouge">.btn-sm</code> for additional sizes.
                                        </p>
        
                                        <div className="button-items">
                                            <button type="button" className="btn btn-primary btn-lg waves-effect waves-light">Large button</button>
                                            <button type="button" className="btn btn-secondary btn-lg waves-effect">Large button</button>
                                            <button type="button" className="btn btn-primary btn-sm waves-effect waves-light">Small button</button>
                                            <button type="button" className="btn btn-secondary btn-sm waves-effect">Small button</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card m-b-30">
                                    <div className="card-body">
    
                                        <h4 className="mt-0 header-title">Block Buttons</h4>
                                        <p className="text-muted m-b-30 font-14">Create block level buttons—those that
                                            span the full width of a parent—by adding <code
                                                    className="highlighter-rouge">.btn-block</code>.</p>
        
                                        <div className="button-items">
                                            <button type="button" className="btn btn-primary btn-lg btn-block waves-effect waves-light">Block level button</button>
                                            <button type="button" className="btn btn-secondary btn-sm btn-block waves-effect">Block level button</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
        
                            <div className="col-lg-6">
                                <div className="card m-b-30">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Toggle states</h4>
                                        <p className="text-muted m-b-30 font-14">Add <code className="highlighter-rouge">data-toggle="button"</code>
                                            to toggle a button’s <code className="highlighter-rouge">active</code>
                                            state. If you’re pre-toggling a button, you must manually add the <code
                                                    className="highlighter-rouge">.active</code> class
                                            <strong>and</strong> <code
                                                    className="highlighter-rouge">aria-pressed="true"</code> to the
                                            <code className="highlighter-rouge">&lt;button&gt;</code>.
                                        </p>
        
                                        <div className="button-items">
                                            <button type="button" className="btn btn-primary waves-effect waves-light" data-toggle="button" aria-pressed="false">
                                                Single toggle
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card m-b-30">
                                    <div className="card-body">
                                        <h4 className="mt-0 header-title">Checkbox buttons</h4>
                                        <p className="text-muted m-b-30 font-14">Bootstrap’s <code
                                                className="highlighter-rouge">.button</code> styles can be applied to
                                            other elements, such as <code className="highlighter-rouge">
                                                &lt;label&gt;</code>s, to provide checkbox or radio style button
                                            toggling. Add <code
                                                    className="highlighter-rouge">data-toggle="buttons"</code> to a
                                            <code className="highlighter-rouge">.btn-group</code> containing those
                                            modified buttons to enable toggling in their respective styles.</p>
                                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label className="btn btn-secondary active">
                                                <input type="checkbox" checked /> Checked-1
                                            </label>
                                            <label className="btn btn-secondary">
                                                <input type="checkbox" /> Checked-2
                                            </label>
                                            <label className="btn btn-secondary">
                                                <input type="checkbox" /> Checked-3
                                            </label>
                                        </div>
            
                                    </div>
                                </div>
                            </div>
        
                            <div className="col-lg-6">
                                <div className="card m-b-30">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Radio buttons</h4>
                                        <p className="text-muted m-b-30 font-14">Bootstrap’s <code
                                                className="highlighter-rouge">.button</code> styles can be applied to
                                            other elements, such as <code className="highlighter-rouge">
                                                &lt;label&gt;</code>s, to provide checkbox or radio style button
                                            toggling. Add <code
                                                    className="highlighter-rouge">data-toggle="buttons"</code> to a
                                            <code className="highlighter-rouge">.btn-group</code> containing those
                                            modified buttons to enable toggling in their respective styles.</p>
                                        <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                            <label className="btn btn-primary active">
                                                <input type="radio" name="options" id="option1" checked /> Active
                                            </label>
                                            <label className="btn btn-primary">
                                                <input type="radio" name="options" id="option2" /> Radio
                                            </label>
                                            <label className="btn btn-primary">
                                                <input type="radio" name="options" id="option3" /> Radio
                                            </label>
                                        </div>
            
                                    </div>
                                </div>
                            </div>
                        </div>
        
        
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card m-b-30">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Button group</h4>
                                        <p className="text-muted m-b-30 font-14">Wrap a series of buttons with <code
                                                className="highlighter-rouge">.btn</code> in <code
                                                className="highlighter-rouge">.btn-group</code>.</p>
        
                                        <div className="btn-group" role="group" aria-label="Basic example">
                                            <button type="button" className="btn btn-secondary">Left</button>
                                            <button type="button" className="btn btn-secondary">Middle</button>
                                            <button type="button" className="btn btn-secondary">Right</button>
                                        </div>
        
                                    </div>
                                </div>
                            </div>
        
                            <div className="col-lg-6">
                                <div className="card m-b-30">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Button toolbar</h4>
                                        <p className="text-muted m-b-30 font-14">Combine sets of button groups into
                                            button toolbars for more complex components. Use utility classes as
                                            needed to space out groups, buttons, and more.</p>
        
                                        <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                            <div className="btn-group mr-2" role="group" aria-label="First group">
                                                <button type="button" className="btn btn-secondary">1</button>
                                                <button type="button" className="btn btn-secondary">2</button>
                                                <button type="button" className="btn btn-secondary">3</button>
                                                <button type="button" className="btn btn-secondary">4</button>
                                            </div>
                                            <div className="btn-group mr-2" role="group" aria-label="Second group">
                                                <button type="button" className="btn btn-secondary">5</button>
                                                <button type="button" className="btn btn-secondary">6</button>
                                                <button type="button" className="btn btn-secondary">7</button>
                                            </div>
                                            <div className="btn-group" role="group" aria-label="Third group">
                                                <button type="button" className="btn btn-secondary">8</button>
                                            </div>
                                        </div>
        
        
                                    </div>
                                </div>
                            </div>
                        </div>
        
        
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card m-b-30">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Sizing</h4>
                                        <p className="text-muted m-b-30 font-14">Instead of applying button sizing
                                            classes to every button in a group, just add <code
                                                    className="highlighter-rouge">.btn-group-*</code> to each <code
                                                    className="highlighter-rouge">.btn-group</code>, including each one
                                            when nesting multiple groups.</p>
        
                                        <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                                            <button type="button" className="btn btn-secondary">Left</button>
                                            <button type="button" className="btn btn-secondary">Middle</button>
                                            <button type="button" className="btn btn-secondary">Right</button>
                                        </div>
        
                                        <br/>
        
                                        <div className="btn-group m-t-10" role="group" aria-label="Basic example">
                                            <button type="button" className="btn btn-secondary">Left</button>
                                            <button type="button" className="btn btn-secondary">Middle</button>
                                            <button type="button" className="btn btn-secondary">Right</button>
                                        </div>
        
                                        <br/>
        
                                        <div className="btn-group btn-group-sm m-t-10" role="group" aria-label="Basic example">
                                            <button type="button" className="btn btn-secondary">Left</button>
                                            <button type="button" className="btn btn-secondary">Middle</button>
                                            <button type="button" className="btn btn-secondary">Right</button>
                                        </div>
        
                                    </div>
                                </div>
                            </div>
        
                            <div className="col-lg-6">
                                <div className="card m-b-30">
                                    <div className="card-body">
        
                                        <h4 className="mt-0 header-title">Vertical variation</h4>
                                        <p className="text-muted m-b-30 font-14">Make a set of buttons appear vertically
                                            stacked rather than horizontally. Split button dropdowns are not
                                            supported here.</p>
        
                                        <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                                            <button type="button" className="btn btn-secondary">Button</button>
                                            <div className="btn-group" role="group">
                                                <button id="btnGroupVerticalDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    Dropdown
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="btnGroupVerticalDrop1">
                                                    <a className="dropdown-item" href="#">Dropdown link</a>
                                                    <a className="dropdown-item" href="#">Dropdown link</a>
                                                </div>
                                            </div>
                                            <button type="button" className="btn btn-secondary">Button</button>
                                            <button type="button" className="btn btn-secondary">Button</button>
                                        </div>
        
        
                                    </div>
                                </div>
                            </div>
                        </div> 
                       
            </AUX>
        );
    }
}

export default ui_buttons;