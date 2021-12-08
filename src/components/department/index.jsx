import React, { useEffect, useState, useRef } from "react";
import {
  BoxDepartment,
  ButtonCarousel,
  ContainerCarousel,
  DepartmentContaner,
} from "./Department.style";
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";

import { Api } from "../../Api/api";

const Department = () => {
  const [postIcons, setPostIcons] = useState([]);
  useEffect(() => {
    Api(setPostIcons);
  }, []);
  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
    console.log(carousel.current.offsetWidth);
  };
  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  const carousel = useRef(null);
  return (
    <DepartmentContaner>
      <div>
        <ButtonCarousel onClick={handleLeftClick}>
          <IoArrowBack />
        </ButtonCarousel>
      </div>
      <ContainerCarousel>
        <h2>Navegue por departamento</h2>
        <ul ref={carousel}>
          {postIcons.map((post) => {
            const { id, name, icon_image, groupid } = post;
            if (groupid == 1) {
              return (
                <>
                  <li key={id}>
                    <BoxDepartment>
                      <img src={icon_image} />
                    </BoxDepartment>
                    <h4>{name}</h4>
                  </li>
                  <li key={id}>
                    <BoxDepartment>
                      <img src={icon_image} />
                    </BoxDepartment>
                    <h4>{name}</h4>
                  </li>
                </>
              );
            }
          })}
        </ul>
      </ContainerCarousel>
      <div>
        <ButtonCarousel onClick={handleRightClick}>
          <IoArrowForward />
        </ButtonCarousel>
      </div>
    </DepartmentContaner>
  );
};
export { Department };
