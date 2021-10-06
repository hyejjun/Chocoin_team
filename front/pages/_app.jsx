import wrapper from '../Providers/createCtx'
import '../css/index.css'

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <Component {...pageProps} />
        </>
    )
}

export default wrapper.withRedux(MyApp)