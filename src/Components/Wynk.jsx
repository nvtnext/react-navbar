import style from "./wynk.module.css"
import pic1 from "../Components/img/wynk-seeklogo.com.svg"
const Wynk =()=>{
    return(
        <div>
            <section id={style.nav}>
                <article>
                    {/* <div className={style.bar1}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="w-7 h-7 text-brand-logo"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </div> */}
                    <div className={style.logo}>
                        <img src={pic1} alt="" />
                         </div>
                    <div className={style.searchbarr}>
                        <input type="text" placeholder="Search song, artists & poadcast you love!"/>
                        <div className={style.sea}>
                        <i class="fa-solid fa-magnifying-glass"></i>
                            
                        </div>
                        
                    </div>
                    <div className={style.menu1}>
                        <h5><a href="">Manage Subcription</a></h5>
                        <h5><a href="">Poadcasts</a></h5>
                        <h5><a href="">Download app</a></h5>
                    </div>
                    <div className={style.icon1}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="h-5 w-5 text-white cursor-pointer"><path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none"><rect x="3.14001" y="4.4823" width="9.8" height="9.8" rx="1.5" stroke="#E8EAED"></rect><path d="M5.22882 12.5083L7.42751 6.25635H8.65273L10.8514 12.5083H9.79403L9.31569 11.1069H6.77294L6.2862 12.5083H5.22882ZM7.05826 10.2257H9.01358L7.90585 6.95288H8.18278L7.05826 10.2257Z" fill="#E8EAED"></path><rect x="10.5601" y="11.1824" width="10.8" height="10.8" rx="2" fill="#181926" stroke="#E8EAED"></rect><path d="M19.2 14.0623V14.7386H17.7497V20.1662H17.5495L17.0001 19.5168V17.3706C16.6509 17.4878 16.3042 17.5342 15.9649 17.5098C15.9795 17.5977 15.9893 17.6856 15.9893 17.771C15.9893 18.1397 15.8672 18.44 15.6255 18.6696C15.3813 18.8991 15.0663 19.0163 14.6781 19.0163C14.1752 19.0163 13.743 18.7916 13.3816 18.3424C13.0203 17.8931 12.8005 17.3609 12.72 16.748H12.9592C13.0423 17.2119 13.2254 17.5977 13.511 17.9029C13.7967 18.2081 14.1166 18.3619 14.473 18.3619C14.705 18.3619 14.9223 18.2862 15.1225 18.1324C15.3227 17.9786 15.4228 17.7686 15.4228 17.4976C15.4228 17.3462 15.374 17.1997 15.2788 17.0605C15.1835 16.9214 15.0444 16.8188 14.8613 16.7505C14.6781 16.6821 14.5292 16.6479 14.4096 16.6479C14.2899 16.6479 14.1092 16.6723 13.87 16.7236L13.3353 16.0985C13.9212 16.0546 14.39 15.9374 14.7465 15.747C15.103 15.559 15.2812 15.3294 15.2812 15.0633C15.2812 14.8948 15.208 14.7557 15.0639 14.6434C14.9199 14.531 14.7441 14.4773 14.5414 14.4773C14.1825 14.4773 13.7161 14.6336 13.1448 14.9486L12.72 14.3382C13.1741 14.155 13.6112 14.0623 14.0311 14.0623C14.5194 14.0623 14.915 14.1843 15.2153 14.4309C15.5156 14.6775 15.667 15.0047 15.667 15.41C15.667 15.6444 15.5913 15.8495 15.4424 16.0253C15.2934 16.2011 15.0688 16.3451 14.7709 16.4599C15.2934 16.7016 15.7256 16.8213 16.0674 16.8213C16.69 16.8213 17.0025 16.5185 17.0025 15.9105V14.7386H16.2774L15.7427 14.0623H19.2Z" fill="#E8EAED"></path><path d="M4.56978 16.4891C4.26853 17.8974 4.64773 20.6046 8.57452 20.1673" stroke="white" stroke-width="0.8"></path><path d="M7.76624 19.2633L8.69669 20.074L7.76624 21.0635" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.55902 17.4042L4.36152 16.4737L5.3188 17.4042" stroke="white" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>

                    </div>
                    <div className={style.sign}>
                        <h5><a href="">sign in</a></h5>
                    </div>
                </article>
            </section>

        </div>
    )
}
export default Wynk 
