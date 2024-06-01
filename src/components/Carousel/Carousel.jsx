import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [volunteerPosts, setVolunteerPosts] = useState([]);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:5000/volunteer");
      setVolunteerPosts(data);
    };
    fetchData();
  }, []);

  const handleMouseEnter = () => {
    if (swiper) {
      swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiper) {
      swiper.autoplay.start();
    }
  };

  return (
    <Swiper
      slidesPerView={1} // default to 1 slide per view
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 1700,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      onSwiper={setSwiper}
    >
      {volunteerPosts?.slice(0, 6).map((volunteer, index) => (
        <SwiperSlide key={index}>
          <div
            className="card h-[500px]  bg-base-100 shadow-xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <figure className="px-6 py-6 rounded-lg">
              <img
                className="rounded-xl h-[200px] lg:h-[250px]"
                src={volunteer?.thumbnail}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-poetsen mb-5">
                {volunteer?.title}
              </h2>

              <div className="flex justify-between">
                <p className="font-pacifico text-orange-500">
                  {volunteer?.category}
                </p>
                <p className="font-pacifico">
                  <span className="text-red-400">Deadline</span> :{" "}
                  {volunteer?.deadline}
                </p>
              </div>
              <div className="card-actions w-full mt-12">
                <Link className="w-full" to={`/viewDetails/${volunteer?._id}`}>
                <button className="btn bg-orange-400 text-white font-poetsen w-full hover:bg-orange-600">
                  View Details
                </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
