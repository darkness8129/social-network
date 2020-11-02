import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    requestUserProfile,
    requestUserStatus,
    updateUserProfile,
    updateUserStatus,
    uploadAvatar,
} from '../../redux/reducers/profileReducer';
import Profile from './Profile';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import {
    getUserProfile,
    getIsLoading,
    getUserStatus,
    getAuthorizedUserId,
    getIsAuth,
    getProfileUpdateSuccess,
} from '../../redux/selectors/profileSelectors';

const ProfileContainer = (props) => {
    const refreshProfile = () => {
        const userId = props.match.params.userId
            ? props.match.params.userId
            : props.authorizedUserId;

        if (!userId) {
            props.history.push('/login');
        } else {
            props.requestUserProfile(userId);
            props.requestUserStatus(userId);
        }
    };

    useEffect(() => {
        refreshProfile();
    }, [props.match.params.userId, props.authorizedUserId]);

    return props.isLoading ? (
        <Preloader />
    ) : (
        <Profile
            userProfile={props.userProfile}
            userStatus={props.userStatus}
            updateUserStatus={props.updateUserStatus}
            uploadAvatar={props.uploadAvatar}
            isOwner={!props.match.params.userId}
            updateUserProfile={props.updateUserProfile}
            profileUpdateSuccess={props.getProfileUpdateSuccess}
            isAuth={props.isAuth}
        />
    );
};

const mapDispatchToProps = (state) => {
    return {
        userProfile: getUserProfile(state),
        isLoading: getIsLoading(state),
        userStatus: getUserStatus(state),
        authorizedUserId: getAuthorizedUserId(state),
        isAuth: getIsAuth(state),
        profileUpdateSuccess: getProfileUpdateSuccess(state),
    };
};

export default compose(
    connect(mapDispatchToProps, {
        requestUserProfile,
        requestUserStatus,
        updateUserStatus,
        uploadAvatar,
        updateUserProfile,
    }),
    withRouter
)(ProfileContainer);
