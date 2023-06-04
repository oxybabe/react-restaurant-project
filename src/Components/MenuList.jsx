export default function MenuList({ menuItems, order, setOrder }) {
  function addToCart(id) {
    const index = menuItems.findIndex((menuItem) => menuItem.id === id);
    const newOrderItem = menuItems[index];
    setOrder([...order, newOrderItem]);
  }
  console.log({ order });
  return (
    <>
      {menuItems.map((menuItem) => (
        <>
          <div>{menuItem.title}</div>
          <button onClick={() => addToCart(menuItem.id)}>Add to Cart</button>
          
        </>
      ))}
      {/* <section className="fullMenu">
        <div className="categories">
          <button className="foodType" type="button">
            Appetizers
          </button>
          <button className="foodType" type="button">
            Entrees
          </button>
          <button className="foodType" type="button">
            Desserts
          </button>
        </div>
      </section> */}
    </>
  );
}
