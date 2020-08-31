import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import firebase from '../../firebase';

class Logout extends Component {
    constructor(props) {
        super(props);
        firebase.auth().signOut();
    }
}

export default Logout