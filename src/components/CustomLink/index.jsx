import { useMatch, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setCategory } from "../../redux/slices/searchParams";
const CustomLink = ({ children, to, ...props }) => {
  const { serverTitle } = props;
  const match = useMatch(to);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    navigate(to);
    dispatch(setCategory(serverTitle));
  };

  return (
    <li className={` ${match ? "active" : ""}`} onClick={handleClick}>
      {children}
    </li>
  );
};

export default CustomLink;
