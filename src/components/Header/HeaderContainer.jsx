import React from 'react';
import Header from './Header';
import { logout } from './../../redux/authReducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.authReducer.login,
        isAuth: state.authReducer.isAuth,
    };
};

export default connect(mapStateToProps, { logout })(HeaderContainer);
