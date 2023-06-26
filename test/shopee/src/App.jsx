import { useState } from 'react';
import './component/buldle.css'
import './component/Pcmail-catelogy.css'
import Sortbar from './component/Sortbar';
import ProductForm from './component/ProducFrom';
import ProductList from './component/Produclist';

function App() {
  const [products, setProducts] = useState([]);

  const handleProductCreate = (newProduct) => {
    // Thêm sản phẩm vào danh sách sản phẩm
    setProducts([...products, newProduct]);
  };

  return (
    <>
      <ProductForm onProductCreate={handleProductCreate} />
      <Sortbar/>
      <div className='row d-flex shopee-search-item-result__items'>
      <ProductList products={products} />
      </div>
    </>
  );
}

export default App;
