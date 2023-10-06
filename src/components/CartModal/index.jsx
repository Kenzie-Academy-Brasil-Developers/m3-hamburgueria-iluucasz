import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";

export const CartModal = ({ cartShopping, setIsVisible, removeCart, removeAllItemsFromCart }) => {

   //valor total
   const total = cartShopping.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div role="dialog">
         <div>
            <h2>Carrinho de compras</h2>
            <button aria-label="close" title="Fechar" onClick={() => setIsVisible(false)}>
               <MdClose size={21} />
            </button>
         </div>

         <div>
            <ul>
               {cartShopping.map((product) => (
                  <CartItemCard key={product.id} product={product} removeCart={removeCart} />
               ))}
            </ul>
         </div>

         <div>
            <div>
               <span>Total</span>
               <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
            </div>
            <button onClick={() => removeAllItemsFromCart()}>Remover todos</button>
         </div>
      </div>
   );
};
