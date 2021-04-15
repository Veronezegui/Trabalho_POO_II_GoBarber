import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import GlobalStyle from './styles/Global';

import Routes from './routes';
import AppProvider from './hooks';

import {AuthProvider} from './hooks/AuthContext';
import { ToastProvider } from './hooks/ToastContext';

const App: React.FC = () => (
  <Router>
    <AuthProvider>
      <ToastProvider>
        <Routes />
      </ToastProvider>
    </AuthProvider>


    <GlobalStyle />
  </Router>
);
export default App;
