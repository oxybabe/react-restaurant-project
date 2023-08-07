import { useState } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";

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
        <Card style={{
                width: "18rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "#efe7da",
                marginTop: "150px",
                marginLeft: "30px",
              }}>
        <h2 className="title">Cart</h2>
        {order.map((menuItem) => (
          <>
            <div className="title">{menuItem.title}</div>
            <div className="price">${menuItem.price}</div>
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
        </Card>
      </aside>
    </>
    
  );
}
