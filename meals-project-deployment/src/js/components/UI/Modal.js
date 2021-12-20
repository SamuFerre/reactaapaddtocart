import { Fragment } from 'react/cjs/react.production.min';
import reactDom from 'react-dom';
import classes from '../../../styles/UI/Modal.module.css';

const Backdrop = props => {
    return (
        <div className={classes.backdrop} onClick={props.onClose}></div>
    )

};
const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    );
};
const portalElement = document.getElementById('overlays')
const Modal = props => {
  return(
      <Fragment>
            {reactDom.createPortal(<Backdrop onClose={props.onCloseCart} />, portalElement)}
            {reactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
      </Fragment>
      
  )
}

export default Modal;