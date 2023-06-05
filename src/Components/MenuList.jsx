export default function MenuList({ menuItems, order, setOrder }) {
  function addToCart(id) {
    const index = menuItems.findIndex((menuItem) => menuItem.id === id);
    const newOrderItem = menuItems[index];
    setOrder([...order, newOrderItem]);
  }
  console.log({ order });
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <header>
        <h1>Majestic Thai Restaurant</h1>

        <nav></nav>
      </header>
      {menuItems.map((menuItem) => (
        <>
          <div className="title">{menuItem.title}</div>
          <div>{menuItem.imgID}</div>
          <div className="description">{menuItem.description}</div>
          <div className="price">${menuItem.price}</div>
          <button variant="success" onClick={() => addToCart(menuItem.id)}>
            Add to Cart
          </button>
          {/* onClick=localStorage.setItem("order, menuItem")
        localStorage.getItem("order") */}
        </>
      ))}
    </div>
  );
}
