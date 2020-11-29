import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import { Slider1 } from "../../../assets";
import './slider.scss';

const Slider = () => {
    return (
        <div class="slide">
            <div className="shadow-left"></div>
            <div className="shadow-right"></div>
        <OwlCarousel items={1}  
        className="owl-theme"
        loop  
        autoplay={true}
        autoWidth={true}
        center={true}
        margin={25} >
            {/* <div><img className="img" src={Slider1}/></div>
            <div><img className="img" src={Slider1}/></div> 
            <div><img className="img" src={Slider1}/></div>   */}
            <div><img className="img" src="https://images.vexels.com/media/users/3/194731/raw/98a06d45de142b379f6d236526aa9ada-shop-online-web-slider-design.jpg"/></div>  
            <div><img className="img" src="https://images.vexels.com/media/users/3/194733/raw/09e8c94ee143ff718334f2ddc0ecd330-online-shopping-neon-web-slider.jpg"/></div>
            <div><img className="img" src="https://images.vexels.com/media/users/3/194698/preview2/34d9aa618f832510ce7290b4f183484a-shop-online-slider-template.jpg"/></div>
            <div><img className="img" src="https://images.vexels.com/media/users/3/194731/raw/98a06d45de142b379f6d236526aa9ada-shop-online-web-slider-design.jpg"/></div>  
            <div><img className="img" src="https://images.vexels.com/media/users/3/194733/raw/09e8c94ee143ff718334f2ddc0ecd330-online-shopping-neon-web-slider.jpg"/></div>
            <div><img className="img" src="https://images.vexels.com/media/users/3/194698/preview2/34d9aa618f832510ce7290b4f183484a-shop-online-slider-template.jpg"/></div>
        </OwlCarousel>
        </div>  
    )
}

export default Slider
