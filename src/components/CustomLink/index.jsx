import { Link, useMatch, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setCategory } from "../../redux/slices/filter";
import { requestData } from "../../redux/slices/reqPizzaSlice";
const CustomLink = ({ children, ...props }) => {
  const match = useMatch(`/category/${props.serverTitle}`);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(`/category/${props.serverTitle}`);
    dispatch(setCategory(props.serverTitle));
    dispatch(requestData({ category: props.serverTitle }));
  };

  return (
    <li className={` ${match ? "active" : ""}`} onClick={handleClick}>
      {children}
    </li>
  );
};

export default CustomLink;
