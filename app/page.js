import React from "react";
import BannerPage from "./components/Banner/Page";
import DiscountProduct from "./components/DiscountProducts/discount";
import Category from "./components/Category/category";
import Special from "./components/SpecialCategory/special";
import Services from "./components/Services/services";

export default function MainLayout() {
  return <div>
    <BannerPage></BannerPage>
    <DiscountProduct></DiscountProduct>
    <Category></Category>
    <Special></Special>
    <Services></Services>
  </div>;

}
