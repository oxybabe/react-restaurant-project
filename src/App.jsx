import { useState } from "react";
import MenuList from "./Components/MenuList";
import { INITIAL_MENU } from "./Components/Menu";
import Cart from "./Components/Cart";
import "./App.css";

function App() {
  const [order, setOrder] = useState([]);
  const [menuItems, setMenuItems] = useState(INITIAL_MENU);

  return (
    <>
      <MenuList menuItems={menuItems} order={order} setOrder={setOrder} />
      <Cart order={order} setOrder={setOrder} />
    </>
  );
}

export default App;
