import { useEffect, useState } from "react";
import { CartModal } from "./components/CartModal";
import { HomePage } from "./pages/HomePage";
import './styles/index.scss';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const localCart = localStorage.getItem("@PRODUCT");

  //tornar visível o cart
  const [isVisible, setIsVisible] = useState(false);
  //carrinho de compra
  const [cartShopping, setCartShopping] = useState(
    localCart ? JSON.parse(localCart) : []
  );

  //adicionar compras
  const addCart = (productAdd) => {
    const hasCart = cartShopping.some((cart) => cart.id == productAdd.id);

    if (!hasCart) {
      setCartShopping([...cartShopping, productAdd]);
      toast(`${productAdd.name} adicionado ao carrinho`);
    } else {
      toast.error(`${productAdd.name} já foi adicionado ao carrinho`);
    }
  }
  //remover compras
  const removeCart = (cartId) => {
    const cartFiltered = cartShopping.filter(cart => cart.id !== cartId)
    setCartShopping(cartFiltered);
    toast("Item removido do carrinho");
  }

  const removeAllItemsFromCart = () => {
    setCartShopping([]);
    toast("Todos os itens foram removidos do carrinho");
  }

  useEffect(() => {
    localStorage.setItem("@PRODUCT", JSON.stringify(cartShopping));
  }, [cartShopping]);

  return (
    <>
      <HomePage setIsVisible={setIsVisible} addCart={addCart} />
      {isVisible ? <CartModal cartShopping={cartShopping} setIsVisible={setIsVisible} removeCart={removeCart} removeAllItemsFromCart={removeAllItemsFromCart} /> : null}
      <ToastContainer />
    </>
  )
}

export default App
