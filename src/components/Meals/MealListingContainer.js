import classes from './MealListingContainer.module.css'
import Meal from './Meal'
import Card from '../UI/Card';
export default function MealListingContainer(){
    const dummyMeals = [
        {
            id: 'm1',
            name: 'Sushi',
            description: 'Finest fish and veggies',
            price: 22.99,
        },
        {
            id: 'm2',
            name: 'Schnitzel',
            description: 'A german specialty!',
            price: 16.5,
        },
        {
            id: 'm3',
            name: 'Barbecue Burger',
            description: 'American, raw, meaty',
            price: 12.99,
        },
        {
            id: 'm4',
            name: 'Green Bowl',
            description: 'Healthy...and green...',
            price: 18.99,
        },
    ];
    return (
        <Card>
            <div className={classes['meal-wrapper']} >
                {
                    dummyMeals.map((meal)=>{
                        return (
                                <Meal initialData={meal} key={meal.id} />
                        )
                    })
                }
            </div>
        </Card>
    )
}