import {
  Group,
  Text,
  useMantineTheme,
  rem,
  Image,
  Box,
  Kbd,
} from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import { useEffect, useRef, useState } from 'react';
import { useWindowEvent } from '@mantine/hooks';

const DropzonePro = (props: Partial<DropzoneProps>) => {
  const theme = useMantineTheme();
  const [selectedFile, setSelectedFile] = useState<any>(null);

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement> | any) => {
    const items = event.clipboardData?.items;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.kind === 'file') {
        const file = item.getAsFile();
        setSelectedFile(file);
        break;
      }
    }
  };

  useWindowEvent('paste', handlePaste);

  const onFileUpload = (files: any) => {
    setSelectedFile(files[0]);
  };

  useEffect(() => {}, [selectedFile]);

  return (
    <>
      {selectedFile ? (
        // <Box style={{}}>
        <Image
          src={URL.createObjectURL(selectedFile)}
          style={{
            objectFit: 'cover',
            borderRadius: '0 0 12px 12px',
            overflow: 'hidden',
          }}
        />
      ) : (
        // </Box>
        <Dropzone
          onDrop={(files: any) => onFileUpload(files)}
          onReject={(files: any) => console.log('rejected files', files)}
          maxSize={50 * 1024 ** 2}
          accept={['image/png', 'image/jpeg']}
          multiple={false}
          style={{ borderRadius: '0 0 12px 12px' }}
          {...props}
        >
          <Group
            position='center'
            spacing='xl'
            style={{ minHeight: rem(440), pointerEvents: 'none' }}
          >
            <Dropzone.Accept>
              <IconUpload
                size='3.2rem'
                stroke={1.5}
                color={
                  theme.colors[theme.primaryColor][
                    theme.colorScheme === 'dark' ? 4 : 6
                  ]
                }
              />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <IconX
                size='3.2rem'
                stroke={1.5}
                color={theme.colors.red[theme.colorScheme === 'dark' ? 4 : 6]}
              />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <IconPhoto size='3.2rem' stroke={1.5} />
            </Dropzone.Idle>

            <div>
              <Text size='xl' inline>
                Drag image here or click to select file or <Kbd>ctrl</Kbd> +{' '}
                <Kbd>v</Kbd>
              </Text>
              <Text size='sm' color='dimmed' inline mt={7}>
                Attach as one file as you like, that file should not exceed 50mb
              </Text>
            </div>
          </Group>
        </Dropzone>
      )}
    </>
  );
};
export default DropzonePro;
