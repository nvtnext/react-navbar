import style from "./youtube.module.css"
import pic1 from "../Components/img/pngfind.com-youtube-subscribe-png-2981353.png"
import pic2 from "../Components/img/unnamed.jpeg"
const Youtube=()=>{
    return(
        <div>
            <section id={style.nav}>
                <article>
                    <div className={style.bar1}>
                    <i class="fa-solid fa-bars"></i>
                    </div>
                    <div className={style.logo1}>
                        <img src={pic1} alt="" />
                        <h5>in</h5>
                        
                    </div>
                    <div className={style.space1}></div>
                    <div className={style.searchbarr}>
                        <input type="text" placeholder="Search" />
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <div className={style.mic1}>
                    <i class="fa-solid fa-microphone"></i>
                    </div>
                    <div className={style.space1}></div>
                    <div className={style.icon1}>
                    <i class="fa-solid fa-video"></i>
                    </div>
                    <div className={style.icon2}>
                    <i class="fa-solid fa-bell"></i>
                    </div>
                    <div className={style.profileimgg}>
                        <img src={pic2} alt="" />

                    </div>
                </article>
            </section>

        </div>
    )
}
export default Youtube