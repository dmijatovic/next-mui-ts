
import React, {useState} from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'styles/theme';
import AppLoader from 'components/AppLoader'

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const [loader, setLoader] = useState(true)
  // I am not sure why is this needed?
  React.useEffect(() => {
    // debugger
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
    setLoader(false)
  }, []);

  function pageContent(){
    if (loader===true){
      return (<AppLoader message="Just a sec..."/>)
    }else{
      return (<Component {...pageProps} />)
    }
  }

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <title>My page</title>
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {pageContent()}
      </ThemeProvider>
    </React.Fragment>
  );
}