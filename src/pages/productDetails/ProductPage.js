import React,{useEffect} from "react";
import ProductDetail from "./ProductDetail";
import FAQ from "./FAQ";
import Footer from "../landingpage/footer/Footer";
import ProductStory from "./ProductStory";
const ProductPage = () => {
  useEffect(() => {
 
    window.scrollTo(0, 0);
  }, []);
  return (
    <div >
    
      <ProductDetail />
      <ProductStory/>
      <FAQ/>
      <Footer/>
    </div>
  );
};

export default ProductPage;
