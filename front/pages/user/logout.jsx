import { useDispatch,useSelector } from "react-redux";
import { user_logout } from "../../reducers/user";


const Logout = () => {

    const data = useSelector(state=>state.user);

    return(
        <>
            {data.data === 'OK' ? <button>로그아웃</button> : ''}
        </>
    )
}

export default Logout