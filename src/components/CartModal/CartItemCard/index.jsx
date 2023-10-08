import { MdDelete } from "react-icons/md";
import style from './style.module.scss';

export const CartItemCard = ({ product, removeCart }) => {
   return (
      <li className={style.containerProduct}>
         <div className={style.productInfo}>
            <img src={product.img} alt={product.name} />
            <div>
               <h3 className="heading3">{product.name}</h3>
               <span className="b600">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
            </div>
         </div>
         <button aria-label="delete" title="Remover item" onClick={() => removeCart(product.id)}>
            <MdDelete size={21} />
         </button>
      </li>
   );
};
