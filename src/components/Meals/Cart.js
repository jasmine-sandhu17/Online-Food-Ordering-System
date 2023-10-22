
import { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import OrderPlaced from '../OrderPlaced';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

export default function Cart (props) {
    const [displayOrderPlaced, setDisplayOrderPlaced] = useState(false);
    const cartCtx = useContext(CartContext)
    const areItemsInCart = cartCtx.items.length > 0 ? true : false
    const updateAmountHandler = (item) => {
        cartCtx.addItemToCart({
            ...item, amount: 1
        })
    }
    const removeItemHandler = (id) => {
        cartCtx.removeItemFromCart(id)
    }
    const onOrderHandler = () => {
        cartCtx.resetCart()
        setDisplayOrderPlaced(true);
    }
    return (
        <>
            {
                displayOrderPlaced && <OrderPlaced onHideCart={props.onHideCart} />
            }
            {
                !displayOrderPlaced && 
                <Modal>
                    {
                        areItemsInCart &&
                        cartCtx.items.map((item) => {
                            return <div className={`${classes['meal-container']} ${classes['border-bottom']}`} key={item.id}>
                                    <div>
                                        <h1 className={classes['meal-name']}>
                                            {item.name}
                                        </h1>
                                        <div style={{ display: 'flex', alignItems: 'center', margin:'5px 0 0' }} >
                                            <h2 className={classes['meal-amount']}>
                                                ${item.price}
                                            </h2>
                                            <div style={{ margin: "0 5px", display: 'flex', alignItems:'center' }}>
                                                <span>x</span>
                                                <p style={{margin: "0 0 0 10px", fontSize: '12px', border: "1px solid grey", padding:"0 4px", width:'30px'}}>
                                                    {item.amount}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ width: '20%', display: 'flex', justifyContent: 'flex-end' }}>
                                    <button className={classes['meal-add-button']} onClick={removeItemHandler.bind(null, item.id)}>
                                            <span className={classes['meal-add-button-label']}>
                                                -
                                            </span>
                                        </button>
                                        <button className={classes['meal-add-button']} onClick={updateAmountHandler.bind(null,item)}>
                                            <span className={classes['meal-add-button-label']}>
                                                +
                                            </span>
                                        </button>
                                    </div>
                                </div>
                        })
                    }
                    {
                        !areItemsInCart &&
                        <p> No Items In the Cart</p>
                    }
                    { areItemsInCart &&
                        <div className={classes['meal-container']} >
                            <h1 className={classes['font-20']}> Total Amount</h1>
                            <h2 className={classes['font-18']}>${cartCtx.totalAmount.toFixed(2)}</h2>
                        </div>
                    }
                    
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button className={classes['order-meal-form-actions']} onClick={props.onHideCart}>
                            Close
                        </button>
                        {
                            areItemsInCart &&
                            <button className={`${classes['order-meal-form-actions']} ${classes['order-meal-form-submit']}`} onClick={onOrderHandler}>
                                Order
                            </button>
                        }
                        
                    </div>
                </Modal>
            }
        </>
       
    )
}