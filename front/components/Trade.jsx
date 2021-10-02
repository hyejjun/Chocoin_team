import { useState } from "react"
import Styled from "styled-components"
import TradeForm from "./TradeFrom"

const Trade = () => {
    const [type, setType] = useState('ASK')
    return (
        <>
            <TradeWrap>
                <TradeHead>
                    <TradeMethod>
                        <ASK
                            flag = {type}
                            onClick={() => setType('ASK')}
                        >
                            매수
                        </ASK>
                    </TradeMethod>
                    <TradeMethod>
                        <BID
                            flag = {type}
                            onClick={() => setType('BID')}
                        >
                            매도
                        </BID>
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

const ASK = Styled.p`
    text-decoration :  ${props=>(props.flag==="ASK"? 'underline' : 'none')};
    color :  ${props=>(props.flag==="ASK"? 'black' : 'none')};
`

const BID = Styled.p`
    text-decoration:  ${props=>(props.flag==="BID"? 'underline' : 'none')};
    color :  ${props=>(props.flag==="BID"? 'black' : 'none')};
`