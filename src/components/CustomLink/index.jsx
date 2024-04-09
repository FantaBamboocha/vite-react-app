import { useMatch, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setCategory } from "../../redux/slices/searchParams";
import { requestData } from "../../redux/slices/reqPizzaSlice";
const CustomLink = ({ children, to, serverTitle }) => {
  const match = useMatch(to);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setCategory(serverTitle));
    dispatch(requestData({ category: serverTitle }));
  };

  return (
    <li className={` ${match ? "active" : ""}`} onClick={handleClick}>
      {children}
    </li>
  );
};

export default CustomLink;
