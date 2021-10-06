import wrapper from '../Providers/createCtx'
import '../css/index.css'

const MyApp = ({ Component, pageProps }) => {
    return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)
// export default wrapper.withRedux(({Component, pageProps}) => {
//     return (
//         // <PersistGate persistor={store.__persistor} loading={<div>Loading</div>} >
//             <Component {...pageProps} />
//         // </PersistGate>
//     );
// });