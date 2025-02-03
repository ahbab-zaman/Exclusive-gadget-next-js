import React from "react";
import BannerPage from "./components/Banner/Page";
import DiscountProduct from "./components/DiscountProducts/discount";


export default function MainLayout() {
  return <div>
    <BannerPage></BannerPage>
    <DiscountProduct></DiscountProduct>
  </div>;

}
