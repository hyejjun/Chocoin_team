import Styled from "styled-components"

const Transaction = ()=>{
    return(
        <>
            <TransactionWrap>
                <div>
                    <div>
                        <p>채결가격</p>
                    </div>
                    <div>
                        <p>채결량</p>
                    </div>
                    <div>
                        <p>채결금액</p>
                    </div>
                    <div>
                        <p>채결시간</p>
                    </div>
                </div>
            </TransactionWrap>
        </>
    )
}

export default Transaction

const TransactionWrap = Styled.div`
    /* width : 33.3%; */

    & > div > div {
        width : 100%;
        height : 70px;
    }

`