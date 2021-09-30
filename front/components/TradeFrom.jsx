import Styled from "styled-components"

const TradeForm = () => {
    return (
        <>
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
                        <p>가격</p>
                    </div>
                    <FromDes>
                        <input type="text" />
                    </FromDes>
                </FromList>
                <FromList>
                    <div>
                        <p>수량</p>
                    </div>
                    <FromDes>
                        <input type="text" />
                    </FromDes>
                </FromList>
                <FromList>
                    <div>
                        <p>총액</p>
                    </div>
                    <FromDes>
                        <p>
                            <span></span>
                        </p>
                    </FromDes>
                </FromList>
                <FromSubmit>
                    <button
                        type="submit"
                    >
                        매수
                    </button>
                </FromSubmit>
            </TradeFrom>
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
    }

    &>p, &>span{
        font-size: 0.5em;
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
    }

`

const FromSubmit = Styled.div`
    margin-top: 0.7rem;

    &>button{
        display: block;
        width: 100%;
        color: #fff;
        height: 2rem;
        font-size: 1rem;
        border: none;
        margin: 0;
        padding: 0;
        outline: none;
    }

`