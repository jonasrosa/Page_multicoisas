import styled from "styled-components";
import { colors } from "../../ui/colors";
import { fontFamaly } from "../../ui/font";

const NavbarContainer = styled.nav`
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid ${colors.gray};
  & ul {
    width: 60%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    & li {
      font-size: 16px;
      font-family: ${fontFamaly.font03};
      color: ${colors.black};
      font-weight: 600;
      display: flex;

      &:hover {
        color: ${colors.yellow};
      }
    }
  }
`;
const BoxAddress = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${colors.gray};
  width: 17%;
  height: 6vh;
  & h4 {
    font-size: 14px;
    font-family: ${fontFamaly.font03};
    color: ${colors.black};
    :hover {
      color: ${colors.yellow};
    }
  }
`;
const BoxIconAddress = styled.div`
  display: flex;
  font-size: 20px;
  color: ${colors.yellow};
`;
const ButtonAddress = styled.button`
  border: none;
  background: none;
  font-size: 12px;
  font-family: ${fontFamaly.font03};
  display: flex;
  align-items: center;
  color: ${colors.yellow};
  a {
    :hover {
      color: ${colors.yellow};
    }
  }
`;
export { NavbarContainer, BoxAddress, ButtonAddress, BoxIconAddress };
