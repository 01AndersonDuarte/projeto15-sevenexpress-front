
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SingIn from './pages/SignIn';
import AuthProvider from './contexts/AuthContext';
import HomePage from './pages/HomePage';
import ProductPage  from './pages/ProductPage';
import SectionPage from './pages/SectionsPage';
import Carrinho from './pages/Carrinho';
import SearchedPage from './pages/SearchedPage';
import CreateItem from './pages/Create';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/cadastro" element={<SignUp></SignUp>} />
          <Route path="/login" element={<SingIn></SingIn>} />
          <Route path="/produto/:id" element={<ProductPage></ProductPage>} />
          <Route path="/categoria/:section" element={<SectionPage></SectionPage>} />
          <Route path="/carrinho/:id" element={<Carrinho></Carrinho>}></Route>
          <Route path="/pesquisa" element={<SearchedPage></SearchedPage>}></Route>
          <Route path="/create-item" element={<CreateItem></CreateItem>}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
