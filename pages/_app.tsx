import '../styles/globals.css';

import { EmptyLayout } from '@/components/layout';
import { AppPropsWithLayout } from 'models';
import { SWRConfig } from 'swr';
import axiosClient from 'api-client/axiosClient';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}
