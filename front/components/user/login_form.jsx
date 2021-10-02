import Link from 'next/link'
import { Wrapper, LoginForm } from './login_css'

const Login_form = () => {
    return (
        <Wrapper>
            <LoginForm>
                <form>
                    <input type="text" name="userid" placeholder="아이디를 입력하세요" />
                    <input type="password" name="userpw" placeholder="비밀번호를 입력하세요" />
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