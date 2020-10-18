import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const withAuthRedirect = (Component) => {
    class WrapperComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login' />;

            return <Component {...this.props} />;
        }
    }

    const mapStateToProps = (state) => {
        return {
            isAuth: state.authReducer.isAuth,
        };
    };

    return connect(mapStateToProps)(WrapperComponent);
};
export default withAuthRedirect;
