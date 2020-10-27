import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    requestUserProfile,
    requestUserStatus,
    updateUserStatus,
    uploadAvatar,
} from '../../redux/reducers/profileReducer';
import Profile from './Profile';
import Preloader from '../Preloader/Preloader';
import { compose } from 'redux';
import {
    getUserProfile,
    getIsLoading,
    getUserStatus,
    getAuthorizedUserId,
    getIsAuth,
} from '../../redux/selectors/profileSelectors';

class ProfileContainer extends React.Component {
    refreshProfile() {
        const userId = this.props.match.params.userId
            ? this.props.match.params.userId
            : this.props.authorizedUserId;

        if (!userId) {
            this.props.history.push('/login');
        }

        this.props.requestUserProfile(userId);
        this.props.requestUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevprops, prevstate) {
        if (this.props.match.params.userId !== prevprops.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return this.props.isLoading ? (
            <Preloader />
        ) : (
            <Profile
                userProfile={this.props.userProfile}
                userStatus={this.props.userStatus}
                updateUserStatus={this.props.updateUserStatus}
                uploadAvatar={this.props.uploadAvatar}
                isOwner={!this.props.match.params.userId}
            />
        );
    }
}

const mapDispatchToProps = (state) => {
    return {
        userProfile: getUserProfile(state),
        isLoading: getIsLoading(state),
        userStatus: getUserStatus(state),
        authorizedUserId: getAuthorizedUserId(state),
        isAuth: getIsAuth(state),
    };
};

export default compose(
    connect(mapDispatchToProps, {
        requestUserProfile,
        requestUserStatus,
        updateUserStatus,
        uploadAvatar,
    }),
    withRouter
)(ProfileContainer);
