import { EmptyLayout } from '@/components/layout';
import useCartStore from '@/store/store-cart';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import axiosClient from 'api-client/axiosClient';
import { AppPropsWithLayout } from 'models';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SWRConfig } from 'swr';
import { createEmotionCache, theme } from 'utils';
import '../styles/globals.css';
import '../styles/prism.css';

const clientSideEmotionCache = createEmotionCache();
const queryClient = new QueryClient();
export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  const { setCarts, setCartSelectedIds } = useCartStore();
  useEffect(() => {
    const fixViewport = () => {
      const ww = window.innerWidth || document.body.clientWidth;
      const mw = 1300;
      const ratio = ww / mw;

      let zoom = '100%';
      if (ww < 1280 && ww >= 768) {
        zoom = Math.floor(ratio * 100 - 1) + '%';
      }

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      document.getElementsByTagName('html')[0].style.zoom = zoom;
    };

    fixViewport();
    window.addEventListener('resize', function () {
      fixViewport();
    });
  }, []);

  useEffect(() => {
    const cartsFromLocalStorage = localStorage.getItem('carts');
    setCarts(cartsFromLocalStorage ? JSON.parse(cartsFromLocalStorage) : []);

    const cartSelectedIds = localStorage.getItem('cartSelectedIds');
    setCartSelectedIds(cartSelectedIds ? JSON.parse(cartSelectedIds) : {});
  }, [setCarts, setCartSelectedIds]);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
          <QueryClientProvider client={queryClient}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </QueryClientProvider>
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  );
}
