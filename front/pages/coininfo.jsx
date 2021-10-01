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
                <ul>
                    <li>WHAT IS ZOOMCOIN?</li>
                    <li>'K-Digital Traning 블록체인 기반 핀테크 및 응용 SW 개발자 양성과정'의</li>
                    <li>첫번째 블록체인 프로젝트이며, Litecoin 기반으로 만들어진 코인이다.</li>
                </ul>
                <ul>
                    <li>WHY ZOOM?</li>
                    <li>당신의 자산을 달달하게 해주는 chocoin입니다.</li>
                </ul>
            </CoininfoWrap>
        </>
    )
}

export default Coininfo

const CoininfoWrap = Styled.div`
    width:100%;
    height:100%;
    margin:auto;

    img {
        width:60%;
        height:50%;
    }
`