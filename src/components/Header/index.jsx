import React, { useState, useEffect } from "react";
import Logo from "../../assets/Logo.svg";
import { MdShoppingCart } from "react-icons/md";
import style from "./style.module.scss";

export const Header = ({ setIsVisible, cartShopping }) => {
   const [count, setCount] = useState(0);

   useEffect(() => {
      // Atualize o valor de 'count' sempre que 'cartShopping' mudar
      setCount(cartShopping.length);
   }, [cartShopping]);

   return (
      <header className={style.header}>
         <img src={Logo} alt="Logo Kenzie Burger" />
         <div>
            <div>
               <button onClick={() => setIsVisible(true)}>
                  <MdShoppingCart size={21} />
               </button>
               <span>{count}</span>
            </div>
         </div>
      </header>
   );
};
