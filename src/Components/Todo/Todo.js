import React, {Fragment} from 'react';
import { connect } from 'react-redux';

import './Todo.css'
import {Link} from "react-router-dom";

class Todo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 offset-3">
                    <form className="was-validated">
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Title</label>
                            <input type="password" className="form-control"  placeholder="Title"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="validationTextarea">Description</label>
                            <textarea className="form-control"
                                      placeholder="Description" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Date</label>
                            <input type="password" className="form-control"  placeholder="Date"/>
                        </div>

                        <button type="submit" className="btn btn-primary">Add</button>

                    </form>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {

    return {  }

}

const actionCreators = {

};

const connectedTodo = connect(mapStateToProps, actionCreators)(Todo);
export { connectedTodo as Todo };