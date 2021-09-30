import wrapper from '../Providers/createCtx'
import { GET_POST } from '../reducers/post'
import { END } from 'redux-saga'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Link from 'next/link'

const posts = () =>{
    const dispatch = useDispatch()
    const {posts} = useSelector(state => state.post)
    //console.log("posts === ",posts);
    const postLink = posts.map((v,k)=>{
        return(
            <li key = {k}>
                 {/* <h2><Link href="/posts/[id]" as={`/posts/${v.id}`}><a>{v.title}</a></Link></h2> */}
                 <h2><Link href={`/posts/${v.id}`}><a>{v.title}</a></Link></h2>
                <span>{v.body}</span>
            </li>
        )
    })



    useEffect(()=>{
        function scrollFn(){
            console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
            if ((parseInt(window.scrollY + document.documentElement.clientHeight)) === document.documentElement.scrollHeight){
                console.log('hello!');
                dispatch(GET_POST())
            }
        }
        window.addEventListener('scroll',scrollFn)           // 스크롤 내릴때마다 저 함수이벤트 발생하게
        return () =>{
            window.removeEventListener('scroll',scrollFn)   // 종료시점도 지정해주기
        }
    },[])

    return (
        <>
            <h1>Posts ({posts.length})</h1>
            <ul>
                {postLink}
            </ul>
        </>
    )
}


export const getServerSideProps = wrapper.getServerSideProps((Store)=> async (req,res)=>{
    // 첫번째는 dispatch 를 써서 API 요청을 보낸다. 그리고 상태를 변경시킨다.
    // post 컴포넌트가 실행되기 전에 얘가 먼저 실행된다.
    //console.log(Store);
    Store.dispatch( GET_POST() )        // 얘의 결과값은 객체로 반환된다.
    Store.dispatch(END)
    await Store.sagaTask.toPromise()
})


export default posts