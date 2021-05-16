import '../../public/css/Payment.css';
import React, { useState, useEffect } from 'react';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../ContextConfig/StateProvider';
import { Link, useHistory } from "react-router-dom";
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal, getBasketCount } from '../ContextConfig/Reducer';
import axios from '../../axios';
import { db } from '../../firebase';

function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const [state, setState] = useState({
		error: '',
        disabled: true,
        succeeded: false,
        processing: '',
        clientSecret: true
	});

    useEffect(() => {
        // generate the special stripe client secret that will allow the website to charge the customer
        const getClientSecret = async() => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100 }`,
                headers: {'Access-Control-Allow-Origin': '*'}
            })
            setState({ ...state, clientSecret: response.data.clientSecret })
        }

        getClientSecret();

    }, [basket])

    // console.log("client secret", state.clientSecret);

    const handleChange = (event) => {
		setState({ 
            ...state,
            disabled: event.empty,
            error: event.error ? event.error.message: ''
        });	
	};

    const handleSubmit = async (event) => {
        event.preventDefault();
        setState({ 
            ...state,
            processing: true,
        });	
        const payload = await stripe.confirmCardPayment(
            state.clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement)
                } 
            }
        ).then(({ paymentIntent }) => {

            db.collection('users')
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })
            
            setState({ 
                ...state,
                succeeded: true,
                error: '',
                processing: false,
            }); 
            
            history.replace('/orders')

            dispatch({
                type: 'EMPTY_BASKET',   
            })
        }).catch((error) => {
            // console.log(error);
        })
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1> Checkout {<Link to="/checkout">({getBasketCount(basket)} items)</Link>}</h1>
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
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className='payment__priceContainer'>
                                <CurrencyFormat 
                                    renderText={(value) => (
                                            <p> Order Total: <strong> {value}</strong> </p>
                                        )
                                    }
                                    value={getBasketTotal(basket)}
                                    displayType={'text'} 
                                    thousandSeparator={true} 
                                    prefix={'$'} 
                                />
                                <button disabled={ state.processing || state.succeeded || state.disabled }>
                                    <span>{state.processing ? <p>Processing</p> : 'Buy Now'}</span>
                                </button>
                            </div>
                            { state.error && <div>{state.error}</div> }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;