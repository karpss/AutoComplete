import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import SearchInputBar from '..';

describe('SearchInputBar', () => {
  it('renders the input with the correct value and placeholder', () => {
    const { getByLabelText } = render(
      <SearchInputBar
        value="test"
        onChange={() => {}}
        inputRef={React.createRef()}
        placeholder="Enter text"
      />
    );

    const input = getByLabelText('My Input') as HTMLInputElement;
    expect(input.value).toBe('test');
    expect(input.placeholder).toBe('Enter text');
  });

  it('calls the onChange handler when the input value changes', () => {
    const onChange = vi.fn();
    const { getByLabelText } = render(
      <SearchInputBar
        value=""
        onChange={onChange}
        inputRef={React.createRef()}
        placeholder=""
      />
    );

    const input = getByLabelText('My Input');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(onChange).toHaveBeenCalled();
  });
});
