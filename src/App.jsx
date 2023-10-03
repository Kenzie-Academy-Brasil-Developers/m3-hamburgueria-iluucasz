import { useState } from "react";
import { CartModal } from "./components/CartModal";
import { HomePage } from "./pages/HomePage"

function App() {
  const [cartList, setCartList] = useState([]);

  return (
    <>
      <HomePage />
      <CartModal cartList={cartList}/>
    </>
  )
}

export default App
