import '../../public/css/Product.css';
import  { Star } from '@material-ui/icons';
import { useStateValue } from '../ContextConfig/StateProvider';

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
    }

    return (
        <div className="product">
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