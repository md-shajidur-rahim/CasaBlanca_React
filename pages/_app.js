import Router from 'next/router';
import Head from 'next/head';
// To show a loading progress bar
import NProgress from 'nprogress';
import { ChakraProvider } from '@chakra-ui/react';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) { 
  // Configures NProgress to not show a spinner
  NProgress.configure({ showSpinner: false });

  // Starts the progress bar when a route change starts
  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });

  // Completes the progress bar when a route change completes
  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });

  return (
    <>
      {/* For styling the progress bar */}
      <Head>
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
      </Head>

      {/* To provide Chakra UI styles and theme support */}
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  ); 
}

export default MyApp;