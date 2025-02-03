import React from "react";
import BannerPage from "./components/Banner/Page";
import DiscountProduct from "./components/DiscountProducts/discount";
import Category from "./components/Category/category";


export default function MainLayout() {
  return <div>
    <BannerPage></BannerPage>
    <DiscountProduct></DiscountProduct>
    <Category></Category>
  </div>;

}
