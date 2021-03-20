import moment from 'moment';
import Product from '../Product/Product';

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
                            rating={item.rating}
                        />
                    </div>
                )
                })
            }
        </div>
    )
}

export default Order;