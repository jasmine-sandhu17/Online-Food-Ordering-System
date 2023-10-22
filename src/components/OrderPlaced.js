import Modal from './UI/Modal';

const OrderPlaced = (props)=> {
    return(
        <Modal>
            <p>
                Order Placed Successfully!
            </p>
            <button onClick={props.onHideCart}>
                Close
            </button>
        </Modal>
    )
}

export default OrderPlaced;