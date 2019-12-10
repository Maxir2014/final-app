import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import './Landing.css'
class Landing extends React.Component {
    render() {

        return (
            <Fragment>

                <div className="jumbotron">
                    <h1 className="display-4">Hello, welcome to Mcga To do list!</h1>
                    <p className="lead">By tommy rebot</p>
                    <hr className="my-4"/>
                        <p>This is a simple web application designed to schedule tasks created in the MCGA college class </p>
                        <p className="lead">
                            <a className="btn btn-primary btn-lg" href="/login" role="button">I want to know more!</a>
                        </p>
                </div>
                <div className="loader"/>
                <div className="col-md-6 offset-4">
                    <h1>Currents users </h1>
                </div>
            </Fragment>


        );
    }
}
function mapState(state) {

}

const actionCreators = {

};

const connectedLanding = connect(mapState, actionCreators)(Landing);
export { connectedLanding as Landing };