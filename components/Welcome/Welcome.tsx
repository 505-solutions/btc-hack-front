import { Anchor, Text, Title } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={80}>
        <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
          Phong
        </Text>{' '} - ZKML liquidity
      </Title>
      <Text color="dimmed" ta="center" size="lg" maw={'60%'} mx="auto" mt="xl" mb={30}>
        Phong is a platform that uses ZKML to enable AI-agent-powered liquidity management on <Anchor href="https://https://citrea.xyz" size="lg">
          Citrea blockchain
        </Anchor>. Using <Anchor href="https://github.com/zkonduit/ezkl" size="lg">
          EZKL library
        </Anchor>, Phong makes it possible to <b>keep the model private</b> while still proving that the rebalancing strategy is aligned with the model's predictions.
      </Text>
    </>
  );
}
