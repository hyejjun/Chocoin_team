import React, { useEffect } from 'react';
import RootProvider from '../Providers/rootProvider';
import Orderbook from '../components/Orderbook';
import Trade from '../components/Trade';
import Styled from 'styled-components';
import Transactionhistory from '../components/Transactionhistory';
import Login from './user/login';
import { user_login_request, user_logout } from '../reducers/user';
import { END } from 'redux-saga'
import wrapper from '../store/configureStore'
import jwtId from '../../back/jwtId';
import jwtPw from '../../back/jwtPw';
import WebSocketWrap from './WebSocket';

const index = () => {

    return (
        <>
            <WebSocketWrap />
            <RootProvider>
                <OrderboxWrpa>
                    <OrderboxSection>
                        <OrderInner>
                            <Orderbook />
                            <Trade />
                        </OrderInner>
                    </OrderboxSection>
                    <Transactionhistory />
                    <Login />
                </OrderboxWrpa>
            </RootProvider>
        </>
    )
}


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

export const getServerSideProps = wrapper.getServerSideProps(Store => async (req, res) => {

    if (req.req.headers.cookie !== undefined) {
        let arr = req.req.headers.cookie.trim().split(';');

        let [result] = arr.map(v => {
            let row = v.split("=")
            if (row[0].trim() == "AccessToken") {
                return row[1]
            }
        }).filter(v => {
            return v != null
        })

        if (result != null) {
            const newId = jwtId(result);
            const newPw = jwtPw(result);
            const data = { userid: `${newId}`, userpw: `${newPw}` };
            Store.dispatch(user_login_request(data)); // axios post error with status num 500
        } else {
            //로그인을 진행해야 하는거
            console.log('cookie')
            Store.dispatch(user_logout());
        }
        Store.dispatch(END)
        await Store.sagaTask.toPromise();
    } else {
        return;
    }


})

export default index