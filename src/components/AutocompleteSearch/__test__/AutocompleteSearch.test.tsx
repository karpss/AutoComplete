import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import AutocompleteSearch from '..';

describe('AutocompleteSearch', () => {
  it('renders search input bar', () => {
    render(<AutocompleteSearch />);
    const searchInput = screen.getByPlaceholderText('Search...');
    expect(searchInput).toBeInTheDocument();
  });

  it('renders no matches found when no results', () => {
    render(<AutocompleteSearch />);
    const searchInput = screen.getByPlaceholderText('Search...');
    fireEvent.change(searchInput, { target: { value: 'nonexistent' } });
    const noMatches = screen.getByText('No Matches Found');
    expect(noMatches).toBeInTheDocument();
  });
});
