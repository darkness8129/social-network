import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserProfile } from '../../redux/profileReducer';
import Profile from './Profile';
import Preloader from '../Preloader/Preloader';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

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
            <Profile userProfile={this.props.userProfile} />
        );
    }
}

const mapDispatchToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        isLoading: state.profilePage.isLoading,
    };
};

export default compose(
    connect(mapDispatchToProps, { getUserProfile }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
