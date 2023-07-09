import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ProductsList from '..';

describe('ProductsList', () => {
  const products = [
    {
      id: 1,
      title: 'Product 1',
      image: 'image1.jpg',
    },
    {
      id: 2,
      title: 'Product 2',
      image: 'image2.jpg',
    },
  ];

  it('renders the list of products', () => {
    const { getByText } = render(
      <ProductsList
        products={products}
        handleProductClick={() => {}}
        highlightedText=""
      />
    );

    expect(getByText('Product 1')).toBeInTheDocument();
    expect(getByText('Product 2')).toBeInTheDocument();
  });

  it('calls the handleProductClick handler when a product is clicked', () => {
    const handleProductClick = vi.fn();
    const { getByText } = render(
      <ProductsList
        products={products}
        handleProductClick={handleProductClick}
        highlightedText=""
      />
    );

    fireEvent.click(getByText('Product 1'));
    expect(handleProductClick).toHaveBeenCalledWith(products[0]);
  });
});
