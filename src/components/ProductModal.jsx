import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Typography,
    Box,
    Rating,
    Chip,
    Grid,
    Divider,
    IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ProductModal = ({ open, product, onClose }) => {
    if (!product) return null;

    // Generate random stock number, API does not have stock count
    const availableStock = Math.floor(Math.random() * 50) + 1;

    // Helper to display N/A if value is missing or undefined/null
    const displayValue = (value) =>
        value === undefined || value === null || value === '' ? 'N/A' : value;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="md"
            fullWidth
            sx={{
                '& .MuiDialog-paper': {
                    borderRadius: 8,
                    padding: 2,
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                    backgroundColor: 'background.default'
                }
            }}
        >
            <DialogTitle sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pb: 1
            }}>
                <Typography variant="h5" component="h2" fontWeight={600}>
                    Product Details
                </Typography>
                <IconButton
                    onClick={onClose}
                    sx={{ color: 'grey.500' }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <DialogContent dividers>
                <Grid container spacing={3}>
                    {/* Product Image */}
                    <Grid item xs={12} md={5}>
                        <Box sx={{
                            width: '100%',
                            height: 300,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: 'white',
                            borderRadius: 2,
                            mb: 2,
                            position: 'relative',
                        }}>
                            {product.image ? (
                                <img
                                    src={product.image}
                                    alt={displayValue(product.title)}
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                        objectFit: 'contain',
                                        margin: 'auto',
                                    }}
                                />
                            ) : (
                                <Typography variant="h6" color="text.secondary">
                                    N/A
                                </Typography>
                            )}
                        </Box>
                    </Grid>

                    {/* Product Info */}
                    <Grid item xs={12} md={7}>
                        <Box sx={{ pl: { md: 2 } }}>
                            {/* Category */}
                            <Chip
                                label={displayValue(product.category ? product.category.toUpperCase() : undefined)}
                                color="primary"
                                variant="outlined"
                                size="small"
                                sx={{ mb: 2 }}
                            />

                            {/* Title */}
                            <Typography variant="h4" component="h1" gutterBottom fontWeight={600}>
                                {displayValue(product.title)}
                            </Typography>

                            {/* Rating */}
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                {product.rating && typeof product.rating.rate === 'number' ? (
                                    <>
                                        <Rating
                                            name="product-rating"
                                            value={product.rating.rate}
                                            precision={0.1}
                                            readOnly
                                            size="medium"
                                        />
                                        <Typography variant="body1" color="text.secondary" sx={{ ml: 1 }}>
                                            {product.rating.rate} ({displayValue(product.rating.count)} reviews)
                                        </Typography>
                                    </>
                                ) : (
                                    <Typography variant="body1" color="text.secondary">
                                        N/A
                                    </Typography>
                                )}
                            </Box>

                            {/* Price */}
                            <Typography variant="h3" color="primary" fontWeight={700} gutterBottom>
                                {typeof product.price === 'number'
                                    ? `$${product.price.toFixed(2)}`
                                    : 'N/A'}
                            </Typography>

                            {/* Stock */}
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                <Typography variant="body1" color="text.secondary">
                                    Available Stock:
                                </Typography>
                                <Chip
                                    label={
                                        typeof availableStock === 'number'
                                            ? `${availableStock} units`
                                            : 'N/A'
                                    }
                                    color={
                                        typeof availableStock === 'number'
                                            ? availableStock > 10
                                                ? "success"
                                                : availableStock > 5
                                                ? "warning"
                                                : "error"
                                            : "default"
                                    }
                                    size="small"
                                    sx={{ ml: 1 }}
                                />
                            </Box>

                            <Divider sx={{ my: 2 }} />

                            {/* Description */}
                            <Typography variant="h6" gutterBottom fontWeight={600}>
                                Description
                            </Typography>
                            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                                {displayValue(product.description)}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </DialogContent>

            <DialogActions sx={{ px: 3, py: 2 }}>
                <Button
                    onClick={onClose}
                    variant="outlined"
                    sx={{ mr: 1 }}
                >
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ProductModal;