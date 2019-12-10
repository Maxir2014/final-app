//dependencies
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
import {connect} from "react-redux";
import {userActions} from "../../../Actions";
import {navActions} from "../../../Actions/nav";
class NavBar extends Component {
     render() {
      return (
            <nav className={this.props.sideClass}>
                    { this.props.loggedIn ?
                        (
                            <ul>
                                <li>
                                    <Link to={"/home"} onClick={this.props.closeMenu}> home </Link>
                                </li>
                                <li>
                                    <a href="" className="nav-item" onClick={this.props.logout}> Logout </a>
                                </li>
                            </ul>
                            ):(
                                <ul>
                                    <Link to={"/login"} onClick={this.props.closeMenu}>Login </Link>
                                    <Link to={"/"} onClick={this.props.closeMenu}>MCGA App </Link>

                                </ul>
                            )
                        }

            </nav>
        );
    }
}
function mapStateToProps(state) {
    const  { loggedIn } = state.authentication;
    const { sideClass } = state.navHandler;
    return { loggedIn ,  sideClass };
}
const actionCreators = {
    logout: userActions.logout,
    closeMenu: navActions.closeMenu,

};

const connectedNavBar = connect(mapStateToProps, actionCreators)(NavBar);
export { connectedNavBar as NavBar };
