import {useContext} from "react";
import CartContext from '../../store/cart-context';
import classes from './Navbar.module.css'
import cartImage from '../../assets/cart.png'
import MealsImage from '../../assets/meals.webp'

export default function Navbar(props) {
    const cartCtx = useContext(CartContext)
    const totalNumberOfItemsInCart = cartCtx.items.reduce((curNumber, item) =>{
        return curNumber + item.amount
    }, 0)
    return (
        <>
            <div className={classes['layout-wrapper']}>
                <h1 className={classes.title}> React Meals </h1>
                <button className={classes['cart-button']} onClick={props.onShowCart}>
                    <span><img alt="cart-icon" className={classes['cart-image']} src={cartImage}></img></span>
                    <span className={classes['cart-button-label']}>
                        Your Cart
                    </span>
                    <span className={classes['cart-button-badge']}>
                        {totalNumberOfItemsInCart}
                    </span>
                </button>
            </div>
            <div className={classes['image-container']}>
                <img src={MealsImage} alt="meals-banner" className={classes['meals-banner']}></img>
            </div>
        </>
    )
}