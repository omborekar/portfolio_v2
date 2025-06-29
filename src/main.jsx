import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FormspreeProvider } from '@formspree/react';
import { Toaster } from 'react-hot-toast';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormspreeProvider>
      <App />
      <Toaster position="top-right" />
    </FormspreeProvider>
  </React.StrictMode>
);
