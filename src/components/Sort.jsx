import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setSortProperty } from "../redux/slices/searchParams";

const Sort = () => {
  const sortRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const category = useSelector((state) => state.params.category);

  const optionsToSort = {
    rating: "популярности",
    priceUp: "возрастанию цены",
    priceDown: "убыванию цены",
  };

  const [selectedOption, setSelectedOption] = useState("популярности");
  const [visiblePopup, setVisiblePopup] = useState(false);

  const handleSelectOption = (serverSortProperty, option) => {
    dispatch(setSortProperty(serverSortProperty));
    setSelectedOption(option);
    setVisiblePopup(false);
    navigate(`/category/${category}?sort=${serverSortProperty}`);
  };

  const toggleVisiblePopup = () => {
    setVisiblePopup((prevVisiblePopup) => !prevVisiblePopup);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setVisiblePopup(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label" onClick={toggleVisiblePopup}>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span>{selectedOption}</span>
      </div>
      {visiblePopup && (
        <div className="sort__popup">
          <ul>
            {Object.entries(optionsToSort).map(
              ([serverSortProperty, option]) => (
                <li
                  key={serverSortProperty}
                  onClick={() => handleSelectOption(serverSortProperty, option)}
                  className={selectedOption === option ? "active" : ""}
                >
                  {option}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
