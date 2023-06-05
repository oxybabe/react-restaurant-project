import { useState } from "react";
import Button from "react-bootstrap/Button";

export default function Cart({ order, setOrder }) {
  function deleteCart() {
    setOrder([]);
  }
  function handleSubmit() {
    localStorage.setItem("order", JSON.stringify(order));

    setOrder([]);
    alert("Thank you! We received your order!");
  }

  function deleteItem(id) {
    const index = order.findIndex((menuItem) => menuItem.id === id);
    const updatedOrderList = [...order];

    updatedOrderList.splice(index, 1);

    setOrder(updatedOrderList);
  }
  const cartTotal = order.reduce((acc, menuItem) => acc + menuItem.price, 0);
  console.log("cart total: $", cartTotal.toFixed(2));

  return (
    <>
      <aside>
        <h2>Cart</h2>
        {order.map((menuItem) => (
          <>
            <div>{menuItem.title}</div>
            <div>${menuItem.price}</div>
            <button onClick={() => deleteItem(menuItem.id)}>Delete Item</button>
          </>
        ))}
        <br />
        <Button variant="success" onClick={deleteCart}>
          Empty Cart
        </Button>
        <br />
        <div>Subtotal:${cartTotal.toFixed(2)}</div>
        <button variant="success" onClick={handleSubmit}>
          Submit Order
        </button>
      </aside>
    </>
  );
}
