import { useState } from "react";

export default function Cart({ order, setOrder }) {
  function deleteCart() {
    setOrder([]);
  }
  function handleSubmit() {
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
  console.log("cart total: $", cartTotal);

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
        <button onClick={deleteCart}>Empty Cart</button>
        <br />
        <div>Subtotal:${cartTotal}</div>
        <button onClick={handleSubmit}>Submit Order</button>
      </aside>
    </>
  );
}
