// ProductGrid.jsx
// This component displays a grid of product cards.


import { Grid } from '@mui/material';
import ProductCard from './ProductCard';
import NoResults from './NoResults';

// PARAMS
// products: Array of product objects to display
// onProductClick: Function to call when a product card is clicked

// Returns a grid of product cards, or a "No Results" message if no products are found
const ProductGrid = ({ products, onProductClick }) => {
  if (products.length === 0) {
    return <NoResults hasFilters={true} />;
  }
  return (
    <Grid container
      spacing={2}
      justifyContent="center"
    
    >
      {/* For each product, make a Product Card displaying their info (compact view) */}
      {products.map((product) => (
        <Grid
          item
          key={product.id}
          xs={12}
          sm={6}
          md={4}
          lg={3}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
            boxSizing: 'border-box',
            justifyContent: 'center'
          }}
        >
          <ProductCard 
            product={product} 
            onClick={() => onProductClick(product)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;