// NoResults.jsx
// Component to display when no products match the search criteria

import { Box, Typography, Button } from '@mui/material';
import SearchOffIcon from '@mui/icons-material/SearchOff';

// PARAMS
// onClearFilters: Function to call when the "Clear All Filters" button is clicked
// hasFilters: Boolean indicating if there are active filters applied

// Returns a styled component that displays a message when no products are found
const NoResults = ({ onClearFilters, hasFilters }) => (
  <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    py: 8,
    textAlign: 'center',
    bgcolor: 'background.paper',
  }}>
    <SearchOffIcon sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
    <Typography variant="h5" gutterBottom color="text.primary">
      No products found
    </Typography>
    <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 400 }}>
      {hasFilters 
        ? "We couldn't find any products matching your search criteria. Try adjusting your filters."
        : "No products are currently available."
      }
    </Typography>
    {hasFilters && (
      <Button 
        variant="contained" 
        onClick={onClearFilters}
        sx={{ mt: 1 }}
      >
        Clear All Filters
      </Button>
    )}
  </Box>
);

export default NoResults;