import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { initGA, logPageView } from '../utils/ga';
import Footer from '../components/Footer';
import * as fbq from '../utils/fb';

import '../styles/globals.css';
import { AppProps } from 'next/dist/next-server/lib/router/router';

/**
 * All tracking stuff on page change
 */
const handleRouteChange = () => {
    fbq.pageview();
    logPageView();
};

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    /** Credits: https://github.com/vercel/next.js/blob/canary/examples/with-react-ga/utils/analytics.js */
    /** Also credits: https://github.com/vercel/next.js/blob/canary/examples/with-facebook-pixel/components/FacebookPixel.js */
    useEffect(() => {
        initGA();
        // `routeChangeComplete` won't run for the first page load unless the query string is
        // hydrated later on, so here we log a page view if this is the first render and
        // there's no query string
        if (!router.asPath.includes('?')) {
            logPageView();
        }
        //First Pixel Ping
        fbq.pageview();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        // Listen for page changes after a navigation or when the query changes
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default MyApp;
