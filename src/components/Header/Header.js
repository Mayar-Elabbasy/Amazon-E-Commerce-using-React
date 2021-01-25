import '../../public/css/Header.css';
import  { Search, ShoppingBasket } from '@material-ui/icons';


function Header() {
    return (
        <div className="header">
            <img className="header__logo img-fluid" alt="Logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />

            <div className="header__search">
                <input type="text" className="header__searchInput" /> 
                <Search className="header__searchIcon" />  
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello Guest
                    </span>
                    <span className="header__optionLineTwo">
                        Sign In
                    </span>
                </div>
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
                <div className="header__optionBasket">
                    <ShoppingBasket />
                    <span className="header__optionLineTwo header__optionBasketCount">
                        0
                    </span>
                </div>
            </div>  
        </div>
    )
}

export default Header;
