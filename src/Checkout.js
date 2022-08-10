import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
        <div className="checkout_left">
            <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/Other/RB-3549_SVOD_ActivationEvergreen/DesktopLandingPage_RB-3549_SVOD_ActivationEvergreen_1500x300.jpg" width="100%" alt="" />

            <div>
                <h2 className="checkout_title">Your shopping Basket</h2>

                <CheckoutProduct 
                id='239845'
                title='flow with me'
                image='https://m.media-amazon.com/images/I/71LxXaBCobL._AC_SX352_SY330_.jpg'
                price={200.33}
                rating={5}
                 />


                {basket.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                ))}

                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
                {/* BasketItem */}
            </div>
        </div>

        <div className="checkout_right">
            <Subtotal />
        </div>
    </div>
  );
}

export default Checkout;