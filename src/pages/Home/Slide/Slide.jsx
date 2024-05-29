import PropTypes from "prop-types";
import bgImg from "../../../assets/Banner/bg.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Slide = ({ image, h1, text }) => {
  useEffect(()=> {
    AOS.init({
      duration: 1000,
    })
  }, [])
  return (
    <div>
      <div
        className="min-h-screen"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div
          className="min-h-screen opacity-70"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            animation: 'float 10s infinite alternate'
          }}
        >
          <div data-aos="fade-up" className="flex justify-center items-center min-h-screen flex-col space-y-5">
            <h1 className="text-white text-xl md:text-3xl  font-semibold font-pacifico italic shadow-xl opacity-[600px] text-center uppercase">{h1}</h1>
            <p className="text-3xl md:text-5xl lg:text-7xl text-center font-poetsen font-bold text-white shadow-xl opacity-[600px]">{text}</p>
          </div>
        </div>
      </div>

      {/* Floating animation keyframes */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateX(0); }
            50% { transform: translateX(10px); }
            100% { transform: translateX(-10px); }
          }
          .float {
            animation: float 10s infinite alternate;
          }
          // .shadow-xl {
          //   text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
          // }
        `}
      </style>
    </div>
  );
};

Slide.propTypes = {
  image: PropTypes.string.isRequired,
  h1: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Slide;
