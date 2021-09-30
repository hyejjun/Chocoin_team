import Styled from "styled-components"
import TradeForm from "./TradeFrom"

const Trade = () => {
    return (
        <>
            <TradeWrap>
                <TradeHead>
                    <TradeMethod>
                        <p
                        >
                            매수
                        </p>
                    </TradeMethod>
                    <TradeMethod>
                        <p
                        >
                            매도
                        </p>
                    </TradeMethod>
                </TradeHead>
                <TradeForm />
            </TradeWrap>
        </>
    )
}

export default Trade

const TradeWrap = Styled.div`
    width:33.3%;
`

const TradeHead = Styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
    margin: 0 20px;
    margin: 0;
    cursor: pointer;
    color: #b9b9b9;
    text-decoration: underline;
    color: #333;
`

const TradeMethod = Styled.div`
    margin: 0 20px;
    margin: 0;
    cursor: pointer;
    color: #b9b9b9;
    &>p{
        text-decoration: underline;
        color: #333;
    }
`