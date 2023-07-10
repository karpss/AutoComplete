import React from 'react';
import styles from './SearchInputBar.module.css';

interface SearchInputBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  placeholder: string;
}

function SearchInputBar({
  value,
  onChange,
  inputRef,
  placeholder,
}: SearchInputBarProps) {
  return (
    <label htmlFor="my-input">
      My Input:
      <input
        type="text"
        id="my-input"
        className={styles.my_input}
        value={value}
        onChange={onChange}
        ref={inputRef}
        placeholder={placeholder}
        aria-label="My Input"
      />
    </label>
  );
}

export default SearchInputBar;
