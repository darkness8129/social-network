import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import { login } from './../../redux/authReducer';

const mapStateToProps = (state) => {
    return {
        isAuth: state.authReducer.isAuth,
    };
};
export default connect(mapStateToProps, { login })(Login);
