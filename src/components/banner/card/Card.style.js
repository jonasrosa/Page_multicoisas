import styled from "styled-components";
import { colors } from "../../../ui/colors";
import { fontFamaly } from "../../../ui/font";

const CardContainer = styled.div`
  display: inline-block;
  position: relative;

  bottom: 20px;

  width: 50%;
  height: 5rem;
  background: ${colors.white};
  box-shadow: 5px 10px 30px ${colors.gray};
  z-index: 10;
`;
const CardBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding: 5px;
  & div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
    & i {
      font-size: 20px;
      padding: 2px;
    }
    & h4 {
      font-size: 14px;
      font-family: ${fontFamaly.font3}, sans-serif;
      font-weight: 500;
      margin-left: 5px;
    }
  }
`;
export { CardContainer, CardBox };
