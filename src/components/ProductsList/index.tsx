/* eslint-disable */ 
import React from 'react';
import styles from './ProductsList.module.css';

import { Product } from '../../product-type';

interface ProductListProps {
  products: Product[];
  handleProductClick: (product: Product) => void;
  
};

const ProductList: React.FC<ProductListProps> = ({
  products,
  handleProductClick,
  
}) => {
  return (
    <div className={styles.resultProductContainer}>
      {products.map((product) => (
        <div
          key={product.id}
          
          className={styles.resultList}
          onClick={() => handleProductClick(product)}
        >
          <p className="productTitle">{(product.title)}</p>
          <img src={product.image} alt="product-image" className={styles.productImage} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;