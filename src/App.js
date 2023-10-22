import { useState } from "react";
import CartContextProvider from './store/CartContextProvider'
import Navbar from "./components/Layout/Navbar";
import Cart from "./components/Meals/Cart";
import MealSummary from "./components/Meals/MealSummary";
import MealListingContainer from "./components/Meals/MealListingContainer";

function App() {
  const [displayCart, setDisplayCart] = useState(false);
 const showCart = () => {
   return setDisplayCart(true);
 }
  const hideCart = () => {
    return setDisplayCart(false);
  }
  return (
    <CartContextProvider>
      {displayCart && <Cart onHideCart={hideCart}/>}
      <Navbar onShowCart={showCart}/>
      <MealSummary />
      <MealListingContainer />
    </CartContextProvider>
  );
}

export default App;
