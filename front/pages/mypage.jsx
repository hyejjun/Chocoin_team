import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Styled from 'styled-components'
import Navigation from '../Layouts/Navigation'

const Mypage = () => {
    const [pages, setPage] = useState();
    const data = useSelector(state=>state.mypage)
    // const tmp = () =>{
    //     if(data === undefined){
    //         return setPage(data)
    //     }else{
    //         const list = ()=>{
    //             let pagelist = data.map((v)=>{
    //                 return( <tr key={v.pk}>
    //                             <td>{v.input}</td>
    //                             <td>{v.output}</td>
    //                             <td>{v.totalAsset}</td>
    //                             <td>{v.regdate}</td>
    //                         </tr>
    //                     )
    //             })
    //             console.log(pagelist,'ffff')
    //             console.log('dda')
    //         }
    //         return list
    // }
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
                        <div id="KRW">보유 KRW</div>
                        <div id="ALL">총 보유자산</div>
                  </div>
                  </MypageNav>
                  <Myhistory>
                      <table>
                          <thead>
                              <tr>
                                  <th>입금</th>
                                  <th>출금</th>
                                  <th>총 보유자산</th>
                                  <th>거래 시간</th>
                              </tr>
                              {/* <tr>
                                  <th>체결시간</th>
                                  <th>코인명</th>
                                  <th>종류</th>
                                  <th>거래수량</th>
                                  <th>거래단가</th>
                                  <th>거래금액</th>
                                  <th>주문시간</th>
                              </tr> */}
                          </thead>
                          <tbody>
                              {tmp}
                              {/* <tr>
                                  <td>2021-09-03</td>
                                  <td>chocoin</td>
                                  <td>cho</td>
                                  <td>3</td>
                                  <td>1000</td>
                                  <td>3000</td>
                                  <td>2021-09-03</td>
                              </tr> */}
                          </tbody>
                      </table>
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
    box-sizing: border-box;
    width:100%;
    padding: 0 300px;
    border-collapse:collapse;
    & #KRW, & #ALL {
        width: 45%;
        height: 100px;
        float:left;
        color:#666;
        display: flex;
        align-items: center;
    }
    & #KRW{
        border-right: #eeee;
    }
`

const Myhistory = Styled.div`
       box-sizing:border-box;
        & table {
            width:100%;
            background-color: #f9fafc;
            color: #666;
        }

        & > table > thead > tr > th, & > table > tbody > tr > td{
            height:25px;
            font-size:15px;
            vertical-align:center;
            background-color:hsl(205, 77%, 27%);
            color:white;
            line-height:30px;
        }
        & > table > tbody > tr >td{
        text-align:center;
    }
`
