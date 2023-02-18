import style from "./myntra.module.css"
import pic1 from "../Components/img/myntra-Logo-PNG_zqavvs.png"
const Myntra=()=>{
    return(
        <div>
            <section id={style.nav}>
                <article>
                    <div className={style.logo}>
                        <a href=""><img src={pic1} alt="" /></a>

                    </div>
                    <div className={style.list}>
                        <h5><a href="">Men</a></h5>
                        <h5><a href="">Women</a></h5>
                        <h5><a href="">Kids</a></h5>
                        <h5><a href="">Home</a></h5>
                        <h5><a href="">Beauty</a></h5>
                        <h5><a href="">Studio</a><sup id={style.supp}>new</sup></h5>

                    </div>
                    <div className={style.search}>
                    <i class="fa-solid fa-magnifying-glass"></i>
                        <input placeholder="Search for products, brand and more" type="text" />

                    </div>
                    <div className={style.icons1}>
                    <i class="fa-regular fa-user"></i>
                        <h5><a href="">Profile</a></h5>
                        

                    </div>
                    <div className={style.icons2}>
                    <i class="fa-regular fa-heart"></i>
                        <h5><a href="">WhishList</a></h5>
                        

                    </div>
                    <div className={style.icons3}>
                    <i class="fa-solid fa-bag-shopping"></i>
                    
                        <h5><a href="">Bag</a></h5>

                    </div>
                </article>

            </section>

        </div>
    )
}
export default Myntra