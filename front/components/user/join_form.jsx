import { useEffect, useState } from "react";
import {useDispatch,useSelector} from "react-redux";
import { user_id_check, user_join_request } from "../../reducers/user";
import { JoinForm } from './join_css'
import useInput from "../../hooks/useInput";


const Join_form = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.user);

    const userid = useInput('');
    const userpw = useInput('');

    const [passwordCheck,setPasswordCheck] = useState(false);

    const handlePassword = e => {
        const {value} = {...e.target};
        setPasswordCheck(userpw.value !== value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const user_data = {
            userid:userid.value,
            userpw:userpw.value
        };
        if(userid.value == ''){
            alert('아이디를 확인해주세요');
            return;
        }else{
            dispatch(user_join_request(user_data));
        }
    }

    const checkId = e => {
        const { value } = e.target;
        value == '' || dispatch(user_id_check(value)); // true아니면 value
    }

    return (
        <JoinForm>
            <h1>CHOCOIN</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" {...userid} placeholder="아이디" name="userid" onMouseOut={checkId} />
                <input type="text" {...userpw} placeholder="비밀번호" name="userpw" />
                <input type="text" placeholder="비밀번호 확인" name="userpw_check" onChange={handlePassword} />
                <button type="submit">회원가입</button>
            </form>
        </JoinForm>
    )
}

export default Join_form