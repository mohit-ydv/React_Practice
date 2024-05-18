import { Link } from "react-router-dom";
import "./styles.css";
import { useContext } from "react";
import { Cart } from "../Context";

const Header = () => {
  const { cart } = useContext(Cart);
  return (
    <div>
      <span className="header">React Context API Tutorial</span>
      <ul className="nav">
        <li className="prod">
          <Link to="/">Home Page</Link>
        </li>
        <li className="prod1">
          <Link to="/cart">Cart({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
};
export default Header;
