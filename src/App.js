
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/cadastro" element={<SignUp></SignUp>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
