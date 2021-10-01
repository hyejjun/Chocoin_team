import Styled from "styled-components"
import Navigation from "../Layouts/Navigation"

const Coininfo = ()=>{
    return(
        <>
            <Navigation/>

            <CoininfoWrap>
                <article>
                    <img src="http://res.heraldm.com/content/image/2021/08/10/20210810000188_0.jpg" alt="코인사자...부자되자..."/>
                </article>
                <div className="infoTextWrap">
                    <ul>
                        <li>WHAT IS CHOCOIN?</li>
                        <li>'K-Digital Traning 블록체인 기반 핀테크 및 응용 SW 개발자 양성과정'의</li>
                        <li>첫번째 블록체인 프로젝트이며, Litecoin 기반으로 만들어진 코인이다.</li>
                    </ul>
                    <ul>
                        <li>WHY CHOCO?</li>
                        <li>당신의 자산을 달달하게 해줄 CHOCOIN입니다.</li>
                    </ul>
                </div>
            </CoininfoWrap>
        </>
    )
}

export default Coininfo

const CoininfoWrap = Styled.div`
    width:100%;
    height:100%;
    box-sizing:border-box;
    position:absolute;
    text-align:center;

    img{
        margin-top:80px;
        width:900px;
        height:400px;
    }
    
    .infoTextWrap {
        margin-top:90px;
    }

    .infoTextWrap > ul > li {
        line-height:3rem;
        font-size:18px;
    }
    .infoTextWrap > ul:nth-child(1) > li:nth-child(1){
        font-size:30px;
        font-family: 'Noto Sans Display', sans-serif;
        margin-bottom:10px;
    }
    .infoTextWrap > ul:nth-child(2) > li:nth-child(1){
        font-family: 'Noto Sans Display', sans-serif;
        font-size:20px;
        margin-top:10px;
    }




`