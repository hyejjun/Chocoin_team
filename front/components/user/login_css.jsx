import Styled from 'styled-components'

export const Wrapper = Styled.div`
    position:absolute;
    /* top:200px; */
    top:94px;
    right: 0px;
`

export const LoginForm = Styled.div`
    display:block;
    width: 350px;
    height: 185px;
    background:#ededed;
    padding:30px;

    & > form > input {
        display:block;
        width: 100%;
        height: 50px;
        margin-bottom:20px;
        border:none;
    }

    & > form > button {
        position:absolute;
        left:30px;
        border:none;
        background:red;
        width: 116px;
        height: 46px;
    }

    & > a{
        position:absolute;
        right: 25px;
        background:red;
        text-align:center;
        padding: 15px 13px 13px 13px;
        text-decoration:none;
        width: 90px;
    }
`