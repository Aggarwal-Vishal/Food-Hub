import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using a Selector

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className=" flex justify-between bg-orange-300 shadow-lg">
      <div className="">
        <img className="w-40" src={LOGO_URL} alt="App Logo" />
      </div>
      <div className="m-5">
        <ul className="flex px-4 mt-6 ">
          <li className="px-4 font-semibold text-xl">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4 font-semibold text-xl">
            <Link to="/Home"> Home </Link>
          </li>
          {/* <li className="px-4">
            <Link to="/about"> About Us</Link>
          </li> */}
          {/* <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li> */}
          <li className="px-4 font-semibold text-xl">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          {/* <li className="px-4">
            <Link to="/Grocery">Grocery</Link>
          </li> */}
          <button
            className="px-4 font-bold text-xl"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 text-sm font-semibold py-1">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
