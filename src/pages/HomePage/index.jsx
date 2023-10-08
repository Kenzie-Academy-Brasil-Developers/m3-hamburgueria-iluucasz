import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { burgerApi } from "../../services/api";
import { LoadingList } from "../../components/loadingList";


export const HomePage = ({ setIsVisible, addCart, cartShopping }) => {
   const [productList, setProductList] = useState([]);

   const [filteredProductList, setFilteredProductList] = useState([]);

   const filterCart = (value) => {
      if (!value.trim()) {
         setFilteredProductList(productList);
         return
      }
      const cartFiltered = productList.filter(cart => cart.category.toLowerCase().includes(value.toLowerCase()) || cart.name.toLowerCase().includes(value.toLowerCase()));
      setFilteredProductList(cartFiltered);
   }

   const [loading, setLoading] = useState(false);

   useEffect(() => {
      const getProduct = async () => {
         try {
            setLoading(true)
            const { data } = await burgerApi.get("/products");
            setProductList(data);
            setFilteredProductList(data);
         } catch (erro) {
            console.log(erro);
         } finally {
            setLoading(false);
         }
      };
      getProduct();
   }, []);

   return (
      <>
         <Header setIsVisible={setIsVisible} cartShopping={cartShopping} />
         <main >
            {loading ? <LoadingList /> : <ProductList productList={filteredProductList} addCart={addCart} filterCart={filterCart} />}
         </main>
      </>
   );
};
