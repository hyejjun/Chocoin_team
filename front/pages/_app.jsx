import wrapper from '../Providers/createCtx'

const MyApp = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)