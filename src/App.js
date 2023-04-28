
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SingIn from './pages/SignIn';
import AuthProvider from './contexts/AuthContext';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/cadastro" element={<SignUp></SignUp>} />
          <Route path="/login" element={<SingIn></SingIn>} />
          <Route path="/" element={<HomePage></HomePage>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
