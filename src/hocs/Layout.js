import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Head from 'next/head';


const Layout = ({ title, content, children }) => {




    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='description' content={content} />            
            </Head>
       
            <div className=''>
                {children}
            </div>
        </>
    );
};

Layout.defaultProps = {
    title: 'Automatic Surebets',
    content: 'Find Surebets'
}

export default Layout;
