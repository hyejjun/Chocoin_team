import { useDispatch,useSelector } from "react-redux";
import { user_logout } from "../../reducers/user";

const Logout = () => {

    const dispatch = useDispatch();
    const data = useSelector(state=>state.user);
    const handleLogout = () => {
        dispatch(user_logout());
    }

    return(
        <>
            {data.data !== undefined ? <button type="button" onClick={handleLogout}>로그아웃</button> : ''}
        </>
    )
}

export default Logout