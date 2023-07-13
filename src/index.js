import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MainProvider } from './context/MainProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MainProvider>
        <App />
    </MainProvider>
);


