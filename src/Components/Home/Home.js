import React from 'react';
import { connect } from 'react-redux';
import './Home.css'

import {todoActions} from "../../Actions/todo";
import {Link} from "react-router-dom";
class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getTodoList();
    }

    handleDeleteThing(id) {
        return (e) => {
            this.props.removeTodo(id);
        }
    }
    handleFinish(thingTodo) {
        return (e) => {
            this.props.finishTodo(thingTodo);
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                <div className="col-md-10 offset-1">
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th scope="col">To do</th>
                                <th scope="col">Date</th>
                                <th scope="col">Description</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            { this.props.itemList ?
                                (
                                    this.props.itemList.map((thingTodo, item) => {
                                        return <tr key={item}>
                                            <th scope="row">{thingTodo.title}</th>
                                            <td >{thingTodo.date}</td>
                                            <td>{thingTodo.description}</td>
                                            <td>
                                                <div className="row pull-rigth" >
                                                    <div className="col-md-4">
                                                        <Link to={`/edit/${thingTodo._id}`}
                                                              className="icon-button-edit">Edit </Link>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <a type="button" className="icon-button-delete" onClick={this.handleDeleteThing(thingTodo._id)}>Delete</a>
                                                    </div>
                                                    {thingTodo.status !== 'finished' ?(
                                                        <div className="col-md-4">
                                                            <a type="button" className="icon-button-finish"
                                                               onClick={this.handleFinish(thingTodo)}
                                                            >Finish</a>
                                                        </div>
                                                    ):(
                                                        <div className="col-md-4">
                                                            <del><a type="button" className="icon-button-finished">Finished</a></del>
                                                        </div>
                                                    )}

                                                </div>
                                            </td>
                                        </tr>
                                    })
                                ):(<></>)
                            }
                            </tbody>
                        </table>
                    <div className="row">
                        <div className="col-md-4">

                            <Link to={"/create/todo"} className="plus" onClick={this.props.closeMenu}>Login </Link>

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
    const { itemList , successRemove } = state.thingsTodo;
    return { itemList, user, successRemove };
}

const actionCreators = {
    getTodoList: todoActions.getTodoList,
    removeTodo: todoActions.removeTodo,
    finishTodo: todoActions.finishTodo

};

const connectedHome = connect(mapState, actionCreators)(Home);
export { connectedHome as Home };