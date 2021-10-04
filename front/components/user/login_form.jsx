import Link from 'next/link'
import { Wrapper, LoginForm } from './login_css';
import { useDispatch } from 'react-redux';
import { user_login_request } from "../../reducers/user";
import useInput from '../../hooks/useInput';

const Login_form = () => {
    const dispatch = useDispatch();

    const userid = useInput('');
    const userpw = useInput('');

    const handleSubmit = e => {
        e.preventDefault();
        const data = {
            userid: userid.value,
            userpw: userpw.value,
        };
        dispatch(user_login_request(data));
    };

    return (
        <Wrapper>
            <LoginForm>
                <form onSubmit={handleSubmit}>
                    <input type="text" {...userid} name="userid" placeholder="아이디를 입력하세요" />
                    <input type="password" {...userpw} name="userpw" placeholder="비밀번호를 입력하세요" />
                    <button type="submit">로그인</button>
                </form>
                <Link href="/user/join">
                    <a>회원가입</a>
                </Link>
            </LoginForm>
        </Wrapper>
    )
}

export default Login_form