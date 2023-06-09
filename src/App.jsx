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
      <div style={{ display: "flex", maxWidth: "100vw" }}>
        <MenuList menuItems={menuItems} order={order} setOrder={setOrder} />
        <Cart order={order} setOrder={setOrder} />
      </div>
    </>
  );
}

export default App;
