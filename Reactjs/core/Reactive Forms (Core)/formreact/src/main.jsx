import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';  // Ensure you have a global CSS file
import App from './App.jsx';  // Your App component
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
