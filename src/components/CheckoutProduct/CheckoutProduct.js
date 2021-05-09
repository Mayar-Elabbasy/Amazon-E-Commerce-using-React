import '../../public/css/CheckoutProduct.css';
import { Star } from "@material-ui/icons";
import { useStateValue } from "../ContextConfig/StateProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CheckoutProduct() {

    const [{ basket }, dispatch] = useStateValue();

    const uniqueBasketItems = [...new Set(basket)];

    const removeFromBasket = (productId, productTitle) => {
        // console.log(productId);
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: productId,
        })
        toast.error(`This Product: ${productTitle} has just been removed from the basket`, {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });  
    }

    const addToBasket = (productId) => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: productId,
            }
        })
    }

    return (
        <div>
            <ToastContainer />
            {uniqueBasketItems.map((product) => {
                return (
                    <div key={product.id} className="checkoutProduct">
                        
                        <img className="checkoutProduct__image" src={product.image} alt="" />
                        
                        <div className="checkoutProduct__info">
                            <p className="checkoutProduct__title">{product.title}</p>
                            <p><small>$</small> <strong>{product.price}</strong> </p>
                            <p> 
                                <span>Quantity: {product.quantity}</span>
                                <button onClick={() => addToBasket(product.id)}>+</button>
                            </p>
                            <div className="checkoutProduct__rating">
                                {Array(product.rating).fill().map((i) => 
                                    (<span key={Math.random()}><Star /></span>))}
                            </div>
                            <button onClick={()=>{ removeFromBasket(product.id, product.title) }}>
                                Remove From Basket
                            </button>
                        </div>
                    </div>
                )  
            })}
        </div>
    )
}

export default CheckoutProduct;
