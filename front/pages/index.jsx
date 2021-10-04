import React from 'react'
import RootProvider from '../Providers/rootProvider'
import Login_form from '../components/user/login_form'
import Orderbook from '../components/Orderbook'
import Trade from '../components/Trade'
import Styled from 'styled-components'
import Transactionhistory from '../components/Transactionhistory'

const index = () => {
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
                    <Login_form/>
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