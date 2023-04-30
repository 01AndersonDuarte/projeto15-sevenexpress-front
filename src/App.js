
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SingIn from './pages/SignIn';
import AuthProvider from './contexts/AuthContext';
import HomePage from './pages/HomePage';
import ProductPage  from './pages/ProductPage';
import Carrinho from './pages/Carrinho';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/cadastro" element={<SignUp></SignUp>} />
          <Route path="/login" element={<SingIn></SingIn>} />
          <Route path="/produto/:id" element={<ProductPage></ProductPage>} />
          <Route path="/carrinho/:id" element={<Carrinho></Carrinho>}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
