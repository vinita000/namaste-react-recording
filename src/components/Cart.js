import Shimmer from "./Shimmer";
import { useSelector, useDispatch } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items); // doing this major performance imporovement
  console.log(cartItems)
  const dispatch = useDispatch();
  
  const handleClearCart = () => {
    dispatch(clearCart());
  }
  return(
    <div className="m-5 p-5">
        {cartItems.length ==0 ? (
          <>
            <h1 className="text-center">Empty Cart</h1>
            <img className="w-30 h-30 mx-auto"src="https://img.freepik.com/free-vector/shopping-cart-realistic_1284-6011.jpg?w=2000" />
          </>
        ) : (
          <>
            <h1 className="font-bold text-3xl">Cart Items - {cartItems.length} items</h1>
            <div className="flex flex-wrap">
              {cartItems && cartItems.map((cartItem) => {
                return <FoodItem {...cartItem} key={cartItem.id} />
              })}
            </div>
            <button className="p-4 m-10 bg-red-600 items-center" onClick={()=> handleClearCart()}>Clear Clart</button>
            </>
        
        )}
    </div>
  )
}

export default Cart;