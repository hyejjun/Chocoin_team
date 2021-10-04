import Styled from "styled-components"
import useInput from '../hooks/useInput'


const transactionhistory = () => {


    return(
        <TransactionWrap>
            <table >
                <th>체결시간</th>
                <th>구분</th>
                <th>체결가격</th>
                <th>체결수량</th>
                <th>체결금액</th>
                <tr>
                    <td>2021-05-07</td>
                    <td>매도</td>
                    <td>25000000</td>
                    <td>3</td>
                    <td>75000000</td>
                </tr>
                <tr>
                    <td>2021-05-06</td>
                    <td>매수</td>
                    <td>25000000</td>
                    <td>3</td>
                    <td>75000000</td>
                </tr>
                <tr>
                    <td>2021-05-04</td>
                    <td>매도</td>
                    <td>25000000</td>
                    <td>3</td>
                    <td>75000000</td>
                </tr>
                <tr>
                    <td>2021-05-03</td>
                    <td>매수</td>
                    <td>25000000</td>
                    <td>3</td>
                    <td>75000000</td>
                </tr>
                <tr>
                    <td>2021-05-01</td>
                    <td>매도</td>
                    <td>25000000</td>
                    <td>3</td>
                    <td>75000000</td>
                </tr>
                <tr>
                    <td>2021-04-07</td>
                    <td>매수</td>
                    <td>25000000</td>
                    <td>3</td>
                    <td>75000000</td>
                </tr>
            </table>
        </TransactionWrap>
    )
}

export default transactionhistory

const TransactionWrap = Styled.div`
    box-sizing:border-box;
    &>table{
        width:90%;
        margin-top:20px;
    }

    & > table > th, & > table > tr > td {
        height:25px;
        font-size:15px;
        vertical-align:center;
        background-color:hsl(205, 77%, 27%);
        color:white;
        line-height:30px;
    }
    & > table > tr >td{
        text-align:center;
    }

`
