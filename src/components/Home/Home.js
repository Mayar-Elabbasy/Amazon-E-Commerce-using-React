import '../../public/css/Home.css';
import Product from '../Product/Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image img-fluid" alt=" " src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg" />
                
                <div className="home__row">
                    <Product 
                        id={1}
                        title="Lenovo ideapad L3 laptop, intel 10th Gen core i5-10210U, 8 GB RAM, 1 TB HDD, NVIDIA GeForce MX130 2GB GDDR5 Graphic card, 15.6 inch FHD, Dos, Platinum Grey" 
                        image="https://cf4.s3.souqcdn.com/item/2020/05/16/12/49/26/53/5/item_L_124926535_369831c3db439.jpg" 
                        price={900} 
                        rating={5}
                        quantity={0}
                    />
                    <Product 
                        id={5}
                        title="PAWHITS Wireless Xbox 360 Controller Double Motor Vibration Wireless Gamepad Gaming Joypad, Blue" 
                        image="https://images-na.ssl-images-amazon.com/images/I/71XFp1Pkm9L._AC_SY450_.jpg" 
                        price={30} 
                        rating={4}
                        quantity={0}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id={3}
                        title="Victoria's Secret Bare Vanilla, 8.4 Oz" 
                        image="https://m.media-amazon.com/images/I/51kbqwnHZnL._AC_UL480_QL65_.jpg" 
                        price={15} 
                        rating={4}
                        quantity={0}
                    />
                    <Product 
                        id={4}
                        title="White Point Wpw 7815 Ps Front Loading Washing Machine, 7 Kg - Silver" 
                        image="https://cf4.s3.souqcdn.com/item/2018/02/12/30/64/53/34/item_XL_30645334_110387160.jpg" 
                        price={500} 
                        rating={3}
                        quantity={0}
                    />
                    <Product 
                        id={2}
                        title="Graco DuoGlider Double Stroller | Lightweight Double Stroller with Tandem Seating, Glacier" 
                        image="https://m.media-amazon.com/images/I/91dwoBmSshL._AC_UY327_FMwebp_QL65_.jpg" 
                        price={150} 
                        rating={5}
                        quantity={0}
                    />
                </div>
                <div className="home__row">
                    <Product 
                        id={6}
                        title="Juicer, Juice Extractor, Aicook Juicer Machine with 3'' Wide Mouth, 3 Speed Centrifugal Juicer for Fruits and Vegs, with Non-Slip Feet, BPA-Free" 
                        image="data:image/webp;base64,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" 
                        price={50} 
                        rating={5}
                        quantity={0}
                    />
                </div>
            </div>  
        </div>
    )
}

export default Home;
