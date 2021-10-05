import Styled from "styled-components"
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { getTradingRecord_REQUEST } from '../reducers/tradingrecord'

const Transactionhistory = () => {

    const data = useSelector(state => state.tradingrecord.traderecord)
    let list = []
    if (data !== undefined) {
        let reverseitem = data.map(item => item).reverse()
        list = reverseitem.map((v) => {
            return (
                <tr key={v.pk}>
                    <td>{v.ordertime}</td>
                    <td>{v.ordertype}</td>
                    <td>{v.price}</td>
                    <td>{v.qty}</td>
                    <td>{v.price * v.qty}</td>
                </tr>
            )
        })
    }

    return (
        <>
            <TransactionWrap>
                <table>
                    <thead>
                        <tr>
                            <th>체결시간</th>
                            <th>구분</th>
                            <th>체결가격</th>
                            <th>체결수량</th>
                            <th>체결금액</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list}
                    </tbody>
                </table>
            </TransactionWrap>
        </>
    )
}

export default Transactionhistory

const TransactionWrap = Styled.div`
    padding-top : 3%;
    box-sizing:border-box;
    &>table{
        width:50%;
        margin-top:20px;
    }

    & > table > thead > tr >  th, & > table > tbody > tr > td {
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