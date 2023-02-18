import style from "./zee5.module.css"
import pic1 from "../Components/img/ZEE5_logo.svg"//zee5
import pic2 from "../Components/img/9grid.png"//9grid
import pic3 from "../Components/img/search-13-xxl.png"//search
import pic4 from "../Components/img/menu_white.png"//menu
 const Zee5 =()=>{
    return(
        <div>
            {/* <h1>Zee5</h1> */}
            <section id={style.nav}>
                <article>
                    <div className={style.logo}>
                        <img src={pic1} alt="" />
                    </div>
                    <div className={style.list}>
                        <h5>Home</h5> 
                        <h5>TV Shows</h5> 
                        <h5>Movies</h5>
                        <h5>Criket</h5>
                        <h5>Webseries</h5>
                    </div>
                    <div className={style.grid}>
                        <img src={pic2} alt="" />
                    </div>
                    <div className={style.space}></div>
                    <div className={style.search}>
                        <img src={pic3} alt="" />
                        <input placeholder="Search for Movies, Shows, Channels etc. " type="text" />
                    </div>
                    <div className={style.A}>
                        <h1>A<sup>a<sup>+</sup></sup></h1>

                    </div>
                    <div className={style.login}>
                        <button><h5>Login</h5></button>

                    </div>
                    <div className={style.plan}>
                        <button><h5>Buy Plan</h5></button>

                    </div>
                    <div className={style.menubar}>
                        {/* <img src={pic4} alt="" /> */}
                        <i class="fa-solid fa-bars"></i>
                    </div>
                </article>

            </section>

        </div>
    )
 }
 export default Zee5 