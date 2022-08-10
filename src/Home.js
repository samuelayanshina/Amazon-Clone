import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
        <div className="home_container">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg" width="100%" alt=""/>

            <div className="home_row">
                <Product id="12367221" title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/41Ag4WE7uyL._SX324_BO1,204,203,200_.jpg" rating={5} />

                <Product id="34921366" title="Electric Gooseneck Kettle Temperature Control & 5 Variable Presets, Pour-Over Tea Kettle," price={239.0} rating={4} image="https://m.media-amazon.com/images/I/61sUc4559BL._AC_SX679_.jpg" />
            </div>

            <div className="home_row">
                <Product id="98942673" title="Dowinx Gaming Chair with Pocket Spring Cushion, Reclining Game Chair Pu Leather 400LBS" price={128} image="https://m.media-amazon.com/images/I/71MvytARtPL._AC_SX679_.jpg" rating={3} />

                <Product id="89324127" title="Nike SB RPM Skate Adult Unisex Backpack , NOBLE GREEN" price={129} rating={2} image="https://m.media-amazon.com/images/I/81MexK8ysdL._AC_SX425_.jpg" />

                <Product id="23678912" title="Nike Women's Air Max 270 Running" price={94} rating={3} image="https://m.media-amazon.com/images/I/81BrJhy2oTL._AC_UX500_.jpg" />
            </div>

            <div className="home_row">
                <Product id="34523198" title="SAMSUNG 34-Inch Odyssey G5 Ultra-Wide Gaming Monitor with 1000R Curved Screen, 165Hz, 1ms, FreeSync Premium, WQHD (LC34G55TWWNXZA, 2020 Model), Black" price={1300} image="https://m.media-amazon.com/images/I/61XDeaOrrKL._AC_SX679_.jpg" rating={5} />
            </div>
        </div>
    </div>
  )
}

export default Home;