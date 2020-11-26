import Carousel from 'react-bootstrap/Carousel'
import { Slider1 } from "../../../assets";

import './slider.scss';

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src={Slider1}
                alt="First slide"
                style={{
                    height:"280px"
                }}
                />
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src={Slider1}
                alt="First slide"
                style={{
                    height:"280px"
                }}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Slider1}
                    alt="First slide"
                    style={{
                        height:"280px"
                    }}
                />
            </Carousel.Item>
            </Carousel>
    )
}

export default Slider
