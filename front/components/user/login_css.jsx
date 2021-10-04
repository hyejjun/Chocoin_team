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
        background: rgb(241,79,79);
        color:#fff;
        width: 116px;
        height: 46px;
        font-size:1rem;
    }

    & > form > button:hover{
        cursor:pointer;
    }

    & > a{
        position:absolute;
        right: 25px;
        background: rgb(241,79,79);
        color:#fff;
        text-align:center;
        padding: 15px 13px 13px 13px;
        text-decoration:none;
        width: 90px;
        font-size:1rem;
    }
`