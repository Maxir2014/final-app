//dependencies

import React  from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../../Utils';
import { alertActions } from '../../Actions';
import { PrivateRouteRender } from '../PrivateRouteRender';


//components

import { Login } from '../../Components/Login';
import {Backdrop, NavBar} from "../Menu";
import {Header} from "../Header";
import {Home} from "../Home";
import {Landing} from "../Landing";

//styling

import './App.css';
import {Todo, TodoEdit} from "../Todo";
class App extends React.Component {
    constructor(props) {
        super(props);
        history.listen((location, action) => {
            this.props.clearAlerts();
        });
    }
    render() {

        let backDrop = null;
        if(this.props.isActiveMenu){
            backDrop = <Backdrop/>
        }
        const { alert } = this.props;
        return (

                <Router history={history}>
                        <Header />
                        <NavBar/>
                        {backDrop}
                        <main className="dashboard">
                        <div className="container-fluid">
                            <Switch>
                                <PrivateRouteRender exact path="/home" component={Home} />
                                <PrivateRouteRender exact path="/edit/:id" component={TodoEdit} />
                                <PrivateRouteRender exact path="/create/todo" component={Todo} />
                                <Route exact path="/login" component={Login} />
                                <Route path='/' component={Landing}/>
                                <Redirect from="*" to="/" />
                            </Switch>
                        </div>
                        </main>
                </Router>

        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    const { isActiveMenu } = state.navHandler;
    const { loggedIn } = state.authentication;
    return { alert , loggedIn, isActiveMenu };
}

const actionCreators = {
    clearAlerts: alertActions.clear
};

const connectedApp = connect(mapStateToProps, actionCreators)(App);
export { connectedApp as App };