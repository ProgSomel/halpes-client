// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import banner1Img from "../../../assets/Banner/banner1.jpg";
import banner2Img from "../../../assets/Banner/banner2.jpg";
import banner3Img from "../../../assets/Banner/banner3.jpg";

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Slide from '../Slide/Slide';
import './Banner.css'; // Import custom CSS

const Banner = () => {
    return (
        <Swiper
            navigation={true}
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <Slide image={banner1Img} h1="We are creating Brighter Tomorrow" text="Make Someone's Life by Giving of Yours." />
            </SwiperSlide>
            <SwiperSlide>
                <Slide image={banner2Img} h1='Rebuilding Lives for Futures' text="There is no Big Thing Than Your Concern" />
            </SwiperSlide>
            <SwiperSlide>
                <Slide image={banner3Img} h1="We are always for children" text="Give a Helping Hand to Those who Need It" />
            </SwiperSlide>
        </Swiper>
    );
};

Banner.propTypes = {};

export default Banner;
