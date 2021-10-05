import React, { useEffect } from 'react'
import RootProvider from '../Providers/rootProvider'
import Orderbook from '../components/Orderbook'
import Trade from '../components/Trade'
import Styled from 'styled-components'
import Transactionhistory from '../components/Transactionhistory'
import Login from './user/login'
import { useDispatch,useSelector } from 'react-redux'
import { user_cookie_check } from '../reducers/user'

const index = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(user_cookie_check());
    },[]);

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
                    <Login/>
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