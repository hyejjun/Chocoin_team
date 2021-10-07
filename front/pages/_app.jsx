import wrapper from '../Providers/createCtx'
import '../css/index.css'
import WebSocketWrap from '../Providers/socketProvider';
// import WebSocketWrap from './WebSocket'

const MyApp = ({ Component, pageProps }) => {
    return (
        <>
            <WebSocketWrap>
                <Component {...pageProps} />
            </WebSocketWrap>
        </>
    )
}

export default wrapper.withRedux(MyApp)