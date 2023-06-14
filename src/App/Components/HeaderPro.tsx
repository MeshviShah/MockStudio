import { Box, Grid, Group, Text, useMantineColorScheme } from '@mantine/core';
import React from 'react';
import { MSIcon, iconMap } from '../icons';

const HeaderPro = ({ url }: { url: string }) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Box
      style={{
        background: `${colorScheme === 'light' ? '#eeeeed' : '#5f5e5d'}`,
        borderRadius: '12px 12px 0 0',
      }}
      px={16}
      py={10}
    >
      <Grid align={'center'}>
        {/* left icon set */}
        <Grid.Col span={'content'}>
          <Group position={'left'}>
            <Group spacing={6}>
              <div
                style={{
                  height: '10px',
                  width: '10px',
                  background: '#fc4a4a',
                  borderRadius: '100px',
                  border: '1px solid #dc2d2f',
                }}
              ></div>
              <div
                style={{
                  height: '10px',
                  width: '10px',
                  background: '#fbac35',
                  borderRadius: '100px',
                  border: '1px solid #e89322',
                }}
              ></div>
              <div
                style={{
                  height: '10px',
                  width: '10px',
                  background: '#28bb3a',
                  borderRadius: '100px',
                  border: '1px solid #3eaa4e',
                }}
              ></div>
            </Group>
            <MSIcon variant={iconMap.sidebar} />
            <MSIcon variant={iconMap.chevronLeft} />
            <MSIcon variant={iconMap.chevronRight} />
          </Group>
        </Grid.Col>
        {/* url */}
        <Grid.Col span={'auto'}>
          <Group position={'center'}>
            <MSIcon variant={iconMap.shield} />
            <Group
              w={'70%'}
              p={1}
              style={{
                border: `1px solid ${
                  colorScheme === 'light' ? '#d2d2d1' : '#717170'
                }`,
                borderRadius: '6px',
              }}
              pos={'relative'}
              position='center'
            >
              <Group spacing={6}>
                <MSIcon variant={iconMap.lock} />
                <Text fz={'xs'} c={'dimmed'}>
                  {url}
                </Text>
              </Group>
              <Box right={4} pos={'absolute'}>
                <MSIcon variant={iconMap.clockwiseArrow} />
              </Box>
            </Group>
          </Group>
        </Grid.Col>
        {/* right icon set */}
        <Grid.Col span={'content'}>
          <Group position={'right'}>
            <MSIcon variant={iconMap.share} />
            <MSIcon variant={iconMap.newTab} />
            <MSIcon variant={iconMap.tabOverview} />
          </Group>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default HeaderPro;
