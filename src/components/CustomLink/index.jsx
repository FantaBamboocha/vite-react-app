import { useMatch } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setCategory } from "../../redux/slices/searchParams.ts";
const CustomLink = (props) => {
  const { children, to, serverTitle } = props;
  const match = useMatch(to);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCategory(serverTitle));
  };

  return (
    <li className={` ${match ? "active" : ""}`} onClick={handleClick}>
      {children}
    </li>
  );
};

export default CustomLink;
