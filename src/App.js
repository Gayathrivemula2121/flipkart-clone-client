import React from 'react';
import ProductList from './pages/productList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <ProductList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
