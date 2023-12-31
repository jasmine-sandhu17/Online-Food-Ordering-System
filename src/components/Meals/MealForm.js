import { useRef } from 'react';
import Input from '../UI/Input';
import classes from './MealForm.module.css';

const MealForm = (props) => {
    const amountInputRef = useRef();
    const formSubmitHandler = (event)=>{
        event.preventDefault();
        const enteredAmount = +amountInputRef.current.value;
        props.onAddToCart(enteredAmount)
    }
    return (
        <form className={classes.form} onSubmit={formSubmitHandler}>
            <Input
                ref={amountInputRef}
                label='Amount'
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>+ Add</button>
        </form>
    );
};

export default MealForm;