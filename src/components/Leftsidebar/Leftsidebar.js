import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import './Leftsidebar.css';
class leftsidebar extends Component {
    
    constructor(props) {
        super(props);
    
        this.state = {
            Tab: '', SubTab: '', MoreTab: ''
        };
    }
    setActiveTab = (tab,subtab,moretab, e) => {
         console.log(tab+"---"+subtab+"---"+moretab);
        this.setState({Tab: tab,SubTab: subtab,MoreTab: moretab});
    }

    render() {
        return (
            <div className="left side-menu">
                <Scrollbars  style={{ height: 800, Color: 'red' }} >
                    <div className="slimscroll-menu" id="remove-scroll">
                        <div id="sidebar-menu">
                            <ul className="metismenu" id="side-menu">
                                <li className="menu-title">Main</li>
                                <li>
                                    <Link to='/dashboard' className={this.state.Tab == 'dashboard' ? 'waves-effect active':'waves-effect'} onClick={this.setActiveTab.bind(this, 'dashboard','','')} >
                                        <i className="mdi mdi-view-dashboard"></i><span className="badge badge-primary badge-pill float-right">2</span> <span> Dashboard </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/customers' className={this.state.Tab == 'customers' ? 'waves-effect active':'waves-effect'} onClick={this.setActiveTab.bind(this, 'customers','','')} >
                                        <i className="mdi mdi-account-multiple"></i><span className="badge badge-primary badge-pill float-right"></span> <span> Customers </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to='javascript:void(0);'  className={this.state.Tab == 'screens' ? 'active':''} ><i className="mdi mdi-airplay"></i> <span> Screens <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span> </Link>
                                        <ul className="submenu">
                                        <li className={this.state.SubTab == 'add_screen' ? 'active':''} onClick={this.setActiveTab.bind(this, 'screens','add_screen','')}>
                                            <Link to="add_screen"><i className="mdi mdi-plus-network"></i>Add Screen</Link></li>
                                        <li className={this.state.SubTab == 'screen_list' ? 'active':''} onClick={this.setActiveTab.bind(this, 'screens','screen_list','')}>
                                            <Link to="screen_list"><i className="mdi mdi-view-list"></i>Screen List</Link></li>
                                        
                                    </ul>
                                </li>
                                <li>
                                    <Link to='javascript:void(0);'  className={this.state.Tab == 'advertisements' ? 'active':''} ><i className="mdi mdi-camera-front-variant"></i> <span> Advertisements <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span> </Link>
                                        <ul className="submenu">
                                        <li className={this.state.SubTab == 'pending_review_advertisements' ? 'active':''} onClick={this.setActiveTab.bind(this, 'advertisements','pending_review_advertisements','')}>
                                            <Link to="pending_review_advertisements"><i className="mdi mdi-lan-pending"></i>Pending Review Ads</Link></li>
                                        <li className={this.state.SubTab == 'reviewed_advertisements' ? 'active':''} onClick={this.setActiveTab.bind(this, 'advertisements','reviewed_advertisements','')}>
                                            <Link to="reviewed_advertisements"><i className="mdi mdi-chart-bubble"></i>Reviewed Ads</Link></li>
                                        
                                    </ul>
                                </li>
                                <li>
                                    <Link to='/notification' className={this.state.Tab == 'notification' ? 'waves-effect active':'waves-effect'} onClick={this.setActiveTab.bind(this, 'notification','','')} >
                                        <i className="mdi mdi-bullhorn"></i><span> Notification </span>
                                    </Link>
                                </li>
                                
                                <li>
                                    <Link to='javascript:void(0);' className={this.state.Tab == 'app_content' ? 'active':''} ><i className="mdi mdi-cellphone-android"></i><span> App Content<span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span>
                                    </Link>
                                    <ul className="submenu">
                                        <li className={this.state.SubTab == 'app_top_banner' ? 'active':''} onClick={this.setActiveTab.bind(this, 'app_content','app_top_banner','')}>
                                            <Link to="app_top_banner">App Top Banner</Link></li>
                                        <li className={this.state.SubTab == 'image_banner_template' ? 'active':''} onClick={this.setActiveTab.bind(this, 'app_content','image_banner_template','')}>
                                            <Link to="image_banner_template">Image Banner Template</Link></li>
                                       
                                    </ul>
                                </li>

                                
                              {/*  <li>
                                    <Link to='/calendar' className={this.state.Tab == 'calendar' ? 'waves-effect active':'waves-effect'} onClick={this.setActiveTab.bind(this, 'calendar','','')} >
                                        <i className="mdi mdi-calendar-check"></i><span> Calendar </span></Link>
                                </li> 

                                <li>
                                    <Link to="javascript:void(0);" className={this.state.Tab == 'email' ? 'waves-effect active':'waves-effect'} ><i className="mdi mdi-email-outline"></i><span> Email <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                                    <ul className="submenu">
                                        <li className={this.state.SubTab == 'inbox' ? 'active':''} onClick={this.setActiveTab.bind(this, 'email','inbox','')}><Link to="email-inbox">Inbox</Link></li>
                                        <li className={this.state.SubTab == 'read' ? 'active':''} onClick={this.setActiveTab.bind(this, 'email','read','')}><Link to="email-read">Email Read</Link></li>
                                        <li className={this.state.SubTab == 'compose' ? 'active':''} onClick={this.setActiveTab.bind(this, 'email','compose','')}><Link to="email-compose">Email Compose</Link></li>
                                    </ul>
                                </li> */}

                           {/*     <li className="menu-title">Components</li>

                                <li>
                                    <Link to="javascript:void(0);"  className={this.state.Tab == 'components' ? 'active':''} ><i className="mdi mdi-buffer"></i> <span> UI Elements <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span> </Link>
                                    <ul className="submenu">
                                        <li className={this.state.SubTab == 'alerts' ? 'active':''} onClick={this.setActiveTab.bind(this, 'components','alerts','')}><Link to="ui-alerts">Alerts</Link></li>
                                        <li className={this.state.SubTab == 'buttons' ? 'active':''} onClick={this.setActiveTab.bind(this, 'components','buttons','')}><Link to="ui-buttons">Buttons</Link></li>
                                        <li className={this.state.SubTab == 'badge' ? 'active':''} onClick={this.setActiveTab.bind(this, 'components','badge','')}><Link to="ui-badge">Badge</Link></li>
                                        <li className={this.state.SubTab == 'cards' ? 'active':''} onClick={this.setActiveTab.bind(this, 'components','cards','')}><Link to="ui-cards">Cards</Link></li>
                                        <li className={this.state.SubTab == 'carousel' ? 'active':''} onClick={this.setActiveTab.bind(this, 'components','carousel','')}><Link to="ui-carousel">Carousel</Link></li>
                                        <li className={this.state.SubTab == 'dropdowns' ? 'active':''} onClick={this.setActiveTab.bind(this, 'components','dropdowns','')}><Link to="ui-dropdowns">Dropdowns</Link></li>
                                        <li className={this.state.SubTab == 'grid' ? 'active':''} onClick={this.setActiveTab.bind(this, 'components','grid','')}><Link to="ui-grid">Grid</Link></li>
                                        <li className={this.state.SubTab == 'images' ? 'active':''} onClick={this.setActiveTab.bind(this, 'components','images','')}><Link to="ui-images">Images</Link></li>
                                        <li className={this.state.SubTab == 'modals' ? 'active':''} onClick={this.setActiveTab.bind(this, 'components','modals','')}><Link to="ui-modals">Modals</Link></li>
                                        <li className={this.state.SubTab == 'pagination' ? 'active':''} onClick={this.setActiveTab.bind(this, 'components','pagination','')}><Link to="ui-pagination">Pagination</Link></li>
                                        <li className={this.state.SubTab == 'popover-tooltips' ? 'active':''} onClick={this.setActiveTab.bind(this, 'components','popover-tooltips','')}><Link to="ui-popover-tooltips">Popover & Tooltips</Link></li>
                                        <li className={this.state.SubTab == 'session-timeout' ? 'active':''} onClick={this.setActiveTab.bind(this, 'components','session-timeout','')}><Link to="ui-session-timeout">Session Timeout</Link></li>
                                        <li className={this.state.SubTab == 'progressbars' ? 'active':''} onClick={this.setActiveTab.bind(this, 'components','progressbars','')}><Link to="ui-progressbars">Progress Bars</Link></li>
                                        <li className={this.state.SubTab == 'sweet-alert' ? 'active':''} onClick={this.setActiveTab.bind(this, 'components','sweet-alert','')}><Link to="ui-sweet-alert">Sweet-Alert</Link></li>
                                        <li className={this.state.SubTab == 'tabs-accordions' ? 'active':''} onClick={this.setActiveTab.bind(this, 'components','tabs-accordions','')}><Link to="ui-tabs-accordions">Tabs & Accordions</Link></li>
                                        <li className={this.state.SubTab == 'typography' ? 'active':''} onClick={this.setActiveTab.bind(this, 'components','typography','')}><Link to="ui-typography">Typography</Link></li>
                                        <li className={this.state.SubTab == 'video' ? 'active':''} onClick={this.setActiveTab.bind(this, 'components','video','')}><Link to="ui-video">Video</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <Link to="javascript:void(0);" className={this.state.Tab == 'forms' ? 'active':''} ><i className="mdi mdi-clipboard-outline"></i><span> Forms <span className="badge badge-pill badge-success float-right">6</span> </span></Link>
                                    <ul className="submenu">
                                        <li className={this.state.SubTab == 'elements' ? 'active':''} onClick={this.setActiveTab.bind(this, 'forms','elements','')}><Link to="form-elements">Form Elements</Link></li>
                                        <li className={this.state.SubTab == 'validation' ? 'active':''} onClick={this.setActiveTab.bind(this, 'forms','validation','')}><Link to="form-validation">Form Validation</Link></li>
                                        <li className={this.state.SubTab == 'advanced' ? 'active':''} onClick={this.setActiveTab.bind(this, 'forms','advanced','')}><Link to="form-advanced">Form Advanced</Link></li>
                                        <li className={this.state.SubTab == 'editors' ? 'active':''} onClick={this.setActiveTab.bind(this, 'forms','editors','')}><Link to="form-editors">Form Editors</Link></li>
                                        <li className={this.state.SubTab == 'uploads' ? 'active':''} onClick={this.setActiveTab.bind(this, 'forms','uploads','')}><Link to="form-uploads">Form Uploads</Link></li>
                                        <li className={this.state.SubTab == 'xeditable' ? 'active':''} onClick={this.setActiveTab.bind(this, 'forms','xeditable','')}><Link to="form-xeditable">Form Xeditable</Link></li>
                                        
                                    </ul>
                                </li>

                                 <li>
                                    <Link to="javascript:void(0);" className={this.state.Tab == 'chart' ? 'active':''}  ><i className="mdi mdi-chart-line"></i><span> Charts <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                                    <ul className="submenu">
                                        <li className={this.state.SubTab == 'easy' ? 'active':''} onClick={this.setActiveTab.bind(this, 'chart','easy','')}><Link to="/easy-chart">Easy Chart</Link></li>
                                        <li className={this.state.SubTab == 'canvas' ? 'active':''} onClick={this.setActiveTab.bind(this, 'chart','canvas','')}><Link to="/canvas-chart">Canvas Chart</Link></li>
                                        <li className={this.state.SubTab == 'chartjs' ? 'active':''} onClick={this.setActiveTab.bind(this, 'chart','chartjs','')}><Link to="/chartjs-chart">Chartjs Chart</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <Link to="javascript:void(0);" className={this.state.Tab == 'table' ? 'active':''} ><i className="mdi mdi-format-list-bulleted-type"></i><span> Tables <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                                    <ul className="submenu">
                                        <li className={this.state.SubTab == 'basic' ? 'active':''} onClick={this.setActiveTab.bind(this, 'table','basic','')}><Link to="tables-basic">Basic Tables</Link></li>
                                        <li className={this.state.SubTab == 'datatable' ? 'active':''} onClick={this.setActiveTab.bind(this, 'table','datatable','')}><Link to="tables-datatable">Data Table</Link></li>
                                        <li className={this.state.SubTab == 'responsive' ? 'active':''} onClick={this.setActiveTab.bind(this, 'table','responsive','')}><Link to="tables-responsive">Responsive Table</Link></li>
                                        <li className={this.state.SubTab == 'editable' ? 'active':''} onClick={this.setActiveTab.bind(this, 'table','editable','')}><Link to="tables-editable">Editable Table</Link></li>
                                       
                                   </ul>
                                </li>

                                <li>
                                    <Link to="javascript:void(0);" className={this.state.Tab == 'icon' ? 'active':''}><i className="mdi mdi-album"></i> <span> Icons  <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span></span> </Link>
                                    <ul className="submenu">
                                        <li className={this.state.SubTab == 'material' ? 'active':''} onClick={this.setActiveTab.bind(this, 'icon','material','')}><Link to="icons-material">Material Design</Link></li>
                                        <li className={this.state.SubTab == 'ion' ? 'active':''} onClick={this.setActiveTab.bind(this, 'icon','ion','')}><Link to="icons-ion">Ion Icons</Link></li>
                                        <li className={this.state.SubTab == 'fontawesome' ? 'active':''} onClick={this.setActiveTab.bind(this, 'icon','fontawesome','')}><Link to="icons-fontawesome">Font Awesome</Link></li>
                                        <li className={this.state.SubTab == 'themify' ? 'active':''} onClick={this.setActiveTab.bind(this, 'icon','themify','')}><Link to="icons-themify">Themify Icons</Link></li>
                                        <li className={this.state.SubTab == 'dripicons' ? 'active':''} onClick={this.setActiveTab.bind(this, 'icon','dripicons','')}><Link to="icons-dripicons">Dripicons</Link></li>
                                        <li className={this.state.SubTab == 'typicons' ? 'active':''} onClick={this.setActiveTab.bind(this, 'icon','typicons','')}><Link to="icons-typicons">Typicons Icons</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <Link to="javascript:void(0);" className={this.state.Tab == 'map' ? 'active':''}><i className="mdi mdi-google-maps"></i><span> Maps <span className="badge badge-pill badge-danger float-right">2</span> </span></Link>
                                    <ul className="submenu">
                                        <li className={this.state.SubTab == 'google' ? 'active':''} onClick={this.setActiveTab.bind(this, 'map','google','')}><Link to="/google-map"> Google Map</Link></li>
                                        <li className={this.state.SubTab == 'vector' ? 'active':''} onClick={this.setActiveTab.bind(this, 'map','vector','')}><Link to="/vector-map"> Vector Map</Link></li>
                                    </ul>
                                </li>

                                <li className="menu-title">Extras</li>

                                <li>
                                    <Link to="javascript:void(0);"><i className="mdi mdi-account-location"></i><span> Authentication <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                                    <ul className="submenu">
                                        <li><Link to="/login">Login</Link></li>
                                        <li><Link to="/register">Register</Link></li>
                                        <li><Link to="/recover-pass">Recover Password</Link></li>
                                        <li><Link to="/lockscreen">Lock Screen</Link></li>
                                    </ul>
                                </li>*/}

                            {/*  <li>
                                    <Link to="javascript:void(0);" className={this.state.Tab == 'pages' ? 'active':''}><i className="mdi mdi-google-pages"></i><span> Extra Pages <span className="float-right menu-arrow"><i className="mdi mdi-chevron-right"></i></span> </span></Link>
                                      <ul className="submenu">
                                        <li className={this.state.SubTab == 'timeline' ? 'active':''} onClick={this.setActiveTab.bind(this, 'pages','timeline','')}><Link to="/timeline">Timeline</Link></li>
                                        <li className={this.state.SubTab == 'invoice' ? 'active':''} onClick={this.setActiveTab.bind(this, 'pages','invoice','')}><Link to="/invoice">Invoice</Link></li>
                                        <li className={this.state.SubTab == 'directory' ? 'active':''} onClick={this.setActiveTab.bind(this, 'pages','directory','')}><Link to="/directory">Directory</Link></li>
                                        <li className={this.state.SubTab == 'blank_page' ? 'active':''} onClick={this.setActiveTab.bind(this, 'pages','blank_page','')}><Link to="/blank_page">Blank Page</Link></li>
                                        <li className={this.state.SubTab == 'error_404' ? 'active':''} onClick={this.setActiveTab.bind(this, 'pages','error_404','')}><Link to="/error_404">Error 404</Link></li>
                                        <li className={this.state.SubTab == 'error_500' ? 'active':''} onClick={this.setActiveTab.bind(this, 'pages','error_500','')}><Link to="/error_500">Error 500</Link></li>
                                    </ul>
                                </li>*/}
                            </ul>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </Scrollbars>
            </div>

        );
    }
}


export default leftsidebar;