import React from "react";
import BannerPage from "./Banner/Page";
import DiscountProduct from "./DiscountProducts/Page";

export default function MainLayout() {
  return <div>
    <BannerPage></BannerPage>
    <DiscountProduct></DiscountProduct>
  </div>;
}
