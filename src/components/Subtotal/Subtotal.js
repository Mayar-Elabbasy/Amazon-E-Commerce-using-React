import '../../public/css/Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import React from 'react';
import { useStateValue } from '../ContextConfig/StateProvider';
import { getBasketTotal, getBasketCount } from '../ContextConfig/Reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {

    const [{ basket, user },] = useStateValue();
    const history = useHistory();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <React.Fragment>
                        <p> Subtotal ({getBasketCount(basket)} items):
                            <strong> {value}</strong> </p>
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
                <button disabled={true} style={{ backgroundColor: "gray" }}>
                    Proceed to Checkout
                </button>
                :
                <React.Fragment>
                    {(user != null) ?
                        <button onClick={() => history.push("/payment")}>
                            Proceed to Checkout
                        </button>
                        :
                        <button onClick={() => history.push("/login")}>
                            Proceed to Checkout
                        </button>
                    }
                </React.Fragment>
            }
        </div>
    )
}

export default Subtotal;
