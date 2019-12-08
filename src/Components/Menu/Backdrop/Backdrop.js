//dependencies
import React, { Component } from 'react';
import './Backdrop.css'
import {navActions} from "../../../Actions";
import {connect} from "react-redux";
class Backdrop extends Component {
    render() {
        return(
            <div  className="backdrop" onClick={this.props.closeMenu}/>
        );
    }
}

function mapStateToProps(state) {return{}}
const actionCreators = {
    closeMenu: navActions.closeMenu
};

const connectedBackdrop = connect(mapStateToProps, actionCreators)(Backdrop);
export { connectedBackdrop as Backdrop };


