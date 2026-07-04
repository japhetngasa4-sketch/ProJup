import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import useProductStore from '../store/productStore';
import useCartStore from '../store/cartStore';

function Header({ onCartClick }) {
  const { setSearchTerm, searchTerm, categories, selectedCategory, setSelectedCategory } = useProductStore();
  const { getTotalItems } = useCartStore();

  return (
    <header style={{backgroundColor: '#dc2626', color: 'white', position: 'sticky', top: 0, zIndex: 50}}>
      
      <div style={{display: 'flex', justifyContent: 'space-between', padding: '6px 16px', fontSize: '12px'}}>
        <div style={{display: 'flex', gap: '8px'}}>
          <span>Seller Center</span>
          <span>|</span>
          <span>Download</span>
          <span>|</span>
          <span>Follow us on</span>
        </div>
        <div style={{display: 'flex', gap: '8px'}}>
          <span>Support</span>
          <span>|</span>
          <span>Register</span>
          <span>|</span>
          <span>Log in</span>
        </div>
      </div>

      <nav style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 16px', gap: '16px'}}>
        <h1 style={{fontSize: '1.5rem', fontWeight: 'bold', whiteSpace: 'nowrap'}}>ProjUp.</h1>

        <div style={{display: 'flex', flex: 1, gap: '8px', margin: '0 16px'}}>
          <input
            type="text"
            placeholder="Search items here"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{flex: 1, padding: '8px 16px', borderRadius: '4px', border: 'none', color: 'black'}}
          />
          <button style={{backgroundColor: '#b91c1c', padding: '8px 16px', borderRadius: '4px', border: 'none', color: 'white', cursor: 'pointer'}}>
            <FaSearch />
          </button>
        </div>

        <button
          onClick={onCartClick}
          style={{display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.5rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer', padding: '8px'}}
        >
          <FaShoppingCart />
          <span style={{fontSize: '0.8rem', backgroundColor: 'white', color: '#dc2626', padding: '2px 8px', borderRadius: '999px', fontWeight: 'bold'}}>
            {getTotalItems()}
          </span>
        </button>
      </nav>

      <div style={{display: 'flex', gap: '16px', padding: '8px 16px', overflowX: 'auto', fontSize: '14px'}}>
        <button
          onClick={() => setSelectedCategory(null)}
          style={{whiteSpace: 'nowrap', background: 'none', border: 'none', color: 'white', cursor: 'pointer', borderBottom: !selectedCategory ? '2px solid white' : '2px solid transparent', fontWeight: !selectedCategory ? 'bold' : 'normal', paddingBottom: '4px'}}
        >
          All
        </button>
        {categories.slice(0, 7).map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setSelectedCategory(cat.slug)}
            style={{whiteSpace: 'nowrap', background: 'none', border: 'none', color: 'white', cursor: 'pointer', borderBottom: selectedCategory === cat.slug ? '2px solid white' : '2px solid transparent', fontWeight: selectedCategory === cat.slug ? 'bold' : 'normal', paddingBottom: '4px'}}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </header>
  );
}

export default Header;