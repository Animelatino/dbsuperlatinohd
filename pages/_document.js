import Document, { Html, Head, Main, NextScript } from 'next/document';

import { GA_TRACKING_ID } from '../lib/ga';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="es">
                <Head>
                    <link rel="icon" href="/favicon.ico"/>
                    <meta name="theme-color" content="#000000"/>
                    <link rel="manifest" href="/manifest.json"/>
                    <meta name="robots" content="index, follow"/>
                    <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}/>
                    <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GA_TRACKING_ID}', {page_path: window.location.pathname,});`,}}/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
                <footer>
                    <script id="chatBroEmbedCode" src="/js/chat.js"></script>
                </footer>
            </Html>
        )
    }
}

export default MyDocument