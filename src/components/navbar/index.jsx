import React, { useEffect, useState } from "react";
import { Api } from "../../Api/api";
import {
  BoxAddress,
  NavbarContainer,
  ButtonAddress,
  BoxIconAddress,
} from "./navbar.style";
import { IoMdMenu } from "react-icons/io";
import { IoMdSync } from "react-icons/io";
import { IoStorefront } from "react-icons/io5";

const Navbar = () => {
  const [postNav, setPostNav] = useState([]);
  useEffect(() => {
    Api(setPostNav);
  }, []);
  return (
    <NavbarContainer>
      <ul>
        {postNav.map((postsNav) => {
          if (postsNav.id == 3) {
            return (
              <li>
                <div>
                  <IoMdMenu />
                </div>
                Todos os {postsNav.name}
              </li>
            );
          }
          if (postsNav.groupid == 3 && postsNav.id != 3) {
            return (
              <a href={postsNav.url}>
                <li>{postsNav.name}</li>
              </a>
            );
          }
        })}
      </ul>
      <BoxAddress>
        <IoStorefront />
        <h4>Batista Oliveira - Loja 177</h4>
      </BoxAddress>
      {postNav.map((postStore) => {
        if (postStore.id == 9) {
          return (
            <>
              <BoxIconAddress>
                <IoMdSync />
                <ButtonAddress>
                  <a href={postStore.url}>{postStore.name}</a>
                </ButtonAddress>
              </BoxIconAddress>
            </>
          );
        }
      })}
    </NavbarContainer>
  );
};
export { Navbar };
