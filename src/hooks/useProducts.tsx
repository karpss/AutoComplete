/* eslint-disable */ 
import { useState, useEffect } from 'react';
import { Product } from '../product-type';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (!response.ok) {
        throw new Error(`An error occurred: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError((error as Error).message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, error };
};