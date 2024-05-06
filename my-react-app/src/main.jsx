import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider> 
        <div className="flex justify-center items-center h-screen"> {/* Aplica las clases de Tailwind */}
          <div className='w-screen'> {/* Ancho completo con color de fondo */}
            <App />
          </div>
        </div>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
