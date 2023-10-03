import Logo from "../../assets/Logo.svg";
import { MdShoppingCart } from "react-icons/md";

export const Header = () => {
   return (
      <header>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <button>
            <MdShoppingCart size={21} />
            <span>0</span>
         </button>
      </header>
   );
};
