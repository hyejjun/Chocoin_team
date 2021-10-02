import React from 'react'
import Styled from 'styled-components'
import Navigation from '../Layouts/Navigation'

const Mypage = () => {
    return ( 
        <>
        <Navigation/>
        <Mypageatall>
              <div>
                  <Mypagetop>
                  <div>
                      마이페이지
                  </div>
                  </Mypagetop>
                  <MypageNav>
                  <div>
                        <div>잔고</div>
                  </div>
                  </MypageNav>
                  <Myhistory>
                  <ul>
                        <li>체결시간</li>
                        <li>코인명</li>
                        <li>종류</li>
                        <li>거래수량</li>
                        <li>거래단가</li>
                        <li>거래금액</li>
                        <li>주문시간</li>
                  </ul>
                  </Myhistory>
              </div>
         
        </Mypageatall>
        </>
    )
}

export default Mypage


// css 작성법
/*

const Example(변수명 앞 글자 대문자) = Styled.div`
    width:100px;    // 세미콜론 ; 꼭 써주기
    height:50px;

`
*/

const Mypageatall = Styled.div`
    width:100%;
    height:100%;
`

const Mypagetop = Styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    margin: 0;
    font-size: 36px;
`

const MypageNav = Styled.div`
    width : 25%;
    height: 200px;
    margin : 10px 20px;
`

const Myhistory = Styled.ul`
        margin-left : 20px;
        & li {
            float:left;
            width:200px;
            background-color: #f9fafc;
            color: #666;
        }
`
