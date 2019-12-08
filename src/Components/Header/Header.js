//dependencies
import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';

//styling
import './Header.css';

//components
import { ToggleButton } from '../Menu';
import {userActions} from "../../Actions";
import {connect} from "react-redux";

 class Header extends Component {
    render() {
        return (
            <header className="toolbar">
                <nav className="toolbar__navigation">
                    <div>
                        <ToggleButton />
                    </div>
                    <div className="toolbar__logo"><a href="/">LOGO</a></div>
                    <div className="spacer"/>
                    <div className="toolbar__navigation-items">
                        <ul>
                            <div>
                                {this.props.loggedIn ? (
                                    <a className="nav-link" onClick={this.props.logout}> Logout </a>
                                ) : (
                                    <>
                                        <Link to={"/login"}> Login </Link>
                                    </>
                                )}
                            </div>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

function mapStateToProps(state) {
    const  { loggedIn } = state.authentication;
    return {loggedIn};
}

const actionCreators = {
    logout: userActions.logout
};

const connectedHeader = connect(mapStateToProps, actionCreators)(Header);
export { connectedHeader as Header };
