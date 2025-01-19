import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MenuList from './components/MenuList';
import MenuDetail from './components/MenuDetails';
import MenuForm from './components/MenuForm';
import MenuItemForm from './components/MenuItemForm';
import Navbar from './components/Navbar';  // Import Navbar
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar />
       <Routes>
        <Route path="/" element={<MenuList />} />
        <Route path="/menu/:id" element={<MenuDetail />} />
        <Route path="/create-menu" element={<MenuForm />} />
        <Route path="/menu/:id/add-item" element={<MenuItemForm />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
