import React from 'react';
import { connect } from 'react-redux';
import './Home.css'
class Home extends React.Component {
    constructor(props) {
        super(props);

    }

    handleChange(e) {

    }

    handleSubmit(e) {
        e.preventDefault();

    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                Tasks to do
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
                                <a href="#" className="btn btn-primary">Finish him</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                Tasks killed
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Special title treatment</h5>
                                <p className="card-text">It's a broader card with text below as a natural lead-in to extra
                                    content. This content is a little longer.</p>
                                <a href="#" className="btn btn-primary">Relive the task</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapState(state) {

}

const actionCreators = {

};

const connectedHome = connect(mapState, actionCreators)(Home);
export { connectedHome as Home };