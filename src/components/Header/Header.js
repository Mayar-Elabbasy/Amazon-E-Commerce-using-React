import '../../public/css/Header.css';
import  { Search, ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStateValue } from '../ContextConfig/StateProvider';


function Header() {
    const [ state ] = useStateValue();

    // console.log(state.basket);

    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo img-fluid" alt="Logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput" /> 
                <Search className="header__searchIcon" />  
            </div>

            <div className="header__nav">
                <Link to="/login">
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Hello Guest
                        </span>
                        <span className="header__optionLineTwo">
                            Sign In
                        </span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasket />
                        <span className="header__optionLineTwo header__optionBasketCount">
                            {state.basket?.length}
                        </span>
                    </div>
                </Link>
            </div>  
        </div>
    )
}

export default Header;
