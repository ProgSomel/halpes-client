// Import Swiper React components
import 'animate.css';



// import required modules
import { useState } from "react";

const Card = () => {
  const destinations = [
    {
      image: "https://i.postimg.cc/3wxTtJQm/pexels-ahmed-akacha-3313934-6929741.jpg",
      title: "FOOD & WATER CHARITY",
      description: "At Halpes, our mission is to ensure that no one goes hungry and everyone has access to clean water. In many parts of the world, families face the daily struggle of finding enough food to eat and clean water to drink. Through our dedicated efforts, we deliver nutritious meals and safe drinking water to those in need, offering hope and a healthier future. "
    },
    {
      image: "https://i.postimg.cc/xC3Wpjqg/pexels-kevinbidwell-3013675.jpg",
      title: "Become a volunteer",
      description: "Volunteering is a powerful way to give back to your community and make a lasting impact on the lives of those in need. At Halpes, we rely on the compassion and dedication of volunteers like you to carry out our mission.  "
    },
    {
      image: "https://i.postimg.cc/fW5GxbGR/pexels-marcelochagas-6357427.jpg",
      title: "send a gift for children",
      description: "There’s nothing more heartwarming than seeing a child’s face light up with joy. By sending a gift through Halpes, you can make a significant difference in a child's life. Whether it's a toy, educational supplies, or a simple treat, your gift will bring happiness and hope to children who need it most.  "
    },
   
  ];

  const [hoveredSlide, setHoveredSlide] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredSlide(index);
  };

  const handleMouseLeave = () => {
    setHoveredSlide(null);
  };

  return (
    <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
     
     {destinations.map((destination, index) => (
            <div key={index}>
              <div
                className={`hero h-[512px]`}
                style={{
                  backgroundImage: `url(${destination.image})`,
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className={`hero-overlay transition-all duration-300 ${
                  hoveredSlide === index ? " bg-opacity-90" : ""
                }`}></div>
                <div className="text-center text-neutral-content h-full flex flex-col justify-end">
                  <div className={`max-w-md p-4 ${
                    hoveredSlide === index ? "animate__animated animate__backInUp" : ""
                  }`}>
                    {hoveredSlide === index ? (
                      <div className="">
                        <h1 className="mb-8 text-2xl font-poetsen italic font-bold ">{destination.title}</h1>
                        <p className="px-12 mb-[100px] font-poppins">{destination.description}</p>
                      </div>
                    ) : (
                      <h1 className="mb-[200px] font-bold  text-center uppercase  font-poetsen text-2xl italic  ">{destination.title}</h1>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
    
      </div>
   
  );
};

Card.propTypes = {};

export default Card;
