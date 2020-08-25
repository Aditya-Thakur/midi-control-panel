import React from 'react';
//import classes from './Layout.css';
const footer = ( props ) => (
    <footer className="footer">
    © {new Date().getFullYear()} Lexa - <span className="d-none d-sm-inline-block"> Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</span>.
</footer>  
);

export default footer;