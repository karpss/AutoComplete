import React from 'react';
import styles from './ProductsList.module.css';

import { Product } from '../../product-type';
import HighlightTitleText from '../../util/HighlightTitleText';

interface ProductsListProps {
  products: Product[];
  handleProductClick: (product: Product) => void;
  highlightedText: string;
}

function ProductList({
  products,
  handleProductClick,
  highlightedText,
}: ProductsListProps) {
  return (
    <div className={styles.result_container}>
      {products.map((product) => (
        <div
          key={product.id}
          className={styles.result_list}
          onClick={() => handleProductClick(product)}
          onKeyDown={(event) => {
            // Handle key events for keyboard accessibility
            if (event.key === 'Enter' || event.key === ' ') {
              handleProductClick(product);
            }
          }}
          // Addded a role attribute to indicate that the element is interactive
          role="button"
          // Added a tabIndex attribute to make the element focusable
          tabIndex={0}
        >
          <p className={styles.product_title}>
            {HighlightTitleText(product.title, highlightedText)}
          </p>
          <img
            src={product.image}
            alt="product"
            className={styles.product_image}
          />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
