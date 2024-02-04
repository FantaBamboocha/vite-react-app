import { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import debounce from "lodash.debounce";

import { setSearchValue } from "../../redux/slices/filter";

import styles from "./styles.module.scss";

const Search = ({ searchValue }) => {
  const [localSearchValue, setLocalSearchValue] = useState("");
  const inputRef = useRef();
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(setSearchValue(""));
    setLocalSearchValue("");
    inputRef.current.focus();
  };

  const handleDebouncedChange = useCallback(
    debounce((e) => {
      dispatch(setSearchValue(e.target.value));
    }, 1000),
    []
  );
  const handleChange = (e) => {
    setLocalSearchValue(e.target.value);
    handleDebouncedChange(e);
  };

  return (
    <div className={styles.searchWrapper}>
      <svg
        className={styles.searchIcon}
        xmlns="http://www.w3.org/2000/svg"
        height="16"
        width="16"
        viewBox="0 0 512 512"
      >
        <path d="M368 208A160 160 0 1 0 48 208a160 160 0 1 0 320 0zM337.1 371.1C301.7 399.2 256.8 416 208 416C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208c0 48.8-16.8 93.7-44.9 129.1L505 471c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L337.1 371.1z" />
      </svg>
      <input
        ref={inputRef}
        value={localSearchValue}
        onChange={handleChange}
        type="text"
        placeholder="Поиск..."
      />
      {localSearchValue && (
        <svg
          className={styles.clearIcon}
          onClick={handleClear}
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="12"
          viewBox="0 0 384 512"
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      )}
    </div>
  );
};

export default Search;
