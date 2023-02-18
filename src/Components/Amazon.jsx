import style from "./amazon.module.css"
import pic1 from "../Components/img/PngItem_12080.png"
import pic2 from "../Components/img/india-flag-icon.png"
const Amazon=()=>{
    return(
        <div>
            <section id={style.nav}>
                <article>
                    <div className={style.logo}>
                        <img src={pic1} alt="" />
                        <h5>.in</h5>
                    </div>
                    <div className={style.content}>
                        <h5>hello</h5>
                        <div className={style.loc}>
                        <i class="fa-solid fa-location-dot"></i>
                        <h5>Select your address</h5>

                        </div>
                    
                    </div>
                    <div className={style.searchbarr}>
                        <h5>All</h5>
                        <input placeholder="Search Amazon.in" type="text" />
                        <i class="fa-solid fa-magnifying-glass"></i>
                        
                    </div>
                    <div className={style.lang}>
                        <img src={pic2} alt="" />
                        <h5>EN</h5>

                    </div>
                    <div className={style.sign}>
                        <h3>Hello, sign in</h3>
                        <h5>Account & Lists</h5>
                    </div>
                    <div className={style.return}>
                        <h3>Returns</h3>
                        <h5>& Orders</h5>
                    </div>
                    <div className={style.cart}>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <h5>Cart</h5>
                    </div>
                </article>

            </section>

        </div>
    )
}
export default Amazon