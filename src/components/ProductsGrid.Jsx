import ProductCard from './ProductCard';
import useProductStore from '../store/productStore';

function ProductsGrid() {
  const { filteredProducts } = useProductStore();

  if (filteredProducts.length === 0) {
    return (
      <div style={{textAlign: 'center', padding: '4rem'}}>
        <p style={{color: '#6b7280'}}>No products found</p>
      </div>
    );
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1rem'
    }}>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsGrid;