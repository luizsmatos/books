import React from 'react';

import Routes from 'routes';
import { AuthProvider } from 'hooks/useAuth';

import GlobalStyles from 'styles/global';

const App = () => {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Routes />
    </AuthProvider>
  );
};

export default App;
