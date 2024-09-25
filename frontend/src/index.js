import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {CategoryProvider} from '../src/app/admin/categories/CategoryContext'
import { AuthProvider } from './app/auth/context/AuthProvider';
import { ServiceProvider } from './app/services/ServiceContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<ServiceProvider >
<CategoryProvider>
    <AuthProvider>
        <Routes>
            <Route path='/*' element={ <App />}/>
        </Routes>
    </AuthProvider>
</CategoryProvider>
 </ServiceProvider>
<ToastContainer />
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
