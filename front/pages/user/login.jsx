import Login_form from '../../components/user/login_form';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Router from 'next/router';

const Login = () => {

    const data = useSelector(state => state.user);
    useEffect(() => {
        if (data.IsLogin !== false) {
            if (data.data === 'OK') {
                return;
            } else if (data.data === '아이디와 비밀번호를 확인해주세요') {
                alert(data.data);
            }
        }
    }, [data])

    return (
        <>
            {/* {data.data === undefined || data.data==='아이디와 비밀번호를 확인해주세요' || data.data === 'logout' ? <Login_form></Login_form> : ''} */}
            {data.data !== 'OK' && <Login_form></Login_form>}
        </>
    )
}

export default Login