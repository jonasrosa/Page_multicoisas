import React from "react";
import { CardContainer, CardBox } from "./Card.style";
import { ImHome3 } from "react-icons/im";
import { IoStorefront } from "react-icons/io5";
import { IoCardOutline } from "react-icons/io5";
import { IoGiftSharp } from "react-icons/io5";
import { IoHeadsetOutline } from "react-icons/io5";

const Card = () => {
  return (
    <CardContainer>
      <CardBox>
        <div>
          <i>
            <ImHome3 />
          </i>
          <h4>Receba em casa</h4>
        </div>
        <div>
          <i>
            <IoStorefront />
          </i>
          <h4>Retire na loja física</h4>
        </div>
        <div>
          <i>
            <IoHeadsetOutline />
          </i>
          <h4>Suporte de vendas</h4>
        </div>
        <div>
          <i>
            <IoCardOutline />
          </i>
          <h4>Pagamento facilitado</h4>
        </div>
        <div>
          <i>
            <IoGiftSharp />
          </i>
          <h4>Entrega em até 1 dia últil</h4>
        </div>
      </CardBox>
    </CardContainer>
  );
};
export { Card };
