import styled from "styled-components";
import { colors } from "../../ui/colors";
import { fontFamaly } from "../../ui/font";

const HeaderContainer = styled.header`
  background: #f9fafc;
  width: 100%;
  height: 13vh;
  border: 1px solid ${colors.gray};

  display: flex;
  justify-content: space-space-around;
  align-items: center;

`;
const BoxLogo= styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;

& img{
  height: 32px;
  width: 172px;
}
`
const BoxIcon = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  & ul{
    display: flex;
  }
  & li{
    display: flex;
    align-items: center;
    justify-content:initial;
    margin-left: 10px;
    
  }
  & h4{
    font-family: ${fontFamaly.font03};
    font-size: 12px;
    margin-top: 10px;
    margin-left: 15px; 
    color :${colors.black};
    :hover{
      color: ${colors.yellow};
    }

  }
`;
const Search = styled.div`:hover{
  border: 1px solid ${colors.yellow};
  }
  display: flex;
  align-items: center;
  border: 1px solid ${colors.gray};
  border-radius: 5px;
  width: 40%;
  height: 60%;
  padding: 10px;
  font-size: 30px;
  
 
  
`;



const TextField=styled.input`
    outline: none;
    width: 90%;
    height: 100%;
    border: none;
    font-size: 16px;
    font-family: ${fontFamaly.font02};
    margin-left: 5px;

`

export { HeaderContainer, BoxIcon, Search,TextField, BoxLogo };
