import { connect } from 'react-redux';
import Login from './Login';
import { login } from './../../redux/reducers/authReducer';
import { getIsAuth } from '../../redux/selectors/loginSelectors';

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
    };
};
export default connect(mapStateToProps, { login })(Login);
