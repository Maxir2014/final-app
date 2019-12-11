import React from 'react';
import { connect } from 'react-redux';
import './Home.css'
import {Todo, User} from "../../Entities";
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.user = new User(this.props.user);
    }

    handleChange(e) {


    }

    handleSubmit(e) {
        e.preventDefault();

    }

    render() {
        const thingsPending = this.user.thingsPending();

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                Tasks to do
                            </div>
                            {thingsPending.map( (thing, key) => {
                                return  <div key={key} className="card-body">
                                    <div className="input-group mb-3">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">{thing.title}</span>
                                            </div>
                                            <textarea className="form-control"
                                                      aria-label="With textarea"

                                            >
                                                {thing.description}
                                            </textarea>
                                        </div>
                                    </div>
                                    <a href="#" className="btn btn-primary">Finish him</a>
                                </div>
                            })}




                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                Tasks killed
                            </div>
                            <div className="card-body">

                                <div className="input-group mb-3">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">Description</span>
                                        </div>
                                        <textarea className="form-control" aria-label="With textarea"></textarea>
                                    </div>
                                </div>

                                <a href="#" className="btn btn-primary">Mark as pending</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapState(state) {
    const { user } = state.authentication;
    return { user };
}

const actionCreators = {

};

const connectedHome = connect(mapState, actionCreators)(Home);
export { connectedHome as Home };