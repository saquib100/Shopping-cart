import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Store from './pages/store';
import Cancel from './pages/cancel';
import Success from './pages/success';
import CartProvider from './cartContext';

function App() {
  return (
    <CartProvider>
    <Container>

    <NavbarComponent></NavbarComponent>
    <BrowserRouter>
    <Routes>
      <Route index element={ <Store />} />
      <Route path="success" element={ <Success />} />
      <Route path="cancel" element={<Cancel />} />
    </Routes>
    </BrowserRouter>
    </Container>
    </CartProvider>
  );
}

export default App;
