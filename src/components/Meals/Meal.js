import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import classes from './Meal.module.css'
import MealForm from './MealForm'

export default function Meal({initialData}){
    const cartCtx = useContext(CartContext)
    const onAddToCartHandler = (amount) => {
        cartCtx.addItemToCart(
            {
                id: initialData.id,
                name: initialData.name,
                description: initialData.description,
                price: initialData.price,
                amount: amount
            }
        )
    }
    return (
            <div className={classes['meal-container']} id={initialData.id}>
                <div>
                    <h1 className={classes['meal-name']}>
                        {initialData.name}
                    </h1>
                    <p className={classes['meal-description']}>
                        <i> {initialData.description}</i>
                    </p>
                    <h2 className={classes['meal-cost']}>
                        ${initialData.price}
                    </h2>
                </div>
                <MealForm onAddToCart={onAddToCartHandler}/>
            </div>
    )
}