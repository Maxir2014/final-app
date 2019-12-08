//dependencies
import React, { Component } from 'react';
import './ToggleButton.css'
import {navActions} from "../../../Actions";
import {connect} from "react-redux";
class ToggleButton extends Component {

    render() {
        return(
            <button className="toggle-button" onClick={this.props.openMenu}>
                <div className="toggle-button__line"/>
                <div className="toggle-button__line"/>
                <div className="toggle-button__line"/>
            </button>
        );
    }
}
function mapStateToProps(state) {return{}}
const actionCreators = {
    openMenu: navActions.openMenu
};

const connectedToggleButton = connect(mapStateToProps, actionCreators)(ToggleButton);
export { connectedToggleButton as ToggleButton };
