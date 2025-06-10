// SearchAndFilter.jsx
// This component provides a search and filter interface for products
// Allows users to search by product title or category, and filter results accordingly


import {
  Box,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Typography,
  Paper,
  Grid,
  InputAdornment,
  Chip
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import ClearIcon from '@mui/icons-material/Clear';

const SearchAndFilter = ({
  searchTerm,
  selectedCategory,
  categories,
  onSearchChange,
  onCategoryChange,
  onClearFilters,
  resultsCount,
  totalCount
}) => {
  const hasActiveFilters = searchTerm !== '' || selectedCategory !== 'all';

  return (
    <Paper 
      elevation={2} 
      sx={{ 
        p: 3, 
        mb: 4, 
        borderRadius: 2,
        backgroundColor: 'background.paper'
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" component="h2" sx={{ 
          display: 'flex', 
          alignItems: 'center',
          mb: 2,
          color: 'text.primary',
          fontWeight: 600
        }}>
          <FilterListIcon sx={{ mr: 1 }} />
          Search & Filter Products
        </Typography>
        
        <Grid container spacing={2} alignItems="flex-end">
          {/* Search Input */}
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              label="Search products"
              placeholder="Search by title or category..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon color="action" />
                  </InputAdornment>
                ),
                endAdornment: searchTerm && (
                  <InputAdornment position="end">
                    <Button
                      size="small"
                      onClick={() => onSearchChange('')}
                      sx={{ minWidth: 'auto', p: 0.5 }}
                    >
                      <ClearIcon fontSize="small" />
                    </Button>
                  </InputAdornment>
                )
              }}
              variant="outlined"
            />
          </Grid>
          
          {/* Category Filter */}
          <Grid item xs={12} sm={4} md={3}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                label="Category"
              >
                <MenuItem value="all">All Categories</MenuItem>
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          
          {/* Clear Filters Button */}
          <Grid item xs={12} sm={2} md={2}>
            <Button
              fullWidth
              variant="outlined"
              color="secondary"
              onClick={onClearFilters}
              disabled={!hasActiveFilters}
              startIcon={<ClearIcon />}
              sx={{ height: 56 }}
            >
              Clear
            </Button>
          </Grid>
          
          {/* Results Count */}
          <Grid item xs={12} md={3}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: { xs: 'flex-start', md: 'flex-end' },
              height: 56
            }}>
              <Typography variant="body2" color="text.secondary">
                Showing <strong>{resultsCount}</strong> of <strong>{totalCount}</strong> products
              </Typography>
            </Box>
          </Grid>
        </Grid>
        
        {/* Active Filters Display */}
        {hasActiveFilters && (
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
            <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
              Active filters:
            </Typography>
            
            {searchTerm && (
              <Chip
                label={`Search: "${searchTerm}"`}
                onDelete={() => onSearchChange('')}
                color="primary"
                variant="outlined"
                size="small"
              />
            )}
            
            {selectedCategory !== 'all' && (
              <Chip
                label={`Category: ${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`}
                onDelete={() => onCategoryChange('all')}
                color="primary"
                variant="outlined"
                size="small"
              />
            )}
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default SearchAndFilter;