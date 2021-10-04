import React from 'react'
import RootProvider from '../Providers/rootProvider'
import Login_form from '../components/user/login_form'
import Orderbook from '../components/Orderbook'
import Trade from '../components/Trade'
import Styled from 'styled-components'
import Transactionhistory from '../components/Transactionhistory'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const index = () => {

    const data = useSelector(state => state.user);

    useEffect(()=>{
        if(data.data !== undefined){
            if(data.data === 'LoginSuc'){
                Router.push('/')
            }else if(data.data === '아이디와 비밀번호를 확인해주세요'){
                alert(data.data)
            }
        }
    },[data])

    return (
        <>
            <RootProvider>
                <OrderboxWrpa>
                    <OrderboxSection>
                        <OrderInner>
                            <Orderbook />
                            <Trade />
                        </OrderInner>
                    </OrderboxSection>
                    <Transactionhistory />
                    {data.data === undefined ? <Login_form/> : ''}
                </OrderboxWrpa>
            </RootProvider>
        </>
    )
}

export default index

const OrderboxWrpa = Styled.div`
    padding : 0 100px;
`

const OrderboxSection = Styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 2rem;
    padding: 1rem 0;
`

const OrderInner = Styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 0 35px;
    & > div {
        width : 30%;
    }
`