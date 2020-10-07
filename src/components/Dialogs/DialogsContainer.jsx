import { connect } from 'react-redux';
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

const DialogsContainer = connect(mapStateToProps, {
    changeNewMessageText,
    sendMessage,
})(Dialogs);

export default DialogsContainer;
