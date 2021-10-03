import { useState } from "react"
import Styled from "styled-components"
import TradeForm from "./TradeFrom"

const Trade = () => {
    const [type, setType] = useState('BUY')
    return (
        <>
            <TradeWrap>
                <TradeHead>
                    <TradeMethod>
                        <BUY
                            flag = {type}
                            onClick={() => setType('BUY')}
                        >
                            매수
                        </BUY>
                    </TradeMethod>
                    <TradeMethod>
                        <SELL
                            flag = {type}
                            onClick={() => setType('SELL')}
                        >
                            매도
                        </SELL>
                    </TradeMethod>
                </TradeHead>
                <TradeForm type={type} />
            </TradeWrap>
        </>
    )
}

export default Trade

const TradeWrap = Styled.div`
    /* width:33.3%; */
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
    cursor: pointer;
    color: #b9b9b9;
`

const BUY = Styled.p`
    text-decoration :  ${props=>(props.flag==="BUY"? 'underline' : 'none')};
    color :  ${props=>(props.flag==="BUY"? 'black' : 'none')};
`

const SELL = Styled.p`
    text-decoration:  ${props=>(props.flag==="SELL"? 'underline' : 'none')};
    color :  ${props=>(props.flag==="SELL"? 'black' : 'none')};
`