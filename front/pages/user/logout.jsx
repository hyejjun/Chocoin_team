import { LogoutBtn } from '../../components/user/logout_css'

const Logout = () => {

    const data = useSelector(state => state.user);
    
    return (
        <>
            {data.data === 'OK' ? <LogoutBtn><button>로그아웃</button></LogoutBtn> : ''}
        </>
    )
}

export default Logout