
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SingIn from './pages/SignIn';
import AuthProvider from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/cadastro" element={<SignUp></SignUp>} />
          <Route path="/login" element={<SingIn></SingIn>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
