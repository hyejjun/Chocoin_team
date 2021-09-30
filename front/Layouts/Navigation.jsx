import Link from 'next/link'
import Styled from 'styled-components'

const Navigation = () => {
    return (
        <Gnb>
            <li><Link href='/'><a>거래소</a></Link></li>
            <li><Link href='/join'><a>회원가입</a></Link></li>
            <li><Link href='/mypage'><a>내 정보</a></Link></li>
            <li><Link href='/coininfo'><a>코인 정보</a></Link></li>
        </Gnb>
    )
}

export default Navigation


const Gnb = Styled.ul`
    display : flex;
    flex-direction : row;
    & > li {
        margin-left : 20px;
    }
`