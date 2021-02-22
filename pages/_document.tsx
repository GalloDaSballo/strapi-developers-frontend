/** Credits: https://github.com/vercel/next.js/blob/canary/examples/with-facebook-pixel/pages/_document.js */
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { FB_PIXEL_ID } from '../utils/fb';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <script
                        id="Cookiebot"
                        src="https://consent.cookiebot.com/uc.js"
                        data-cbid={process.env.NEXT_PUBLIC_COOKIEBOT_ID}
                        data-blockingmode="auto"
                        type="text/javascript"></script>
                    <script
                        id="CookieDeclaration"
                        src={`https://consent.cookiebot.com/${process.env.NEXT_PUBLIC_COOKIEBOT_ID}/cd.js`}
                        type="text/javascript"
                        async></script>
                    {/* Global Site Code Pixel - Facebook Pixel */}
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', ${FB_PIXEL_ID});
              `
                        }}
                    />
                    <noscript>
                        <img
                            alt="fbpixel"
                            height="1"
                            width="1"
                            style={{ display: 'none' }}
                            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
                        />
                    </noscript>

                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
