import React, { useEffect } from 'react';
import RootProvider from '../Providers/rootProvider';
import Orderbook from '../components/Orderbook';
import Trade from '../components/Trade';
import Styled from 'styled-components';
import Transactionhistory from '../components/Transactionhistory';
import Login from './user/login';
import { useDispatch } from 'react-redux';
import { user_cookie_check, user_login_request, user_logout } from '../reducers/user';
import {END} from 'redux-saga'
import wrapper from '../store/configureStore'

const index = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(user_cookie_check());
    }, []);

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

export const getServerSideProps = wrapper.getServerSideProps( Store => async (req,res) => {
    let arr = req.req.headers.cookie.trim().split(';');
    let [result] = arr.map(v=>{
        let row = v.split("=")
        if(row[0].trim() == "AccessToken"){
           return row[1]
        }
    }).filter(v=>{
        return v != null
    })

    if ( result != null ) {
        //로그인이 되어있는거
        Store.dispatch(user_login_request()); // axios post error with status num 500
        console.log('쿠키값이 존재함.')
    } else {
        //로그인을 진행해야 하는거
        Store.dispatch(user_logout());
        console.log('쿠키값이존재하지않음.')
    }

    Store.dispatch(END)
    await Store.sagaTask.toPromise();
} )

export default index
