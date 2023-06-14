import React, { useState } from 'react';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import Screenshot from './App/Pages/Screenshot';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const App = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorSchema =
      value || (colorScheme === 'light' ? 'dark' : 'light');
    setColorScheme(nextColorSchema);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Screenshot />,
    },
  ]);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{ primaryColor: 'yellow', colorScheme }}
        withGlobalStyles
        withNormalizeCSS
      >
        <RouterProvider router={router} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default App;
