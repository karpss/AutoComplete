import { useState, useEffect } from 'react';
import { Product } from '../product-type';

function useSearchResults(products: Product[], query: string) {
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  useEffect(() => {
    setSearchResults(
      products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, products]);

  return { searchResults };
}

export default useSearchResults;
