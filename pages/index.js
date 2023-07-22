import React from "react";
import styled from "styled-components";
import GlobalStyles from "@/components/GlobalStyles";
import Header from "@/components/Header";
import Featured from "@/components/Featured";
import { Product } from "@/models/Product";
import { Category } from "@/models/Category";
import { mongooseConnect } from "@/lib/mongoose";
import NewProducts from "@/components/NewProducts";
import LaptopsCategory from "@/components/LaptopsCategory";
import RecommendCategory from "@/components/RecommendCategory";
import AndroidCategory from "@/components/AndroidCategory";
import IphonesCategory from "@/components/IphonesCategory";

import Service from "@/components/Service";
import Choose from "@/components/Choose";
import Footer from "@/components/Footer";
import DownMenu from "@/components/DownMenu";

const StyledPage = styled.div`
`;

export default function HomePage({
  featuredProduct,
  newProducts,
  laptopsCategory,
  androidCategory,
  iphonesCategory,
  recommendCategory,
}) {
  return (
    <StyledPage>
      <GlobalStyles />
      <Header />
      <Featured product={featuredProduct} />
      <NewProducts products={newProducts} />
      <Service />
      <RecommendCategory products={recommendCategory} />
      
      <Choose />
      <AndroidCategory products={androidCategory} />
      <IphonesCategory products={iphonesCategory} />
      <Choose />
      <LaptopsCategory products={laptopsCategory} />
      
      <Footer />
      </StyledPage>
    
  );
}

export async function getServerSideProps() {
  const featuredProductId = "64b2c44cb49aa244001dd3fa";
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 36,
  });
  

  const laptops = await Category.findOne({ name: 'Laptops' });
  const laptopsCategory= await Product.find({ category: laptops._id });

  const recommendations = await Category.findOne({ name: 'Recommendations' });
  const recommendCategory= await Product.find({ category: recommendations._id });



  const androidCategory = await Product.find({
    category: { $in: "64b1d7eeb49aa244001dd3a0" },
  });

  const iphonesCategory = await Product.find({
    category: { $in: "64af4293225a6aa6c509226b" },
  });

  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      laptopsCategory: JSON.parse(JSON.stringify(laptopsCategory)),
      recommendCategory: JSON.parse(JSON.stringify(recommendCategory)),
      androidCategory: JSON.parse(JSON.stringify(androidCategory)),
      iphonesCategory: JSON.parse(JSON.stringify(iphonesCategory)),
    },
  };
}
