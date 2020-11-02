import React from 'react';
import Header from './Header';
import { logout } from './../../redux/reducers/authReducer';
import { connect } from 'react-redux';
import { getIsAuth, getLogin } from '../../redux/selectors/headerSelectors';

const HeaderContainer = (props) => {
    return <Header {...props} />;
};

const mapStateToProps = (state) => {
    return {
        login: getLogin(state),
        isAuth: getIsAuth(state),
    };
};

export default connect(mapStateToProps, { logout })(HeaderContainer);
