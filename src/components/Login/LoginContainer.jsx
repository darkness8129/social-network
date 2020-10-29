import { connect } from 'react-redux';
import Login from './Login';
import { login } from './../../redux/reducers/authReducer';
import { getCaptchaUrl, getIsAuth } from '../../redux/selectors/loginSelectors';

const mapStateToProps = (state) => {
    return {
        isAuth: getIsAuth(state),
        captchaUrl: getCaptchaUrl(state),
    };
};
export default connect(mapStateToProps, { login })(Login);
