import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";

import style from './style.module.scss';

export const CartModal = ({ cartShopping, setIsVisible, removeCart, removeAllItemsFromCart }) => {


   //valor total
   const total = cartShopping.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div className={style.containerBoxModal}>

         <div role="dialog" className={style.boxModal}>

            <div className={style.boxModalHeader}>
               <h2 className="heading3">Carrinho de compras</h2>
               <button aria-label="close" title="Fechar" onClick={() => setIsVisible(false)}>
                  <MdClose size={21} />
               </button>
            </div>

            <div className={style.boxModalProducts}>
               <ul>
                  {cartShopping.map((product) => (
                     <CartItemCard key={product.id} product={product} removeCart={removeCart} />
                  ))}
               </ul>
            </div>

            <div className={style.boxModalTotal}>
               <div className={style.line}></div>
               <div className={style.value}>
                  <span>Total</span>
                  <span>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
               </div>
               <button className="btn" onClick={() => removeAllItemsFromCart()}>Remover todos</button>
            </div>
         </div>
      </div>
   );
};
