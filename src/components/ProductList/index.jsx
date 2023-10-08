import { useRef, useState } from "react";
import { ProductCard } from "./ProductCard";
import { MdSearch } from "react-icons/md";
import style from "./style.module.scss";

export const ProductList = ({ productList, addCart, filterCart }) => {

   const inputRef = useRef(null)

   const submit = (e) => {
      e.preventDefault();
      filterCart(inputRef.current.value);

   };

   return (
      <section>
         <form onSubmit={submit} className={style.searchProduct}>
            <input
               type="text"
               ref={inputRef}
            />
            <button type="submit">
               <MdSearch size={21} />
            </button>
         </form>

         <ul className={style.containerListProduct}>
            {productList.map((product) => (
               <ProductCard key={product.id} product={product} addCart={addCart} />
            ))}
         </ul>
      </section>
   );
};
