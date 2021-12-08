import React from "react";
import {
  BoxIcon,
  BoxLogo,
  HeaderContainer,
  Search,
  TextField,
} from "./header.styled";
import { FiUser } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoIosCart } from "react-icons/io";

const Header = () => {
  return (
    <HeaderContainer>
      <BoxLogo>
        <img src="https://d8vlg9z1oftyc.cloudfront.net/multicoisashomolog/multicoisashomolog-file-manager/ICONS/logo-multicoisas-2x.png" />
      </BoxLogo>

      <Search>
        <IoIosSearch />

        <TextField placeholder="O que você precisa?" />
      </Search>
      <BoxIcon>
        <ul>
          <li>
            <FiUser /> <h4> Minha Conta</h4>
          </li>
          <li>
            <IoMdHelpCircleOutline /> <h4> ajuda</h4>
          </li>
          <li>
            <IoIosCart /> <h4>Meu Carrinho</h4>
          </li>
        </ul>
      </BoxIcon>
    </HeaderContainer>
  );
};
export { Header };
