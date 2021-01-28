import '../../public/css/CheckoutProduct.css';
import { Star } from "@material-ui/icons";
import { useStateValue } from "../ContextConfig/StateProvider";

function CheckoutProduct() {

    const [{ basket }, dispatch] = useStateValue();
    
    return (
        <div>
            {basket.map((product) => {
                return (
                    <div key={product.id} className="checkoutProduct">
                        
                        <img className="checkoutProduct__image" src={product.image} alt="" />
                        
                        <div className="checkoutProduct__info">
                            <p className="checkoutProduct__title">{product.title}</p>
                            <p> <small>$</small> <strong>{product.price}</strong> </p>
                            <div className="checkoutProduct__rating">
                                {Array(product.rating).fill().map((i) => (<span key={Math.random()}><Star /></span>))}
                            </div>
                            <button>Remove From Basket</button>
                        </div>
                    </div>
                )  
            })}
        </div>
    )
}

export default CheckoutProduct;
