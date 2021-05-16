import '../../public/css/CheckoutProduct.css';
import { Star, RemoveShoppingCart } from "@material-ui/icons";
import { FaCartArrowDown, FaCartPlus } from 'react-icons/fa';
import Tooltip from '@material-ui/core/Tooltip';
import { useStateValue } from "../ContextConfig/StateProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactImageMagnify from 'react-image-magnify';

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

    const decrementQuantity = (productId) => {      
        dispatch({
            type: "DECREMENT_QUANTITY",
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
                        
                        <ReactImageMagnify 
                            {...{
                                smallImage: {
                                    alt: `${product.title}`,
                                    isFluidWidth: true,
                                    src: `${product.image}`,
                                    sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                                },
                                largeImage: {
                                    src: `${product.image}`,
                                    width: 1200,
                                    height: 1800
                                },
                                enlargedImageContainerDimensions: {
                                    width: '200%',
                                    height: '100%'
                                },
                                shouldUsePositiveSpaceLens: true
                            }} 
                        />
 
                        <div className="checkoutProduct__info">
                            <p className="checkoutProduct__title">{product.title}</p>
                            <p className="checkoutProduct__price">
                                <small>$ </small> <strong>{product.price}</strong> 
                            </p>
                            <div className="checkoutProduct__quantity"> 
                                <Tooltip title={<FaCartArrowDown size={27} />}>
                                    <button onClick={() => decrementQuantity(product.id)}
                                            className="checkoutProduct__increment-decrement-quantity-buttons">
                                        -
                                    </button>
                                </Tooltip>
                                <span>Quantity: {product.quantity}</span>
                        
                                <Tooltip title={<FaCartPlus size={27} />}>
                                    <button onClick={() => addToBasket(product.id)}
                                            className="checkoutProduct__increment-decrement-quantity-buttons">
                                        +
                                    </button>
                                </Tooltip>
                            </div>
                            <div className="checkoutProduct__rating">
                                {Array(product.rating).fill().map((i) => 
                                    (<span key={Math.random()}><Star /></span>))}
                            </div>
                            <Tooltip title={<RemoveShoppingCart />}>
                                <button 
                                    onClick={()=>{ removeFromBasket(product.id, product.title) }}>
                                    Remove From Basket
                                </button>
                            </Tooltip> 
                        </div>
                    </div>
                )  
            })}
        </div>
    )
}

export default CheckoutProduct;
