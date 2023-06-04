import { useState } from "react";

export default function Cart({ order, setOrder }) {
  function deleteCart() {
    setOrder([]);
  }
  function handleSubmit() {
    setOrder([]);
    alert("We received your order!");
  }
  function deleteItem(id) {
    const index = order.findIndex((menuItem) => menuItem.id === id);
    const updatedOrderList = [...order];

    updatedOrderList.splice(index, 1);

    setOrder(updatedOrderList);
  }
  const cartTotal = order.reduce((acc, menuItem) => acc + menuItem.price, 0);
  console.log("cart total: $", cartTotal);

  return (
    <>
      {order.map((menuItem) => (
        <>
          <div>{menuItem.title}</div>
          <button onClick={() => deleteItem(menuItem.id)}>Delete Item</button>
        </>
      ))}

      <button onClick={deleteCart}>Empty Cart</button>
      <button onClick={handleSubmit}>Submit Order</button>
    </>
  );
}
