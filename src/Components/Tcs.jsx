import style from "./tcs.module.css"
import pic1 from "./download-1.svg"
import pic2 from "./download.svg"
import pic3 from "./tcssearch.svg"
const Tcs=()=>{
    return(
        <div>
            <section id={style.nav}>
                <article>
                    <div className={style.logo}>
                        <img src={pic1} alt="" />
                    </div>
                    <div className={style.menu}>
                        <ol>
                            <li><a href="">What we do    </a></li>
                            <li><a href="">Who we are    </a></li>
                            <li><a href="">Insights    </a></li>
                            <li><a href="">Careers    </a></li>
                            <li><a href="">Investors    </a></li>
                        </ol>
                    </div>
                   
               
                <div className={style.menu1}>
                        <ol>
                        <li><a href="">CONTACT US</a></li>
                        <li><a href="">TCS WORLDWIDE</a></li>
                        </ol>
        

                    </div>
                    <div className={style.logo3}>
                        <img src={pic3} alt="" />
                    </div>
                    <div className={style.logo2}>
                        <img src={pic2} alt="" />

                    </div>
        
                    </article>
            </section>
        </div>
    )
}
export default Tcs