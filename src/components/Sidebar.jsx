import useProductStore from '../store/productStore';

function Sidebar({ isOpen, onClose }) {
  const { categories, selectedCategory, setSelectedCategory } = useProductStore();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <aside style={{backgroundColor: 'white', padding: '1rem', borderRadius: '8px'}}>
      <h2 style={{fontWeight: 'bold', fontSize: '1rem', marginBottom: '1rem', borderLeft: '4px solid #dc2626', paddingLeft: '8px'}}>
        ALL CATEGORIES
      </h2>

      <ul style={{listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '4px'}}>
        <li>
          <button
            onClick={() => handleCategoryClick(null)}
            style={{
              width: '100%', textAlign: 'left', padding: '8px',
              borderRadius: '4px', cursor: 'pointer', border: 'none',
              backgroundColor: !selectedCategory ? '#dc2626' : 'transparent',
              color: !selectedCategory ? 'white' : 'black',
              fontWeight: !selectedCategory ? 'bold' : 'normal'
            }}
          >
            All Products
          </button>
        </li>
        {categories.map((cat) => (
          <li key={cat.slug}>
            <button
              onClick={() => handleCategoryClick(cat.slug)}
              style={{
                width: '100%', textAlign: 'left', padding: '8px',
                borderRadius: '4px', cursor: 'pointer', border: 'none',
                backgroundColor: selectedCategory === cat.slug ? '#dc2626' : 'transparent',
                color: selectedCategory === cat.slug ? 'white' : 'black',
                fontWeight: selectedCategory === cat.slug ? 'bold' : 'normal'
              }}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;