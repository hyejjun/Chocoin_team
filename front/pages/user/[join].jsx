import Head from 'next/head';
import Join_form from '../../components/user/join_form';
import Login_form from '../../components/user/login_form'

const Join = () => {
    return(
        <>
            <Head>
                <title>Join</title>
            </Head>
            <Join_form></Join_form>
            <Login_form></Login_form>
        </>
    )
}

export default Join