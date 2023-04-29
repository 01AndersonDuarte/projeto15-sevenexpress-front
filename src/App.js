
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SingIn from './pages/SignIn';
import AuthProvider from './contexts/AuthContext';
import HomePage from './pages/HomePage';
import ProductPage  from './pages/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/cadastro" element={<SignUp></SignUp>} />
          <Route path="/login" element={<SingIn></SingIn>} />
          <Route path="/produto/:id" element={<ProductPage></ProductPage>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
