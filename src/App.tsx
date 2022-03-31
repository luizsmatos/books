import React from 'react';

import Routes from 'routes';
import { AuthProvider } from 'hooks/useAuth';

import GlobalStyles from 'styles/global';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <AuthProvider>
      <GlobalStyles />
      <Routes />

      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </AuthProvider>
  );
};

export default App;
