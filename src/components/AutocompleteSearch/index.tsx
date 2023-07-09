/* eslint-disable */ 
import React from 'react';
import { useState, useRef } from 'react';


import SearchInputBar from '../SearchInputBar';
import ProductsList from '../ProductsList';
import { useProducts } from '../../hooks/useProducts';
import { useSearchResults } from '../../hooks/useSearchResults';
import { Product } from '../../product-type';
import styles from './AutocompleteSearch.module.css';



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
    <div   className={styles.my_container}>
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
      
      {query !== '' && searchResults.length === 0 && (
          <div>No Matches Found</div>
      )}
      
    </div>
  );
  
}

export default AutocompleteSearch;

