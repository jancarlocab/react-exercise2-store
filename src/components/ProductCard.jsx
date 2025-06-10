// ProductCard.jsx
// Accepts a product object and displays its information in a card format

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Rating
} from '@mui/material';


// PARAMS
// product: Object containing product details
// onClick: Function to call when the card is clicked
const ProductCard = ({ product, onClick }) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        height: '100%',
        width: '100%',
        borderRadius: 2,
        boxShadow: 2,
        cursor: 'pointer',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: 6,
          backgroundColor: 'background.paper',
          '& .MuiCardMedia-root': {
            transform: 'scale(1.05)'
          }
        }
      }}
    >
      <ProductImage image={product?.image} title={product?.title} />
      <ProductInfo product={product} />
    </Card>
  );
};

// Product Image Component
const ProductImage = ({ image, title }) => (
  <Box sx={{
    height: 200,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    overflow: 'hidden',
    flexShrink: 0
  }}>
    {image ? (
      <CardMedia
        component="img"
        image={image}
        alt={title || 'N/A'}
        sx={{
          height: 'auto',
          maxHeight: '80%',
          width: 'auto',
          maxWidth: '80%',
          objectFit: 'contain',
          transition: 'transform 0.5s ease-in-out'
        }}
      />
    ) : (
      <Typography variant="body2" color="text.secondary">
        N/A
      </Typography>
    )}
  </Box>
);

// Product Info Component
const ProductInfo = ({ product }) => (
  <CardContent sx={{
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    p: 2
  }}>
    <ProductCategory category={product?.category} />
    <ProductTitle title={product?.title} />
    <ProductRatingAndPrice 
      rating={product?.rating} 
      price={product?.price} 
    />
  </CardContent>
);

// Product Category Component
const ProductCategory = ({ category }) => (
  <Typography
    variant="body2"
    color="text.secondary"
    textTransform="uppercase"
    letterSpacing={0.5}
    fontWeight={500}
    sx={{
      width: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }}
  >
    {category || 'N/A'}
  </Typography>
);

// Product Title Component
const ProductTitle = ({ title }) => (
  <Typography
    variant="body1"
    component="h3"
    fontWeight={600}
    sx={{
      mt: 1,
      mb: 1,
      width: '100%',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden',
      minHeight: '3em'
    }}
  >
    {title || 'N/A'}
  </Typography>
);

// Product Rating and Price Component
const ProductRatingAndPrice = ({ rating, price }) => (
  <Box sx={{
    mt: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }}>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
      <Rating
        name="read-only"
        value={rating && typeof rating.rate === 'number' ? rating.rate : 0}
        precision={0.1}
        readOnly
        size="small"
      />
      <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
        ({rating && typeof rating.count === 'number' ? rating.count : 'N/A'})
      </Typography>
    </Box>
    <Typography
      variant="h6"
      color="primary"
      fontWeight={700}
    >
      {typeof price === 'number' ? `$${price.toFixed(2)}` : 'N/A'}
    </Typography>
  </Box>
);

export default ProductCard;
