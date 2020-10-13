import React from 'react';
import Header from './Header';
import { setUserAuth } from './../../redux/actionCreators';
import { connect } from 'react-redux';
import userApi from '../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        userApi.getAuth().then((data) => {
            const { id, email, login } = data.data;
            this.props.setUserAuth(id, email, login);
        });
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

export default connect(mapStateToProps, { setUserAuth })(HeaderContainer);
