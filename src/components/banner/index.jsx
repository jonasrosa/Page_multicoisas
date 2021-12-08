import React, { useEffect, useState } from "react";
import { Api } from "../../Api/api";
import { Card } from "./card/inde";
import { BannerContainer } from "./Banner.style";

const Banner = () => {
  const [postBanner, setPostBanner] = useState([]);
  useEffect(() => {
    Api(setPostBanner);
  }, []);

  return (
    <BannerContainer>
      {postBanner.map((banner) => {
        if (banner.id == 2) {
          return (
            <>
              <img src={banner.icon_image} width="1200" />
            </>
          );
        }
      })}
      <Card/>
    </BannerContainer>
  );
};
export { Banner };
