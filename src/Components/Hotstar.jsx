import style from "./hotstar.module.css"
import pic1 from "../Components/img/PngItem_302949.png"
import pic2 from "../Components/img/disney-hotstar-logo-dark.svg"
import pic3 from "../Components/img/kids.svg"
const Hotstar=()=>{
    return(
        <div>
            {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
            {/* <h5>HI</h5> */}
            <section id={style.nav}>
                <article>
                    <div id={style.menubar}>
                        <img src={pic1} alt="" />
                    </div>
                    <div className={style.imgg}>
                        <img src={pic2} alt="" />
                    </div>
                   <div id={style.tv}>
                    <h5 >TV</h5>
                    
                   </div>
                   <div id={style.movies} >
                   <h5 >Movies</h5>
                    
                   </div>
                   <div id={style.sports}>
                   <h5 >Sports</h5>

                    
                   </div>
                   <div id={style.disney}>
                   <h5>Disney+</h5>
                   </div>
                    <div className={style.kids}>
                        <img src={pic3} alt="" />
                    </div>
                    <div className={style.space}></div>
                    <div className={style.search}>
                        <input  placeholder="Search" type="text" />
                    </div>
                    <div className={style.subs}>
                        <button ><h3>SUBSCRIBE</h3></button>
                    </div>
                    <div className={style.login}><h5>LOGIN</h5></div>
                </article>
            </section>


        </div>
    )
}
export default Hotstar