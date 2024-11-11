import '@mantine/core/styles.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import {
  DynamicContextProvider,
  DynamicWidget,
} from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum';
import { EthersExtension } from '@dynamic-labs/ethers-v5';
import { theme } from '../theme';

export default function App({ Component, pageProps }: AppProps) {
  const cssOverrides = `
    .button--padding-large {
      padding: 0.66rem 1rem;
    }
  `;
  
  return (
      <DynamicContextProvider
        settings={{
        environmentId: 'a2dea8be-028b-4848-a65f-a57fe56a8770',
        walletConnectors: [EthereumWalletConnectors],
        walletConnectorExtensions: [EthersExtension],
        cssOverrides,
      }}
    >
      <MantineProvider theme={theme}>
        <Head>
          <title>Mantine Template</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
          <link rel="shortcut icon" href="/favicon.svg" />
        </Head>
        <Component {...pageProps} />
      </MantineProvider>
      </DynamicContextProvider>
  );
}
