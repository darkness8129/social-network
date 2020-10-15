import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserProfile } from '../../redux/profileReducer';
import Profile from './Profile';
import Preloader from '../Preloader/Preloader';

class ProfileContainer extends React.Component {
    componentDidMount() {
        const userId = this.props.match.params.userId
            ? this.props.match.params.userId
            : 2;
        this.props.getUserProfile(userId);
    }

    render() {
        return this.props.isLoading ? (
            <Preloader />
        ) : (
            <Profile
                userProfile={this.props.userProfile}
                isAuth={this.props.isAuth}
            />
        );
    }
}

const mapDispatchToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        isLoading: state.profilePage.isLoading,
        isAuth: state.authReducer.isAuth,
    };
};

export default withRouter(
    connect(mapDispatchToProps, { getUserProfile })(ProfileContainer)
);
