import '../../public/css/Header.css';
import  { Search, ShoppingBasket } from '@material-ui/icons';
import { Link, useHistory } from 'react-router-dom';
import { useStateValue } from '../ContextConfig/StateProvider';
import { auth } from '../../firebase';
import { getBasketCount } from '../ContextConfig/Reducer';


function Header() {
    const [ state ] = useStateValue();
    const history = useHistory();

    // console.log(state.basket);
    const handleAuthentication = () => {
        if(state.user) {
            auth.signOut();
        } else {
            history.push("/login")
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo img-fluid" alt="Logo" 
                     src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchInput" /> 
                <Search className="header__searchIcon" />  
            </div>

            <div className="header__nav">
                <Link to="/login">
                    <div className="header__option">
                        <span className="header__optionLineOne">
                            Hello {state.user ? state.user.email : 'Guest' }
                        </span>
                        <span onClick={handleAuthentication} className="header__optionLineTwo">
                            {state.user ? 'Sign out' : 'Sign In' }
                        </span>
                    </div>
                </Link>

                {state.user ?
                    <Link to="/orders">
                        <div className="header__option">
                            <span className="header__optionLineOne">
                                Returns
                            </span>
                            <span className="header__optionLineTwo">
                                & Orders
                            </span>
                        </div>
                    </Link>
                    :
                    <Link to="/login">
                        <div className="header__option">
                            <span className="header__optionLineOne">
                                Returns
                            </span>
                            <span className="header__optionLineTwo">
                                & Orders
                            </span>
                        </div>
                    </Link>
                }

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
                            {getBasketCount(state.basket)}
                        </span>
                    </div>
                </Link>
            </div>  
        </div>
    )
}

export default Header;
