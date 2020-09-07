import React from 'react';
import Aux from '../../hoc/Aux_';
import Topchart from '../Topchart/Topchart';
import Leftsidebar from '../Leftsidebar/Leftsidebar';
import Footer from '../Footer/Footer';

const layout = ( props ) => {
    return(
        <Aux>
        {!props.isloginpage ?
        <div id ="wrapper">
            {props.topbar ? <Topchart notificationCount={props.notificationCount}/> : null}
            {props.sidebar ? <Leftsidebar /> : null}
        <main>
        <div className="content-page">
            <div className="content">
                <div className="container-fluid">
                    {props.children}
                </div>
            </div>
        </div>
        </main>
        {props.footer ?  <Footer /> : null}
        </div>:props.children} 
    </Aux>  
    );
}
export default layout;