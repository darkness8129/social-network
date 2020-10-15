import React from 'react';
import Header from './Header';
import { getAuth } from './../../redux/authReducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuth();
    }

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

export default connect(mapStateToProps, { getAuth })(HeaderContainer);
