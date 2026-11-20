import PLANTS from "./data";
import PlantList from "./PlantList";
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    const alreadyInCart = cart.some((item) => item.id === plant.id);

    if (alreadyInCart) {
      setCart(
        cart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : treat,
        ),
      );
    } else {
    }
  }

  return <PlantList plants={PLANTS} addToCart={addToCart} />;
}
