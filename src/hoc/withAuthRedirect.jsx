import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const withAuthRedirect = (Component) => {
    const WrapperComponent = (props) => {
        if (!props.isAuth) return <Redirect to='/login' />;
        return <Component {...props} />;
    };

    const mapStateToProps = (state) => {
        return {
            isAuth: state.authReducer.isAuth,
        };
    };

    return connect(mapStateToProps)(WrapperComponent);
};
export default withAuthRedirect;
