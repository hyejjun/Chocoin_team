import Styled from "styled-components"
import useInput from '../hooks/useInput'
import { useDispatch, useSelector } from 'react-redux'
import { ExchangeInsert_REQUEST } from "../reducers/exchange"


const TradeForm = (props) => {
    const dispatch = useDispatch()

    const price = useInput(0)
    const qnt = useInput(0)

    const handelSubmit = (e) => {
        e.preventDefault()

        const data = {
            price: price.value,
            qnt: qnt.value,
            total: (price.value) * (qnt.value),
            type: props.type
        }
        dispatch(ExchangeInsert_REQUEST(data))
    }

    return (
        <>
            <form onSubmit={handelSubmit}>
                <TradeFrom>
                    <FromList>
                        <div>
                            <p>보유 원화</p>
                        </div>
                        <FromDes>
                            <p>
                                <span></span>
                            </p>
                        </FromDes>
                    </FromList>

                    <FromList>
                        <div>
                            <p>
                                {props.type === 'ASK' ? '매수' : '매도'} 가격
                            </p>
                        </div>
                        <FromDes>
                            <input type="number" {...price} min="0"/> <label>KRW</label>
                        </FromDes>
                    </FromList>
                    <FromList>
                        <div>
                            <p>{props.type === 'ASK' ? '매수' : '매도'}수량</p>
                        </div>
                        <FromDes>
                            <input type="number" {...qnt} min="0"/> <label>CHC</label>
                        </FromDes>
                    </FromList>
                    <FromList>
                        <div>
                            <p>{props.type === 'ASK' ? '매수' : '매도'}총액</p>
                        </div>
                        <FromDes>
                            <p>
                                <span>
                                    {(price.value) * (qnt.value)}
                                </span>
                            </p>
                        </FromDes>
                    </FromList>
                    <FromSubmit>
                        <FormSubmitBtn type="submit" flag={props.type}>
                            {
                                props.type === 'ASK' ? '매수' : '매도'
                            }
                        </FormSubmitBtn>
                    </FromSubmit>
                </TradeFrom>
            </form>
        </>
    )
}

export default TradeForm

const TradeFrom = Styled.div`
    padding: 0 3rem;
`

const FromList = Styled.div`
    padding: 1rem 0;
    &>p{
        margin: 0; 
    }
    &>input{
        display: block;
        width: 100%;
        height: 2rem;
        border: none;
        border-bottom: 1px solid #d9d9d9;
        outline: none;
        font-size: 1.2rem; 
    }

    &>label{
        position: absolute;
        right: 0;
        bottom: 5px;
        font-size: 0.5rem;
        color: #333;
    }
`

const FromDes = Styled.div`
    position: relative;
    &>p{
        font-size: 1.2rem;
        margin-left: 10px;
    }

    &>input{
        display: block;
        width: 100%;
        height: 2rem;
        border: none;
        border-bottom: 1px solid #d9d9d9;
        outline: none;
        font-size: 1.2rem;
        padding : 5px 10px;
    }

    & > label{
        position: absolute;
        right: 20px;
        bottom: 5px;
        font-size: 0.5rem;
        color: #333;
    }

`

const FromSubmit = Styled.div`
    margin-top: 0.7rem;
`

const FormSubmitBtn = Styled.button`
    display: block;
    width: 100%;
    color: #fff;
    height: 3rem;
    font-size: 1rem;
    border: none;
    margin: 0;
    padding: 12px 0px;
    outline: none;
    box-sizing: border-box;
    cursor: pointer;
    text-align: center;
    background : ${props => (props.flag === "ASK" ? 'rgb(241, 79, 79)' : 'rgb(120, 120, 227)')};
`