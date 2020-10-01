import { connect } from 'react-redux';
import {
    sendMessageActionCreator,
    changeNewMessageTextActionCreator,
} from './../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs,
        newMessageText: state.dialogsPage.newMessageText,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeMessageText: (messageText) =>
            dispatch(changeNewMessageTextActionCreator(messageText)),
        sendMessage: () => dispatch(sendMessageActionCreator()),
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
