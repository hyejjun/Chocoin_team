import Head from 'next/head';
import Login_form from '../../components/user/login_form';

const Login = () => {
    return(
        <>
            <Head>
                <title>Login</title>
            </Head>
            <Login_form></Login_form>
        </>
    )
}

export default Login