import '../../public/css/Product.css';
import  { Star } from '@material-ui/icons';

function Product({ id, title, image, price, rating }) {
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

            <button>Add to Basket</button> 
        </div>
    )
}

export default Product;