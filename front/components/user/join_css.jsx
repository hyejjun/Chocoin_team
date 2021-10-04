import Styled from 'styled-components'

export const JoinForm =Styled.div`
    margin:280px auto 0 auto;
    width: 800px;
    text-align:center;

    & > h1{
        font-size: 80px;
    }
    
    & > form > input{
        display:block;
        width: 350px;
        height: 50px;
        margin:0 auto 20px auto;
        border:none;
        font-size:18px;
        background:#ededed;
    }

    & > form >input:focus{
        outline:none;
    }

    & > form > button {
        width: 350px;
        border:none;
        height: 50px;
        margin:40px auto 20px auto;
        background: rgb(241,79,79);
        color:#fff;
        font-size: 18px;
    }

    & > form > button:hover {
        cursor:pointer;
    }
`