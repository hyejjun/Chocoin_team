import Link from 'next/link'
import Styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
// import { logout } from '../../back/middleware/auth'
import { user_logout } from '../reducers/user'
import Logout from '../pages/user/logout'

const Navigation = () => {

    const dispatch = useDispatch();

    // const handleLogout = () => {
    //     dispatch({ type:'USER_LOGOUT' })
    //     logout();
    // }

    useEffect(()=>{
        window.addEventListener('storage',(e)=>{
            if(e.key === 'logout'){
                console.log('로그아웃 감지');
                dispatch(user_logout())
            }
        })
    },[]);

    return (
        <>
            <Gnb>
                <li className="logo"><Link href='/'><a>chocoin</a></Link></li>
                <li><Link href='/'><a>거래소</a></Link></li>
                <li><Link href='/user/join'><a>회원가입</a></Link></li>
                <li><Link href='/mypage'><a>내 정보</a></Link></li>
                <li><Link href='/coininfo'><a>코인 정보</a></Link></li>
                <li className="logout_btn"><Logout/></li>
            </Gnb>
        </>
    )
}

export default Navigation


const Gnb = Styled.ul`
    display : flex;
    flex-direction : row;
    box-sizing:border-box;
    width:100%;
    height:100%;
    padding:25px;
    background-color:hsl(205, 77%, 27%);

    .logo>a{
        margin-left:50px;
        margin-right:50px;
        padding:0;
        font-size:27px;
        font-family: 'Playfair Display', serif;
        color:white;
    }
    & > li {
        padding-top:8px;
        margin-left : 30px;
    }

    & > li > a , & > ul{
        color:white;
        font-size:18px;
        font-family: 'Noto Sans KR', sans-serif;
    }
    .join_wrap{
        
        display : flex;
        flex-direction : row;
        
    }

`