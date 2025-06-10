// App.jsx
// App that lists products from an API 

import { useState, useEffect, useMemo } from 'react';
import { Container, Typography } from '@mui/material';
import ProductGrid from './components/ProductGrid';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorDisplay from './components/ErrorDisplay';
import ProductModal from './components/ProductModal';
import { fetchProducts } from './services/api';
import SearchAndFilter from './components/SearchAndFilter'; 
import './App.css';

function App() {
  // STATE VARIABLES
  // - products: array of product objects fetched from the API
  // - loading: boolean to indicate if data is being fetched
  // - error: string to hold any error message from the API call
  // - selectedProduct: object to hold the product details for the modal
  // - modalOpen: boolean to control the visibility of the product details modal
  // - searchTerm: string to hold the current search term for filtering products
  // - selectedCategory: string to hold the currently selected category for filtering products
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');



  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  // Get unique categories for filter dropdown
  // useMemo to memoize the categories for performance optimization
  const categories = useMemo(() => {
    // Extract unique categories from products
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    return uniqueCategories.sort();
  }, [products]);

    // Filter products based on search term and category
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);


  // Function to handle product click, opens the modal with product details
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  // Handlers for search and category selection
  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
  };

  // Render loading spinner or error message if applicable
  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorDisplay error={error} />;

  return (
    <>
      <Container maxWidth="lg" sx={{ 
        mt: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4, 
        
        
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          align="center"
          sx={{
            fontWeight: 700,
            letterSpacing: 1,
            mb: 6,
            color: 'primary.main'
          }}
        >
          Our Products
        </Typography>

        <SearchAndFilter
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          categories={categories}
          onSearchChange={handleSearchChange}
          onCategoryChange={handleCategoryChange}
          onClearFilters={handleClearFilters}
          resultsCount={filteredProducts.length}
          totalCount={products.length}
        />


        <ProductGrid products={filteredProducts} onProductClick={handleProductClick} />
      </Container>
      
      <ProductModal 
        open={modalOpen}
        product={selectedProduct}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default App;

