import { EmptyLayout } from '@/components/layout';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import axiosClient from 'api-client/axiosClient';
import { AppPropsWithLayout } from 'models';
import { useEffect } from 'react';
import { SWRConfig } from 'swr';
import { createEmotionCache, theme } from 'utils';
import '../styles/globals.css';
import '../styles/prism.css';

const clientSideEmotionCache = createEmotionCache();
export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  useEffect(() => {
    const fixViewport = () => {
      const ww = window.innerWidth || document.body.clientWidth;
      const mw = 1300;
      const ratio = ww / mw;

      let zoom = '100%';

      zoom = Math.floor(ratio * 100 - 1) + '%';

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      document.getElementsByTagName('html')[0].style.zoom = zoom;
    };

    fixViewport();
    window.addEventListener('resize', function () {
      fixViewport();
    });
  }, []);
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  );
}
