import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ChakraProvider } from "@chakra-ui/react";
import * as gtag from '../lib/ga';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {

    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events]);

    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp
