import { useContext, useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { Cart } from "../Context";

const CartPage = () => {
  const [total, setTotal] = useState(0);
  const { cart } = useContext(Cart);
  useEffect(() => {
    setTotal(cart.reduce((accu, item) => accu + Number(item.price), 0));
  }, [cart]);
  return (
    <div>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total: Rs.{total}</span>
      <div className="productContainer">
        {cart.map((prod) => (
          <SingleProduct prod={prod} />
        ))}
      </div>
    </div>
  );
};
export default CartPage;
