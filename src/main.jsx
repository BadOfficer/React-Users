import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App.jsx';
import './app/index.css';
import ToastProvider from './shared/ui/toast/ui/ToastProvider.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ToastProvider>
            <App />
        </ToastProvider>
    </StrictMode>,
);
