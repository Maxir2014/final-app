import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Landing.css'
import {userActions} from "../../Actions";
import {users} from "../../Reducers/user";
class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.props.getUsers();
    }

    render() {



        return (
            <Fragment>

                <div className="jumbotron">
                    <h1 className="display-4">Hello, welcome to Mcga To do list!</h1>
                    <p className="lead">By tommy rebot</p>
                    <hr className="my-4"/>
                        <p>This is a simple web application designed to schedule tasks created in the MCGA college class </p>
                        <p className="lead">
                            <Link to={'/login'} className="btn btn-primary btn-lg"> I want to know more!</Link>
                        </p>
                </div>
                { this.props.loading ?
                    (
                        <Fragment>
                            <div className="loader"/>
                        </Fragment>
                    ):(
                        <Fragment>
                            <div className="col-md-6 offset-md-4 col-xs-4 offset-xs-1">
                                <h2>Currents users: {this.props.userCount} </h2>
                            </div>
                        </Fragment>

                    )}
            </Fragment>


        );
    }
}
function mapStateToProps(state) {
    const { loading ,userCount } = state.users;
    return { userCount, loading }

}

const actionCreators = {
    getUsers: userActions.getCountUsers
};

const connectedLanding = connect(mapStateToProps, actionCreators)(Landing);
export { connectedLanding as Landing };