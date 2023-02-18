import style from "./googlemap.module.css"
import pic1 from "../Components/img/restaurant_black_18dp.png"
import pic2 from "../Components/img/hotel_black_18dp.png"
import pic3 from "../Components/img/photo_camera_black_18dp.png"
import pic4 from "../Components/img/museum_black_18dp.png"
import pic5 from "../Components/img/directions_transit_black_18dp.png"
import pic6 from "../Components/img/local_pharmacy_black_18dp.png"
import pic7 from "../Components/img/local_atm_black_18dp.png"
import pic8 from "../Components/img/unnamed.jpeg"
const Googlemap=()=>{
    return(
        <div>
            <section id={style.nav}>
                <article>
                    <div className={style.searchbarr}>
                    <i class="fa-solid fa-bars"></i>
                    <input type="text" placeholder="Search Google Maps" />
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <h5>|</h5>
                    <i class="fa-solid fa-share"></i>


                    </div>
                    <div className={style.list1}> 
                        <img src={pic1} alt="" />
                        <h5><a href="">Restaurant</a></h5>
                    </div>
                    <div className={style.list2}>
                    <img src={pic2} alt="" />
                        <h5>
                            <a href="">Hotels</a>
                        </h5>
        
                    </div>
                    <div className={style.list3}>
                    <img src={pic3} alt="" />
                        <h5>
                            <a href="">Things to do</a>
                        </h5>
                    </div>
                    <div className={style.list4}>
                    <img src={pic4} alt="" />
                        <h5>
                            <a href="">Museum</a>
                        </h5>
                    </div>
                    <div className={style.list5}>
                    <img src={pic5} alt="" />
                        <h5><a href="">Transit</a></h5>
                    </div>
                    <div className={style.list6}>
                    <img src={pic6} alt="" />
                        <h5>
                           <a href=""> Pharmacies</a>
                            
                        </h5>
                        </div>
                    <div className={style.list7}>
                    <img src={pic7} alt="" />
                        <h5><a href="">ATMs</a></h5>
                    </div>

                    <div className={style.sp}></div>
                    
                    <div className={style.proo}>
                    <i class="fa-solid fa-grip"></i>
                    <img src={pic8} alt="" />

                    </div>
                </article>

            </section>

        </div>
    )
}
export default Googlemap