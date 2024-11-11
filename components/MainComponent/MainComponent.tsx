import { Center } from '@mantine/core';
import { Tabs, rem } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import {
    DynamicContextProvider,
    DynamicWidget,
  } from '@dynamic-labs/sdk-react-core';


export function MainComponent() {
    const iconStyle = { width: rem(12), height: rem(12) };

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
                Messages tab content
            </Tabs.Panel>

            <Tabs.Panel value="settings">
                Settings tab content
            </Tabs.Panel>
            </Tabs>

        </Center>
    </div>
  );
}