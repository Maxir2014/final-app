import React, {Fragment} from 'react';
import { connect } from 'react-redux';

import './Todo.css'
import {Link} from "react-router-dom";
import {todoActions} from "../../Actions";

class TodoEdit extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.recoveTodo(id);
    }
    handleFinish(thingTodo) {
        return (e) => {
            const title = this.getTitle.value;
            const description =  this.getDescription.value;
            const dateThing = this.getDateThing.value;
            thingTodo.title = title;
            thingTodo.description = description;
            thingTodo.date = dateThing;
            this.props.finishEdition(thingTodo);

            this.props.history.push('/home');

        }
    }
    render() {
        const thing = this.props.todoItemThing;

        if(thing) {
            return (
                <div className="row">
                    <div className="col-md-6 offset-3">
                        <form className="was-validated">
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1"> Title </label>
                                <input type="text" className="form-control"
                                       ref={(input)=>this.getTitle = input}
                                       placeholder={thing.title}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="validationTextarea">Description</label>
                                <textarea className="form-control"
                                          ref={(input)=>this.getDescription = input}
                                          placeholder={thing.description}/>
                            </div>

                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Date</label>
                                <input type="date"
                                       ref={(input)=>this.getDateThing = input}
                                       className="form-control" placeholder={thing.date}/>
                            </div>
                            <div className="row">
                                <div className="col-md-2">
                                    <a type="button" className="icon-button-finish"
                                       onClick={this.handleFinish(thing)}>Edit</a>
                                </div>
                                <div>
                                    <Link to={'/home'} type="button" className="icon-button-delete">Cancelar</Link>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            );
        }
        return (<></>);
    }
}
function mapStateToProps(state) {

  const { todoItemThing  } = state.thingsTodo;
  return {todoItemThing  }

}

const actionCreators = {
    recoveTodo: todoActions.recoverTodo,
    finishEdition : todoActions.finishEdition

};

const connectedTodoEdit = connect(mapStateToProps, actionCreators)(TodoEdit);
export { connectedTodoEdit as TodoEdit };

