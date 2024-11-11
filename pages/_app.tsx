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

  // Setting up list of evmNetworks
  const evmNetworks = [
    {
      blockExplorerUrls: [''],
      chainId: 5115,
      chainName: 'Citrea testnet',
      iconUrls: ['https://imagedelivery.net/IEMzXmjRvW0g933AN5ejrA/wwwnotionso-image-wwwblogcitreaxyz-content-images-size-w256h256-format-png-2024-01-frame-741-1svg/public'],
      name: 'Citrea testnet',
      nativeCurrency: {
        decimals: 18,
        name: 'Citrea',
        symbol: 'cBTC',
        iconUrl: 'https://imagedelivery.net/IEMzXmjRvW0g933AN5ejrA/wwwnotionso-image-wwwblogcitreaxyz-content-images-size-w256h256-format-png-2024-01-frame-741-1svg/public',
      },
      networkId: 1,

      rpcUrls: ['https://rpc.testnet.citrea.xyz'],
      vanityName: 'Citrea Testnet',
    },
  ];
  
  return (
      <DynamicContextProvider
        settings={{
        environmentId: 'a2dea8be-028b-4848-a65f-a57fe56a8770',
        walletConnectors: [EthereumWalletConnectors],
        walletConnectorExtensions: [EthersExtension],
        overrides: { evmNetworks },
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
