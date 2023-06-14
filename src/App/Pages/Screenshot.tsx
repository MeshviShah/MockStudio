import React, { useRef, useState } from 'react';
import {
  ActionIcon,
  Box,
  Button,
  Container,
  Grid,
  Group,
  Header,
  Space,
  Switch,
  TextInput,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import DropzonePro from '../Components/DropZonePro';
import HeaderPro from '../Components/HeaderPro';
import { IconMoonStars, IconScreenshot, IconSun } from '@tabler/icons-react';
import domImage from 'dom-to-image';
import { saveAs } from 'file-saver';

const Screenshot = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();
  const [url, setUrl] = useState<string>('mockstudio.vercel.app');
  const screenShotRef: any = useRef(null);

  const downloadImage = () => {
    const node = screenShotRef.current;
    const scale = 2;
    const style = {
      transform: 'scale(' + scale + ')',
      transformOrigin: 'top left',
      width: node.offsetWidth + 'px',
      height: node.offsetHeight + 'px',
    };
    const param = {
      height: node.offsetHeight * scale,
      width: node.offsetWidth * scale,
      quality: 1,
      style,
    };

    domImage
      .toPng(node, param)
      .then((dataUrl: any) => {
        saveAs(
          dataUrl,
          `mock-studio_${new Date().toLocaleDateString()}-${new Date().toLocaleTimeString()}`
        );
      })
      .catch((error: any) => console.log(error));
  };

  return (
    <Box>
      <Header height={56} pos={'sticky'}>
        <Container pos={'relative'} h={56}>
          <Group
            position={'apart'}
            align='center'
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '100%',
            }}
          >
            <Group spacing={8}>
              <ActionIcon
                color='yellow'
                variant='transparent'
                size={'lg'}
                style={{ pointerEvents: 'none' }}
              >
                <IconScreenshot size={48} />
              </ActionIcon>
              <Title order={3} style={{ userSelect: 'none' }}>
                Mock Studio
              </Title>
            </Group>
            <Switch
              checked={colorScheme === 'dark'}
              onChange={() => toggleColorScheme()}
              size='md'
              onLabel={<IconSun color={theme.white} size={20} stroke={1.5} />}
              offLabel={
                <IconMoonStars
                  color={theme.colors.gray[6]}
                  size={20}
                  stroke={1.5}
                />
              }
            />
          </Group>
        </Container>
      </Header>
      <Space h={'md'} />
      <Container>
        <Grid>
          <Grid.Col span={'auto'}>
            <Group position='apart' grow>
              <TextInput
                radius={'md'}
                placeholder='Enter your url'
                value={url}
                onChange={(event) => setUrl(event.currentTarget.value)}
              />
            </Group>
          </Grid.Col>
          <Grid.Col span={'content'}>
            <Group>
              <Button
                radius={'md'}
                variant={'default'}
                onClick={() => {
                  window.location.reload();
                }}
              >
                Clear
              </Button>
              <Button
                radius={'md'}
                onClick={() => {
                  downloadImage();
                }}
              >
                Download
              </Button>
            </Group>
          </Grid.Col>
        </Grid>
        <Space h={'md'} />
        <Box ref={screenShotRef}>
          <HeaderPro url={url} />
          <DropzonePro />
        </Box>
        <Space h={'md'} />
      </Container>
    </Box>
  );
};

export default Screenshot;
