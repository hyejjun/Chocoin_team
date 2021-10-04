import Login_form from '../../components/user/login_form';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Router from 'next/router';

const Login = () => {

    const data = useSelector(state => state.user);

    useEffect(() => {
        // console.log(data.data)
        if (data.data !== undefined) {
            if (data.data === 'OK') {
                Router.push('/')
            } else if (data.data === '아이디와 비밀번호를 확인해주세요') {
                alert(data.data)
            }
        }
    }, [data])

    return (
        <>
            {data.data === undefined ? <Login_form></Login_form> : ''}
        </>
    )
}

export default Login