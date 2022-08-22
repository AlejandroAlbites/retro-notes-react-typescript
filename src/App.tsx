import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthPage } from './components/authPageComponents/AuthPage';
import { NotePage } from './components/notePage/NotePage';
import { PrivateRoute } from './routes/PrivateRoute';
import { PublicRoute } from './routes/PublicRoute';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              <PublicRoute>
                <AuthPage />
              </PublicRoute>
            }
          />
          <Route path="/home/"
            element={
              <PrivateRoute>
                <NotePage />
              </PrivateRoute>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

