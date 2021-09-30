import wrapper from "../../Providers/createCtx"
import { GET_POSTS_DETAIL } from "../../reducers/post"
import { END } from 'redux-saga'
import { useSelector } from "react-redux"
import Link from 'next/link'

const Post = ()=>{
    const post = useSelector(state => state.post.postDetaill)

    return(
        <>
            {/* hello {id} */}
            <h3>{post.title}</h3>
            <dl>
                <dt>{post.id}</dt>
                <dt>{post.body}</dt>
            </dl>
            <Link href="/posts/"><a>목록가기</a></Link>
        </>
    )
}


export const getServerSideProps = wrapper.getServerSideProps((Store)=> async (req,res)=>{
   const {id} = req.params
   // console.log(id);
   Store.dispatch(GET_POSTS_DETAIL(id))
   Store.dispatch(END)
   await Store.sagaTask.toPromise()
})



export default Post