import '../../public/css/Product.css';
import  { Star } from '@material-ui/icons';
import { useStateValue } from '../ContextConfig/StateProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Product({ id, title, image, price, rating }) {
    const [ state, dispatch ] = useStateValue();

    // console.log(state.basket);
     
    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
        toast.success(`This Product: ${title} has just been added to the basket`, {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        }); 
    }

    return (
        <div className="product">
            <ToastContainer />
            <div className="product__info" key={id}>
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong> {price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((i) => (<span key={Math.random()}><Star /></span>))}
                </div>
            </div> 

            <img src={image} alt="" />

            <button onClick={addToBasket}>Add To Basket</button> 
        </div>
    )
}

export default Product;