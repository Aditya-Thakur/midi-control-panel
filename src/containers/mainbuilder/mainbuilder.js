import React , { Component } from 'react';
import Calendar from '../MainContent/Calendar/Calendar';
import Dashboard from '../MainContent/Dashboard/Dashboard';
import Customers from '../MainContent/Customers/Customers';
import Notification from '../MainContent/Notification/Notification';
import AppContent from '../MainContent/AppContent/AppContent';
import { Route,Switch } from 'react-router-dom';
import add_screen from '../MainContent/Screens/add_screen';
import screen_list from '../MainContent/Screens/screen_list';
import pending_advertisements from '../MainContent/Advertisements/pending_advertisements';
import approved_advertisements from '../MainContent/Advertisements/approved_advertisements';
import email_inbox from '../MainContent/Email/email_inbox';
import email_compose from '../MainContent/Email/email_compose';
import email_read from '../MainContent/Email/email_read';
import login from '../Auth/Login';
import register from '../Auth/Register';
import recover_pass from '../Auth/Recover_pass';
import lockscreen from '../Auth/Lockscreen';
import timeline from '../MainContent/Extras/Timeline';
import invoice from '../MainContent/Extras/Invoice';
import directory from '../MainContent/Extras/Directory';
import blank_page from '../MainContent/Extras/Blankpage';
import error_404 from '../MainContent/Extras/error_404';
import error_500 from '../MainContent/Extras/error_500';

import EasyChart from '../MainContent/Charts/EasyChart';
import CanvasChart from '../MainContent/Charts/CanvasCharts';
import ChartjsChart from '../MainContent/Charts/ChartjsChart';

import UiAlerts from '../MainContent/UiElements/ui_alerts';
import UiButtons from '../MainContent/UiElements/ui_buttons';
import UiBadges from '../MainContent/UiElements/ui-badge';
import UiCards from '../MainContent/UiElements/ui-cards';
import UiCarousel from '../MainContent/UiElements/ui-carousel';
import UiDropdowns from '../MainContent/UiElements/ui-dropdowns';
import UiGgrid from '../MainContent/UiElements/ui-grid';
import UiImages from '../MainContent/UiElements/ui-images';
import UiModals from '../MainContent/UiElements/ui-modals';
import UiPagination from '../MainContent/UiElements/ui-pagination';
import UiPopoverTooltips from '../MainContent/UiElements/ui-popover-tooltips';
import UiProgressbars from '../MainContent/UiElements/ui-progressbars';
import UiRangeslider from '../MainContent/UiElements/ui-rangeslider';
import UiSessionTimeout from '../MainContent/UiElements/ui-session-timeout';
import UiSweetAlert from '../MainContent/UiElements/ui-sweet-alert';
import UiTabsAccordions from '../MainContent/UiElements/ui-tabs-accordions';
import UiTypography from '../MainContent/UiElements/ui-typography';
import UiVideo from '../MainContent/UiElements/ui-video';
import GoogleMap from '../MainContent/Maps/googlemap';
import VectorMap from '../MainContent/Maps/vectormaps';
import FormAdvanced from '../MainContent/Forms/FormAdvanced';
import FormValidation from '../MainContent/Forms/FormValidation';
import FormElements from '../MainContent/Forms/FormElements';
import FormEditors from '../MainContent/Forms/FormEditors';
import FormUploads from '../MainContent/Forms/FormUploads';
import FormXeditable from '../MainContent/Forms/FormXeditable';

import TablesBasic from '../MainContent/Tables/TablesBasic';
import TablesResponsive from '../MainContent/Tables/TablesResponsive';
import TablesDatatable from '../MainContent/Tables/TablesDatatable';
import TablesEditDatatable from '../MainContent/Tables/TablesEditDatatable';

import IconsDripicons from '../MainContent/Icons/IconsDripicons';
import IconsTypicons from '../MainContent/Icons/IconsTypicons';
import IconsThemify from '../MainContent/Icons/IconsThemify';
import IconsMaterial from '../MainContent/Icons/IconsMaterial';
import IconsIon from '../MainContent/Icons/IconsIon';
import IconsFontawesome from '../MainContent/Icons/IconsFontawesome';

class mainbuilder extends Component{
    render(){

        return(
                <Switch>  
                    <Route path="/calendar" component={Calendar} />
                    <Route path="/email-inbox" component={email_inbox} />
                    <Route path="/email-read" component={email_read} />
                    <Route path="/email-compose" component={email_compose} />
                    <Route path="/login" component={login} />
                    <Route path="/register" component={register} />
                    <Route path="/recover-pass" component={recover_pass} />
                    <Route path="/lockscreen" component={lockscreen} />
                    <Route path="/timeline" component={timeline} />
                    <Route path="/invoice" component={invoice} />
                    <Route path="/directory" component={directory} />
                    <Route path="/blank_page" component={blank_page} />
                    <Route path="/error_404" component={error_404} />
                    <Route path="/error_500" component={error_500} />
                    
                    <Route path="/easy-chart" component={EasyChart} />
                    <Route path="/canvas-chart" component={CanvasChart} />
                    <Route path="/chartjs-chart" component={ChartjsChart} />

                    <Route path="/ui-alerts" component={UiAlerts} />
                    <Route path="/ui-buttons" component={UiButtons} />
                    <Route path="/ui-badge" component={UiBadges} />
                    <Route path="/ui-cards" component={UiCards} />
                    <Route path="/ui-carousel" component={UiCarousel} />
                    <Route path="/ui-dropdowns" component={UiDropdowns} />
                    <Route path="/ui-grid" component={UiGgrid} />
                    <Route path="/ui-images" component={UiImages} />
                    <Route path="/ui-modals" component={UiModals} />
                    <Route path="/ui-pagination" component={UiPagination} />
                    <Route path="/ui-popover-tooltips" component={UiPopoverTooltips} />
                    <Route path="/ui-progressbars" component={UiProgressbars} />
                    <Route path="/ui-rangeslider" component={UiRangeslider} />
                    <Route path="/ui-session-timeout" component={UiSessionTimeout} />
                    <Route path="/ui-sweet-alert" component={UiSweetAlert} />
                    <Route path="/ui-tabs-accordions" component={UiTabsAccordions} />
                    <Route path="/ui-typography" component={UiTypography} />
                    <Route path="/ui-video" component={UiVideo} />
                    <Route path="/google-map" component={GoogleMap} />
                    <Route path="/vector-map" component={VectorMap} />
                    <Route path="/form-advanced" component={FormAdvanced} />
                    <Route path="/form-validation" component={FormValidation} />
                    <Route path="/form-elements" component={FormElements} />
                    <Route path="/form-editors" component={FormEditors} />
                    <Route path="/form-uploads" component={FormUploads} />
                    <Route path="/form-xeditable" component={FormXeditable} />

                    <Route path="/tables-basic" component={TablesBasic} />
                    <Route path="/tables-datatable" component={TablesDatatable} />
                    <Route path="/tables-responsive" component={TablesResponsive} />
                    <Route path="/tables-editable" component={TablesEditDatatable} />
                    
                    <Route path="/icons-dripicons" component={IconsDripicons} />
                    <Route path="/icons-typicons" component={IconsTypicons} />
                    <Route path="/icons-themify" component={IconsThemify} />
                    <Route path="/icons-material" component={IconsMaterial} />
                    <Route path="/icons-ion" component={IconsIon} />
                    <Route path="/icons-fontawesome" component={IconsFontawesome} />
                    <Route path="/customers" component={Customers}/>
                    <Route path="/add_screen" component={add_screen}/>
                    <Route path="/screen_list" component={screen_list}/>
                    <Route path="/pending_review_advertisements" component={pending_advertisements}/>
                    <Route path="/reviewed_advertisements" component={approved_advertisements}/>
                    <Route path="/notification" component={Notification}/>
                    <Route path="/app_content" component={AppContent}/>
                    
                    <Route path="/" component={Dashboard}/>

                </Switch>
        );
    }
}

export default mainbuilder;