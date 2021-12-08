import styled from "styled-components";
import { colors } from "../../ui/colors";
import { fontFamaly } from "../../ui/font";

const DepartmentContaner = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const ContainerCarousel = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 45vh;

  & h2 {
    margin: 20px 0;
    font-family: ${fontFamaly.font03};
    font-size: 22px;
    font-weight: 600;
    color: ${colors.black};
  }
  & ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: initial;
    overflow-x: auto;
    scroll-behavior: smooth;
    transition: 2ms;
    ::-webkit-scrollbar {
      display: none;
    }

    & li {
      width: 100%;
      height: 80%;
      display: inline-block;
      margin: 10px;
      text-align: center;
      cursor: pointer;
      transition: 0.5s;
      :hover {
        & h4 {
          border-bottom: 1px solid ${colors.black};
        }
        & div {
          background: ${colors.yellow};
          height: 110px;

          & img {
            filter: contrast(30%);
          }
        }
      }

      & h4 {
        font-family: ${fontFamaly.font03}, sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: ${colors.gray2};
        margin: 10px 0;
      }
    }
  }
`;
const BoxDepartment = styled.div`
  height: 100px;
  width: 100px;
  background: ${colors.gray};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 15px;
  border-radius: 8px;
  flex: none;
  & img {
    height: 50px;
    width: 50px;
  }
`;
const ButtonCarousel = styled.button`
  width: 2.25rem;
  height: 2.25rem;

  margin-top: 10px;

  border: none;
  border-radius: 50%;
  background-color: ${colors.yellow};
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-around;

  :hover {
    background-color: ${colors.yellow2};
  }
`;
export { DepartmentContaner, BoxDepartment, ButtonCarousel, ContainerCarousel };
