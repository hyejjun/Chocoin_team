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
    border: 5px solid hsl(205,77%,27%);
    border-radius:15px;
    padding:30px;
    margin-top:100px;
    margin-right:50px;

    & > form > input {
        display:block;
        width: 100%;
        height: 50px;
        margin-bottom:20px;
        border:none;
        border-bottom: 3px solid hsl(205,77%,27%);
    }

    & > form > input:focus {
        outline:none;
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
        right: 85px;
        background: rgb(241,79,79);
        color:#fff;
        text-align:center;
        padding: 15px 13px 13px 13px;
        text-decoration:none;
        width: 90px;
        font-size:1rem;
    }
`