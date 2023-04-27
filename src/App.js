
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserProvider from './contexts/UserContext';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/cadastro" element={<SignUp></SignUp>}/>
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
