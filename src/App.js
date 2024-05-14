import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Dashboard from './pages/dashboard/Dashboard';
import Landingpage from './pages/landingpage/Landingpage';
import ProductDetail from './pages/productDetails/ProductDetail';
import ProductPage from './pages/productDetails/ProductPage';
import NavigationBar from './pages/landingpage/navbar/NavigationBar';
import './index.css'

function App() {
  return (
    <>
     <Router>
    
    <NavigationBar  />
     <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/product/:id' element={<ProductPage/>}/>
     </Routes>
     </Router>
    </>
  );
}

export default App;
