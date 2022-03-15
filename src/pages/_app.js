 import Head from 'next/head';
import { Provider } from 'react-redux';
import { useStore } from '../store';
import 'tailwindcss/tailwind.css'


const App = ({ Component, pageProps }) => {
    const store = useStore(pageProps.initialReduxState);

    return (
        <Provider store={store}>
            <Head>
                <title>Surebets</title>
                <meta name='viewport' content='width=device-width, inital-scale=1' />

            </Head>
            <Component {...pageProps} />
        </Provider>
    );
};

export default App;
