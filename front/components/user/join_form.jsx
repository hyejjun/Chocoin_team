import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { user_id_check, user_join_request } from "../../reducers/user";
import { JoinForm } from './join_css'
import useInput from "../../hooks/useInput";
import Router from "next/router";


const Join_form = () => {

    const dispatch = useDispatch();
    const data = useSelector(state => state.user);

    const userid = useInput('');
    const userpw = useInput('');

    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [isRedirect, setIsRedirect] = useState(false);

    const handlePassword = e => {
        const { value } = { ...e.target };
        setPasswordError(userpw.value !== value);
        setPasswordCheck(value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const user_data = {
            userid: userid.value,
            userpw: userpw.value
        };
        if (userid.value == '') {
            alert('아이디를 확인해주세요');
            return;
        } else {
            if (userpw.value !== passwordCheck) {
                alert('비밀번호를 확인해주세요.');
                setPasswordError(true);
                return
            } else {
                setPasswordError(false)
                if (data.Id_check == false) {
                    dispatch(user_join_request(user_data));
                    alert('회원가입이 완료되었습니다.');
                    Router.push('/');
                } else {
                    alert('사용 불가능한 아이디 입니다.');
                }
            }
        }
    }

    const checkId = e => {
        const { value } = e.target;
        if (value == '') {
            return
        } else {
            dispatch(user_id_check(value))
        }
        // value == '' || dispatch(user_id_check(value)); // true아니면 value
    }

    return (
        <>
            <JoinForm>
                <h1>CHOCOIN</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" {...userid} placeholder="아이디" name="userid" onMouseOut={checkId} />
                    {data.Id_check === '' ? '' : (data.Id_check ? <div style={{ color: 'red' }}>사용 불가능한 아이디 입니다.</div> : <div style={{ color: 'blue' }}>사용가능한 아이디 입니다.</div>)}
                    <input type="password" {...userpw} placeholder="비밀번호" name="userpw" />
                    <input type="password" placeholder="비밀번호 확인" name="userpw_check" onChange={handlePassword} />
                    {passwordError && <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>}
                    <button onClick={() => setIsRedirect(true)} type="submit">회원가입</button>
                    
                </form>
            </JoinForm>
            
        </>
    )
}

export default Join_form