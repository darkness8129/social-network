import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { sendMessage } from './../../redux/actionCreators';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        messages: state.dialogsPage.messages,
        dialogs: state.dialogsPage.dialogs,
    };
};

export default compose(
    connect(mapStateToProps, {
        sendMessage,
    }),
    withAuthRedirect
)(Dialogs);
