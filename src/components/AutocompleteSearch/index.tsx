/* eslint-disable */ 
import React from 'react';
import { useState, useRef } from 'react';


import SearchInputBar from '../SearchInputBar';
import ProductsList from '../ProductsList';
import { useProducts } from '../../hooks/useProducts';
import { useSearchResults } from '../../hooks/useSearchResults';
import { Product } from '../../product-type';


const AutocompleteSearch = () => {
  
    const [query, setQuery] = useState('');
  const { products } = useProducts();
  const { searchResults } = useSearchResults(products, query);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleProductClick = (product: Product) => {
    alert(`You have selected ${product.title}`);
    setQuery('');
  };

  return (
    <div >
      <SearchInputBar
        value={query}
        onChange={handleQueryChange}
        inputRef={inputRef}
        placeholder="Search..."
      />

      {query !== '' && searchResults.length > 0 && (
        <ProductsList
          products={searchResults}
          handleProductClick={handleProductClick}
          highlightedText={query}
        />
      )}
      
      
      
    </div>
  );
  
}

export default AutocompleteSearch;

