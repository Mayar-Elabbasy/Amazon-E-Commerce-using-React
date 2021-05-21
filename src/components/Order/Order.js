import React from 'react';
import moment from 'moment';
import Product from '../Product/Product';
import '../../public/css/Order.css';
import CurrencyFormat from 'react-currency-format';

function Order({ order }) {
    
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMM Do YYYY, h:mm A")}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>

            {order.data.basket?.map(item =>{
                return (
                    <div className="home__row">
                        <Product 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            quantity={item.quantity}
                            rating={item.rating}
                            hiddenButton={true}
                        />
                    </div>
                )
                })
            }

            <CurrencyFormat 
                renderText={(value) => (
                        <React.Fragment>
                            <p> Order Total: <strong> {value} </strong> </p>
                        </React.Fragment>
                    )
                }
                value={(order.data.amount / 100)}
                displayType={'text'} 
                thousandSeparator={true} 
                prefix={'$'} 
            />
            
        </div>
    )
}

export default Order;