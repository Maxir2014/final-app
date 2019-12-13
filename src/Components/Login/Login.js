import React, {Fragment} from 'react';
import { connect } from 'react-redux';

import { userActions } from '../../Actions';
import './Login.css'
import { Redirect } from "react-router-dom";
import { Error } from '../Errors';
class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { email, password } = this.state;
        if (email && password) {
            this.props.login(email, password);
        }
    }



    render() {
        let errorHandler = '';
        if(this.props.loginError){
            errorHandler =  <Error message={this.props.loginError}/>
        }
        const { loggedIn } = this.props;
        if(loggedIn) {
            return <Redirect to={{ pathname: '/home' }} />
        }
        const { email, password, submitted } = this.state;
        return (
            <div className="login">
                <div className="row container-fluid">
                    <div className="col-md-12">
                        <div className="container">
                            <div className="login-container">
                                <div id="output"/>
                                <div >
                                    {errorHandler}
                                </div>
                                <div className="form-box">

                                    <form name="form" onSubmit={this.handleSubmit}>

                                        { this.props.loginIn ?
                                        (
                                        <Fragment>
                                            <div className="loader">Loading...</div>
                                        </Fragment>
                                        ):(
                                        <Fragment>
                                        <div className='form-group'>
                                            <input type="text"
                                                   className="form-control"
                                                   name="email" value={email}
                                                   onChange={this.handleChange}
                                                   placeholder="Email"
                                            />
                                            {submitted && !email &&
                                            <div className="help-block has-error">Email is required</div>
                                            }
                                        </div>
                                        <div className='form-group'>
                                            <input type="password"
                                                   className="form-control"
                                                   name="password"
                                                   value={password}
                                                   onChange={this.handleChange}
                                                    placeholder="Password"
                                            />
                                            {submitted && !password &&
                                            <div className="help-block has-error">Password is required</div>
                                            }
                                        </div>
                                        </Fragment>

                                        )}
                                        <button type="submit" className="btn btn-block login">
                                            Login
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loginIn, loggedIn , user , loginError } = state.authentication;
    return { loginIn, loggedIn, user, loginError };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout,
    authUser: userActions.authUser
};

const connectedLoginPage = connect(mapStateToProps, actionCreators)(Login);
export { connectedLoginPage as Login };