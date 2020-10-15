import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import {
    sendMessage,
    changeNewMessageText,
} from './../../redux/actionCreators';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs,
        newMessageText: state.dialogsPage.newMessageText,
    };
};

export default compose(
    connect(mapStateToProps, {
        changeNewMessageText,
        sendMessage,
    }),
    withAuthRedirect
)(Dialogs);
