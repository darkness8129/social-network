import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    setUserProfile,
    setProfileIsLoading,
} from '../../redux/actionCreators';
import Profile from './Profile';
import Preloader from '../Preloader/Preloader';
import userApi from '../../api/api';

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.setProfileIsLoading(true);
        const userId = this.props.match.params.userId
            ? this.props.match.params.userId
            : 2;

        userApi.getUserProfile(userId).then((data) => {
            this.props.setProfileIsLoading(false);
            this.props.setUserProfile(data);
        });
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

let a = withRouter(ProfileContainer);

export default connect(mapDispatchToProps, {
    setUserProfile,
    setProfileIsLoading,
})(a);
