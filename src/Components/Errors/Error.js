//dependencies
import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

//styling
import './Error.css';

class Error extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="swal2-icon swal2-error swal2-animate-error-icon" >
                    <span className="swal2-x-mark">
                        <span className="swal2-x-mark-line-left"/>
                        <span className="swal2-x-mark-line-right"/>
                    </span>
                </div>
                <p>{this.props.message}</p>

            </div>

        );
    }
}

function mapStateToProps(state) {return {}}

const actionCreators = {};

const connectedError = connect(mapStateToProps, actionCreators)(Error);

export { connectedError as Error };
