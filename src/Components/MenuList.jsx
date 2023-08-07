import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";

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
      </header>

      <Row xs={1} md={3} className="g-4">
        {menuItems.map((menuItem) => (
          <>
            <Card
              style={{
                width: "18rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "#efe7da",
                marginBottom: "20px",
                marginLeft: "30px",
              }}
            >
              <Card.Body>
                <Card.Title className="title" style={{ color: "black" }}>
                  {menuItem.title}
                </Card.Title>
                <Card.Text>{menuItem.description} </Card.Text>{menuItem.tag} ${menuItem.price}
                <Card.Footer
                  style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
                >
                  {" "}
                  <Button
                    variant="success"
                    onClick={() => addToCart(menuItem.id)}
                    style={{ display: "block", width: "100%" }}
                  >
                    Add to Cart
                  </Button>
                </Card.Footer>
              </Card.Body>
            </Card>

            {/* <div className="title"></div> */}
            {/* <div>{menuItem.imgID}</div>
          <div className="description"></div>
          <div className="price"></div>
          <button variant="success" onClick={() => addToCart(menuItem.id)}>
            Add to Cart
          </button> */}
            {/* onClick=localStorage.setItem("order, menuItem")
        localStorage.getItem("order") */}
          </>
        ))}
      </Row>
    </div>
  );
}
