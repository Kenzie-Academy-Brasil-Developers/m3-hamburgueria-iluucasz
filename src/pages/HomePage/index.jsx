import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { burgerApi } from "../../services/api";
import { LoadingList } from "../../components/loadingList";


export const HomePage = ({ setIsVisible, addCart }) => {
   //produtos
   const [productList, setProductList] = useState([]);

   //Tela de carregamento
   const [loading, setLoading] = useState(false);

   //requisição dos dados do card
   useEffect(() => {
      const getProduct = async () => {
         try {
            setLoading(true)
            const { data } = await burgerApi.get("/products");
            setProductList(data);
         } catch (erro) {
            console.log(erro)
         } finally {
            setLoading(false);
         }
      };
      getProduct();
   }, []);

   return (
      <>
         <Header setIsVisible={setIsVisible} />
         <main >
            {loading ? <LoadingList /> : <ProductList productList={productList} addCart={addCart} />}
         </main>
      </>
   );
};
