import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AuthPage } from './components/authPageComponents/AuthPage';
import { NotePage } from './components/notePage/NotePage';

function App() {
  return (
    <div className="App">
      {/* <AuthPage /> */}
      <NotePage />

    </div>
  );
}

export default App;
