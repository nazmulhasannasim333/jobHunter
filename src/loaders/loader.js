import { getShoppingCart } from "../utilities/fakedb";

const appliedJobLoader = async () => {
  const loadApplied = await fetch("/featured.json");
  const applied = await loadApplied.json();
  const storedCart = getShoppingCart();
  let saveCart = [];
  console.log(saveCart);
  for (const id in storedCart) {
    const addApplied = applied.find((pd) => pd.id == id);
    if (addApplied) {
      const quantity = storedCart[id];
      addApplied.quantity = quantity;
      saveCart.push(addApplied);
    }
  }
  return saveCart;
};
export default appliedJobLoader;
