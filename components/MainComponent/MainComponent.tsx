import { Button, Center } from '@mantine/core';
import { Tabs, rem } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
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
    const iconStyle = { width: rem(12), height: rem(12) };
    const { primaryWallet } = useDynamicContext();
    const [ verifierAddress, setVerifierAddress ] = useState(null);
    const [ strategyAddress, setStrategyAddress ] = useState(null);

    return (
    <div>
        <Center>
            <DynamicWidget />
        </Center>
        <Center>
            <h1 style={{ fontSize: '40px' }}>Main Component</h1>
        </Center>
        <Center>
        <Tabs defaultValue="gallery" style={{width: "80%"}}>
            <Tabs.List style={{width: "100%", margin: 'auto', justifyContent: 'center'}}>
                <Tabs.Tab value="gallery" leftSection={<IconPhoto style={iconStyle} />}>
                Gallery
                </Tabs.Tab>
                <Tabs.Tab value="messages" leftSection={<IconMessageCircle style={iconStyle} />}>
                Messages
                </Tabs.Tab>
                <Tabs.Tab value="settings" leftSection={<IconSettings style={iconStyle} />}>
                Settings
                </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="gallery">
                Gallery tab content
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