export default function PlantItem({ plant, addToCart }) {
  return (
    <li>
      <span>{plant.image}</span> {plant.name}
      <button onClick={() => addToCart(plant)}>Add to cart</button>
    </li>
  );
}
