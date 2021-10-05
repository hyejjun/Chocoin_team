import Styled from 'styled-components'
import Navigation from '../Layouts/Navigation'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react"
import { MypageGet_REQUEST } from '../reducers/mypage'

const Mypage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(MypageGet_REQUEST())
        // 여기서 userid 같이 보내줘야함
    }, [])

    const page = useSelector(state => state.mypage.pagelist)
    const coin = useSelector(state => state.mypage.coininfo)

    let list = []
    if (page !== undefined) {
        let reverseitem = page.map(item => item).reverse()
        list = reverseitem.map((v,i) => {
            return (
                <tr key={i}>
                    <td>{v.input}</td>
                    <td>{v.output}</td>
                    <td>{v.input * v.output}</td>
                    <td>{v.regdate}</td>
                </tr>
            )
        })
    }

    let list2 = []
    if (coin !== undefined) {
        let reverseitem2 = coin.map(item => item).reverse()
        list2 = reverseitem2.map((v,i) => {
            return (
                <ul key={i}>
                    <li>{v.coinname}</li>
                    <li>{v.qty}</li>
                </ul>
            )
        })
    }


    return (
        <>
            <Navigation />

            <Mypageatall>
                <div>
                    {/* <Mypagetop>
                    <div>
                        마이페이지
                    </div>
                    </Mypagetop> */}
                    {/* <MypageNav>
                    <div>
                            <div id="KRW">보유 KRW</div>
                            <div id="ALL">총 보유자산</div>
                    </div>
                    </MypageNav> */}
                    <Myhistory>
                        <table>
                            <thead>
                                <tr>
                                    <th>입금</th>
                                    <th>출금</th>
                                    <th>총 보유자산</th>
                                    <th>거래 시간</th>
                                </tr>
                            </thead>
                            <tbody>
                                {list}
                            </tbody>
                        </table>

                        <div>
                        {list2}
                        </div>
                        
                    </Myhistory>
                </div>

            </Mypageatall>
        </>
    )
}

export default Mypage


const Mypageatall = Styled.div`
    width:100%;
    height:100%;
`

const Mypagetop = Styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    margin: 0;
    font-size: 60px;
    font-weight: bold;
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
       width:70%;
       background-color: #f9fafc;
       color: #666;
    }
    & > table > thead > tr > th, & > table > tbody > tr > td{
        width : 25%;
        height:25px;
        font-size:15px;
        vertical-align:center;
        background-color:hsl(205deg 48% 20%);
        color:white;
        line-height:30px;
    }
    & > table > tbody > tr >td{
       text-align:center;
       background : none;
       color : hsl(205deg 48% 20%);
    }

    

`
