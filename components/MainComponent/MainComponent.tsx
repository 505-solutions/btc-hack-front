import { Button, Center, Code, Card, Text } from '@mantine/core';
// import { Prism } from '@mantine/prism';
import { Tabs, rem } from '@mantine/core';
import { IconBoxModel, IconChartArrows, IconLoadBalancer, IconBrandGoogle, IconShield, IconMap } from '@tabler/icons-react';
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
    const [ verifierAddress, setVerifierAddress ] = useState("0xDfD349eC493C6afC77F859d00c8f03B36f9842b9");
    const [ strategyAddress, setStrategyAddress ] = useState("0x2e293Bd3Bc02e83D3ef7794C4F64E4F1D1729Fb6");

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
                    <p>LTSM model that predicts <b>upper tick</b> and <b>lower tick</b> for concentrated liquidity providing in Uniswap V3 clone. Because the model is compiled in a ZK circuit it <b>remanis private</b> to anyone else besides the developers.</p>
                </Center>
                <Center>
                    <Code block mt={15} mb={15} style={{borderRadius: '5px'}}>{codeLSTM}</Code>
                </Center>
                <Center>
                    <p>We compile the model into Zero-Knowledge circuit using <a href="https://github.com/zkonduit/ezkl" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#1c7ed6' }}>EZKL Library</a></p>.
                </Center>
                <Center mb={50}>
                    <Button component="a" href="https://colab.research.google.com/drive/193KhBn4yOFwdHo2-7dXpq3S4Pk6oZD6R" target="_blank" rel="noopener noreferrer">
                        Link to Google Colab
                        <IconBrandGoogle style={{ marginLeft: '8px' }} />
                    </Button>
                </Center>
            </Tabs.Panel>

            <Tabs.Panel value="messages">
                <Center>
                    <p>We deployed two smart contracts on Criteria Testnet that allow autonomous agent to manage liquidity provisioning.</p>
                </Center>
                
                <Center mt={20} mb={50}>
                    <Card shadow="xl" padding="lg" style={{ margin: '10px', width: '45%' }}>
                        <Card.Section>
                            <Center>
                                <IconShield size={48} />
                            </Center>
                        </Card.Section>
                        <Text size="lg" mt="md" style={{fontWeight: 'bold'}}>
                            Halo2 verifier contract
                        </Text>
                        <Text size="sm">
                            Halo2 verifier contract that verifies that the resulting inference belongs to the given model. It was obtained by compiling LSTM model into ZK circuit.s  
                        </Text>
                        <Button component="a" href={`https://explorer.testnet.citrea.xyz/address/${verifierAddress}`} mt={20} target="_blank" rel="noopener noreferrer" style={{width: 'min-content', margin: 'auto'}}>
                            View on Citrea Explorer
                        </Button>
                    </Card>
                    <Card shadow="xl" padding="lg" style={{ margin: '10px', width: '45%' }}>
                        <Card.Section>
                            <Center>
                                <IconMap size={48} />
                            </Center>
                        </Card.Section>
                        <Text size="lg" mt="md" style={{fontWeight: 'bold'}}>
                            Strategy contract
                        </Text>
                        <Text size="sm">
                            Liquidity rebalancing strategy based on models predictions. Predictions are verified by <b>halo2 verifier contract</b> before being used.
                        </Text>
                        <Button component="a" href={`https://explorer.testnet.citrea.xyz/address/${strategyAddress}`} mt={20} target="_blank" rel="noopener noreferrer" style={{width: 'min-content', margin: 'auto'}}>
                            View on Citrea Explorer
                        </Button>
                    </Card>
                </Center>
                
                {/* <Button onClick={
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
                }>Deploy Strategy</Button> */}
            </Tabs.Panel>

            <Tabs.Panel value="settings">
                <p>Let's use the predictions of the private LSTM model. Firstly we <b>prove</b> that the predictions are valid outputs of LSTM model using <b>halo2 verifier</b>. Seconly we submit the predictions to the agent that utilizes them in its rebalancing strategy.</p>
                
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