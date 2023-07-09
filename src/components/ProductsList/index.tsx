/* eslint-disable */ 
import React from 'react';
import styles from './ProductsList.module.css';

import { Product } from '../../product-type';

interface ProductsListProps {
  products: Product[];
  handleProductClick: (product: Product) => void;
  
};

const ProductList: React.FC<ProductsListProps> = ({
  products,
  handleProductClick,
  
}) => {
  return (
    <div className={styles.result_container}>
      {products.map((product) => (
        <div
          key={product.id}
          
          className={styles.result_list}
          onClick={() => handleProductClick(product)}
        >
          <p className={styles.product_title}>{(product.title)}</p>
          <img src={product.image} alt="product-image" className={styles.product_image} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;