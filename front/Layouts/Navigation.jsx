import Link from 'next/link'
import Styled from 'styled-components'
import { useDispatch,useSelector } from 'react-redux'
import { user_logout } from '../reducers/user'
import Logout from '../pages/user/logout'

const Navigation = () => {

    const dispatch = useDispatch();
    
    const handleLogout = () => {
        dispatch(user_logout());
    }

    return (
        <>
            <Gnb>
                <li className="logo"><Link href='/'><a>chocoin</a></Link></li>
                <li><Link href='/'><a>거래소</a></Link></li>
                <li><Link href='/mypage'><a>내 정보</a></Link></li>
                <li><Link href='/coininfo'><a>코인 정보</a></Link></li>
                <li className="logout_btn" onClick={handleLogout}><Logout/></li>
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