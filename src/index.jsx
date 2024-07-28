import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { StateProvider } from './Client/src/utils/StateProvider';
import reducer, { initialState } from './Client/src/utils/reducer';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';
import theme from './Admin/src/theme/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <ThemeEditorProvider>
        <StateProvider initialState={initialState} reducer={reducer}>
          <Router>
            <App />
          </Router>
        </StateProvider>
      </ThemeEditorProvider>
    </React.StrictMode>
  </ChakraProvider>
);
