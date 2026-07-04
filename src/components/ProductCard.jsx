import { FaShoppingCart } from 'react-icons/fa';
import useCartStore from '../store/cartStore';

function ProductCard({ product }) {
  const { addToCart } = useCartStore();

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col gap-3" style={{backgroundColor: 'white'}}>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-cover rounded"
      />

      <p className="text-xs text-gray-500 uppercase">{product.category}</p>

      <h3 className="font-semibold text-sm">{product.title}</h3>

      <div className="flex items-center justify-between">
        <span className="text-primary font-bold">${product.price.toFixed(2)}</span>
        <span className="text-xs text-gray-500">⭐ {product.rating}</span>
      </div>

      <button
        onClick={() => addToCart(product)}
        className="bg-primary text-white py-2 rounded flex items-center justify-center gap-2 hover:bg-orange-600"
      >
        <FaShoppingCart /> Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;