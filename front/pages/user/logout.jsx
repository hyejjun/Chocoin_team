import { LogoutBtn } from '../../components/user/logout_css'
import { useSelector } from 'react-redux';

const Logout = () => {

    const data = useSelector(state => state.user);
    
    return (
        <>
            {data.data === 'OK' ? <LogoutBtn><button>๋ก๊ทธ์์</button></LogoutBtn> : ''}
        </>
    )
}

export default Logout