import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdShoppingCart } from "react-icons/md";
import style from "./style.module.scss"

export const Header = ({ setIsVisible }) => {

   const [count, setCount] = useState(0);

   useEffect(() => {
      const cartLocal = localStorage.getItem("@PRODUCT");
      const cartConvert = JSON.parse(cartLocal);

      setCount(cartConvert.length);
      console.log(cartConvert.length);
   }, [])




   return (
      <header className={style.header}>
         <img src={Logo} alt="Logo Kenzie Burger" />
         <button onClick={() => setIsVisible(true)}>
            <MdShoppingCart size={21} />
            <span>{count}</span>
         </button>


      </header>
   );
};