import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-5 p-4">
      <h1 className="text-2xl font-bold p-5">Cart</h1>
      <div className="w-6/12 m-auto  border-slate-900 ">
        <button
          className="p-2 my-4 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>{" "}
        {cartItems.length === 0 && (
          <h1 className="text-lg font-semibold m-auto p-3">
            Feeling Hungry Add Items to Cart
          </h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
