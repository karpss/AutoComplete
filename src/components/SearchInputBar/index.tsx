/* eslint-disable */ 
import React from "react";
import styles from "./SearchInputBar.module.css";

type SearchInputBarProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  placeholder: string;
};


const SearchInputBar:  React.FC<SearchInputBarProps>  = ({
    
  value,
  onChange,
  inputRef,
  placeholder,
}) => {
  return (
    
  <>
  <label htmlFor="my-input">My Input:</label>
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
</>
  )
};

  
  export default SearchInputBar;