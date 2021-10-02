import React from 'react'
import RootProvider from '../Providers/rootProvider'
import Orderbook from '../components/Orderbook'
import Trade from '../components/Trade'
import Styled from 'styled-components'
import Transactionhistory from '../components/Transactionhistory'

const index = () => {
    return (
        <RootProvider>
            <OrderboxSection>
                <OrderInner>
                    <Orderbook />
                    <Trade />
                    <Transactionhistory/>
                </OrderInner>
            </OrderboxSection>
        </RootProvider>
    )
}

export default index


const OrderboxSection = Styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    /* flex: 1; */
    margin-top: 2rem;
    border-top: 1px solid #d9d9d9;
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