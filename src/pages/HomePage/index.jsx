import { useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);   

   return (
      <>
         <Header />
         <main>
            <ProductList productList={productList} />
         </main>
      </>
   );
};
