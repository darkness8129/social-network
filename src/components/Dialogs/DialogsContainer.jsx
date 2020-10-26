import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import {
    getDialogs,
    getMessages,
} from '../../redux/selectors/dialogsSelectors';
import { sendMessage } from './../../redux/reducers/dialogsReducer';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => {
    return {
        messages: getMessages(state),
        dialogs: getDialogs(state),
    };
};

export default compose(
    connect(mapStateToProps, {
        sendMessage,
    }),
    withAuthRedirect
)(Dialogs);
