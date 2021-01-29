import '../../public/css/Payment.css';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../ContextConfig/StateProvider';
import { Link } from "react-router-dom";

function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="payment">
            <div className="payment__container">
                <h1> Checkout {<Link to="/checkout">({basket?.length} items)</Link>}</h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React st</p>
                        <p>Alexandria, EG</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items And Delivery</h3>
                    </div>
                    <div className="payment__items">
                        <CheckoutProduct />
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                       {/* Stripe */}
                    </div>
                </div>
                
                
            </div>
            
        </div>
    )
}

export default Payment;