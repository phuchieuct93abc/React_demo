import React from 'react';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Order/OrderSummary/OrderSummary';

class BurgerBuilder extends React.Component {

    state = {
      
        purchasable: false,
        showModal: false
    }
   
   
    order = () => {
        this.setState({ showModal: true })
    }
    onClose = () => {
        this.setState({ showModal: false })
    }
    perchaseCanceled = ()=>{
        this.setState({ showModal: false })

    }
    perchaseCheckedout = ()=>{
        this.setState({ showModal: false })

    }
    render() {
 
        return (
            <React.Fragment>
                <Burger/>
                <BurgerControls
                    order={this.order}
                />
                {this.state.showModal && <Modal onClose={this.onClose}>
                    <OrderSummary 
                        perchaseCanceled={this.perchaseCanceled}
                        perchaseCheckedout={this.perchaseCheckedout}
                    ></OrderSummary>
                </Modal>}
            </React.Fragment>
        )
    }
}
export default BurgerBuilder