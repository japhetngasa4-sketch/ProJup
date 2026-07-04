import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Banner from './components/Banner';
import Sidebar from './components/Sidebar';
import ProductsGrid from './components/ProductsGrid';
import Cart from './components/Cart';
import useProductStore from './store/productStore';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const {
    setProducts,
    setCategories,
    filterProducts,
    selectedCategory,
    searchTerm,
    products,
  } = useProductStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsRes = await axios.get(
          'https://dummyjson.com/products?limit=100'
        );
        setProducts(productsRes.data.products);

        const categoriesRes = await axios.get(
          'https://dummyjson.com/products/categories'
        );
        setCategories(categoriesRes.data);
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    filterProducts(products, selectedCategory, searchTerm);
  }, [selectedCategory, searchTerm, products]);

  return (
    <div style={{backgroundColor: '#f9fafb', minHeight: '100vh'}}>
      <Header onCartClick={() => setIsCartOpen(true)} />
      <Banner />

      <div style={{maxWidth: '1200px', margin: '0 auto', padding: '2rem 1rem'}}>
        {isLoading ? (
          <p style={{textAlign: 'center', color: '#6b7280'}}>Loading products...</p>
        ) : (
          <div style={{display: 'flex', gap: '1.5rem'}}>
            <div style={{width: '220px', flexShrink: 0}}>
              <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            </div>
            <div style={{flex: 1}}>
              <ProductsGrid />
            </div>
          </div>
        )}
      </div>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}

export default App;