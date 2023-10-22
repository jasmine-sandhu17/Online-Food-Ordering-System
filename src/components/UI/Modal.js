import classes from './Modal.module.css';
import ReactDOM from 'react-dom';
const BackDrop = () => {
    return <div className={classes.backdrop}/>
}
const OverLay = (props) => {
    return <div className={classes.modal}>
                <div>
                    {props.children}
                </div>
            </div>
}
const Modal = (props)=> {
const portalElement = document.getElementById('modal');
return(
        <>
        {ReactDOM.createPortal(<BackDrop />, portalElement)}
        {ReactDOM.createPortal(<OverLay> {props.children} </OverLay>, portalElement)}
        </>
)
}
export default Modal;