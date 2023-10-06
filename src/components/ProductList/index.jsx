import { ProductCard } from "./ProductCard";

export const ProductList = ({ productList, addCart }) => {
   return (
      <section>
         <ul className="container">
            {productList.map((product) => (
               <ProductCard key={product.id} product={product} addCart={addCart} />
            ))}
         </ul>
      </section>

   );
};
