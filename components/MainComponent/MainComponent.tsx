import { Button, Center, Code } from '@mantine/core';
import { Prism } from '@mantine/prism';
import { Tabs, rem } from '@mantine/core';
import { IconBoxModel, IconChartArrows, IconLoadBalancer } from '@tabler/icons-react';
import {
    DynamicContextProvider,
    DynamicWidget,
    useDynamicContext,
  } from '@dynamic-labs/sdk-react-core';
import { showNotification } from '@mantine/notifications';


import { deployVerifier, deployStrategy } from '@/contractInteractions/contractInteractions';
import { useStrategy } from '@/contractInteractions/strategy';
import { useState } from 'react';


export function MainComponent() {
    const iconStyle = { width: rem(24), height: rem(24) };
    const { primaryWallet } = useDynamicContext();
    const [ verifierAddress, setVerifierAddress ] = useState(null);
    const [ strategyAddress, setStrategyAddress ] = useState(null);

    const codeLSTM = `# Define the LSTM model
class LSTMModel(nn.Module):
    def __init__(self, input_size, hidden_layer_size, output_size):
        super(LSTMModel, self).__init__()
        self.hidden_layer_size = hidden_layer_size
        self.lstm = nn.LSTM(input_size, hidden_layer_size, batch_first=True)
        self.linear = nn.Linear(hidden_layer_size, output_size)
        self.hidden_cell = (torch.zeros(1, 1, self.hidden_layer_size),
                            torch.zeros(1, 1, self.hidden_layer_size))

    def forward(self, input_seq):
        lstm_out, self.hidden_cell = self.lstm(input_seq, self.hidden_cell)
        predictions = self.linear(lstm_out[:, -1])
        return predictions
`;

    return (
    <div>
        <Center>
            <DynamicWidget />
        </Center>
        <Center>
        <Tabs defaultValue="gallery" style={{width: "80%"}}>
            <Tabs.List style={{width: "100%", margin: 'auto', justifyContent: 'center'}}>
                <Tabs.Tab value="gallery" leftSection={<IconBoxModel style={iconStyle} />} style={{fontSize: '20px'}}>
                LSTM Model
                </Tabs.Tab>
                <Tabs.Tab value="messages" leftSection={<IconChartArrows style={iconStyle} />} style={{fontSize: '20px'}}>
                Liquidity providing strategy
                </Tabs.Tab>
                <Tabs.Tab value="settings" leftSection={<IconLoadBalancer style={iconStyle} />} style={{fontSize: '20px'}}>
                Rebalancing with inference
                </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="gallery">
                <Center>
                    <Prism language="python">{codeLSTM}</Prism>
                </Center>
            </Tabs.Panel>

            <Tabs.Panel value="messages">
                <Button onClick={
                    async () => {
                        const signer = await primaryWallet?.connector.ethers?.getSigner();
                        const addr = await deployVerifier(signer);
                        setVerifierAddress(addr);
                        showNotification({
                            title: 'Verifier Deployed',
                            message: `Verifier with address ${addr} has been deployed`,
                            color: 'green',
                        });
                    }
                }>
                    Deploy Verifier
                </Button>
                <Button onClick={
                    async () => {
                        const signer = await primaryWallet?.connector.ethers?.getSigner();
                        const verAddr = "0x1111111111111111111111111111111111111111";
                        deployStrategy(signer, verAddr!);
                    }
                }>Deploy Strategy</Button>
            </Tabs.Panel>

            <Tabs.Panel value="settings">
                <Button onClick={
                    async () => {
                        const signer = await primaryWallet?.connector.ethers?.getSigner();
                        await useStrategy(signer);
                    }
                }>Use strategy</Button>
            </Tabs.Panel>
            </Tabs>

        </Center>
    </div>
  );
}