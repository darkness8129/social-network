import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/actionCreators';
import Profile from './Profile';

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((response) => {
                debugger;
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return <Profile userProfile={this.props.userProfile} />;
    }
}

const mapDispatchToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
    };
};

export default connect(mapDispatchToProps, { setUserProfile })(
    ProfileContainer
);
