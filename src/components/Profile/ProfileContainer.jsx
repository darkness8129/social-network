import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
} from '../../redux/profileReducer';
import Profile from './Profile';
import Preloader from '../Preloader/Preloader';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId
            ? this.props.match.params.userId
            : this.props.authorizedUserId;

        if (!userId) {
            this.props.history.push('/login');
        }

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return this.props.isLoading ? (
            <Preloader />
        ) : (
            <Profile
                userProfile={this.props.userProfile}
                userStatus={this.props.userStatus}
                updateUserStatus={this.props.updateUserStatus}
            />
        );
    }
}

const mapDispatchToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        isLoading: state.profilePage.isLoading,
        userStatus: state.profilePage.userStatus,
        authorizedUserId: state.authReducer.userId,
        isAuth: state.authReducer.isAuth,
    };
};

export default compose(
    connect(mapDispatchToProps, {
        getUserProfile,
        getUserStatus,
        updateUserStatus,
    }),
    withRouter
)(ProfileContainer);
