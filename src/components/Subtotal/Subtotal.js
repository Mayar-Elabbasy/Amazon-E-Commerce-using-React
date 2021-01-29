import '../../public/css/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import React from 'react';
import { useStateValue } from '../ContextConfig/StateProvider';
import { getBasketTotal } from '../ContextConfig/Reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {

    const [{ basket }, dispatch] = useStateValue();
    const history = useHistory();

    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                        <React.Fragment>
                            <p> Subtotal ({basket?.length} items): <strong> {value}</strong> </p>
                            <small className="subtotal__gift">
                                <input type="checkbox" /> This order contains a gift
                            </small>
                        </React.Fragment>
                    )
                }
                value={getBasketTotal(basket)}
                displayType={'text'} 
                thousandSeparator={true} 
                prefix={'$'} 
            />
            {(basket.length <= 0) ? 
                <button disabled={true} style={{ backgroundColor: "gray" }}>Proceed to Checkout</button> 
                :
                <button onClick={ () => history.push("/payment") }>Proceed to Checkout</button>
            }
        </div>
    )
}

export default Subtotal;
