import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthPage } from './components/authPageComponents/AuthPage';
import { Logout } from './components/authPageComponents/Logout';
import { NotePage } from './components/notePage/NotePage';
import { PrivateRoute } from './routes/PrivateRoute';
import { PublicRoute } from './routes/PublicRoute';


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<PublicRoute />}>
            <Route path='/' element={<AuthPage />} />
          </Route>
          <Route path='/home' element={<PrivateRoute />}>
            <Route path='/home' element={<NotePage />} />
            <Route path="/home/logout" element={<Logout />} />
          </Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;

