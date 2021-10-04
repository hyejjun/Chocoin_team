import Head from 'next/head';
import Join_form from '../../components/user/join_form';
import Navigation from '../../Layouts/Navigation';

const Join = () => {
    return(
        <>
            <Head>
                <title>Chocoin | Join</title>
            </Head>
            <Navigation/>
            <Join_form></Join_form>
        </>
    )
}

export default Join