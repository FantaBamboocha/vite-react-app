import { FC } from "react";
import { useMatch } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setCategory } from "../../redux/slices/search-params/slice.js";
import { CategoryEnum } from "../../@types/enums";

type CustomLinkProps = {
  children: React.ReactNode;
  to: string;
  serverTitle: CategoryEnum;
};

const CustomLink: FC<CustomLinkProps> = ({ children, to, serverTitle }) => {
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
