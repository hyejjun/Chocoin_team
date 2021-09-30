import Styled from "styled-components"
import Orderlist from "./OrderList"

const Orderbook = () => {
    return (
        <>
            <OrderbookWrap>
                <div>
                    <Orderbookdiv>
                        <p>매수량</p>
                    </Orderbookdiv>
                    <Orderbookdiv>
                        <p>가격</p>
                    </Orderbookdiv>
                    <Orderbookdiv>
                        <p>매도량</p>
                    </Orderbookdiv>
                </div>
                <Orderbody>
                    <Orderlist />
                    <Orderlist />
                </Orderbody>
            </OrderbookWrap>
        </>
    )
}

export default Orderbook

const OrderbookWrap = Styled.div`
    width : 25%;
    height: 100%;
    margin : 10px 20px;
    
    & > div:nth-child(1) {
        display: flex;
        padding: 0 0 1em;
    }

    & > div:nth-child(1),
    & > div:nth-child(1)>div{
        flex: 1;
    }

    & > div:nth-child(1),
    & > div:nth-child(1)>div>p{
        margin: 0;
        text-align: center;
        font-size: 0.8rem;
    }
`

const Orderbookdiv = Styled.div`
    flex : 1;
    &>p{
        margin: 0;
        text-align: center;
        font-size: 0.8rem;
    }
`

const Orderbody = Styled.div`
    flex: 1;
    height: 400px;
    overflow: auto;

    &::-webkit-scrollbar {
    width: 5px; /* 세로축 스크롤바 길이 */
    height: 5px; /* 가로축 스크롤바 길이 */
    }

    &::-webkit-scrollbar-track {
    background-color: transparent;
    }

    &::-webkit-scrollbar-track-piece {
    background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background-color: #d9d9d9;
    }

    &::-webkit-scrollbar-button:start {
    background-color: transparent; /* Top, Left 방향의 이동버튼 */
    }

    &::-webkit-scrollbar-button:end {
    background-color: transparent; /* Bottom, Right 방향의 이동버튼 */
    }
`