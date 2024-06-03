import { Link, useOutletContext } from "react-router-dom";
import Banner from "../Banner/Banner";
import Carousel from "../../../components/Carousel/Carousel";

const Home = () => {
  const { darkMode } = useOutletContext();

  return (
    <div>
      <Banner />
      {/* Connects Non Profit */}
      <div className={`flex flex-col md:flex-row py-20 lg:py-32 px-12 gap-12 ${darkMode ? 'bg-black text-white' : 'bg-[#f6f1f1] text-black'}`}>
        <div>
          <h1 className="font-poetsen text-3xl text-center md:text-left">
            Connects Nonprofits, <br />
            Donors, & Companies <br />
            in Every Country
          </h1>
        </div>
        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-12 lg:w-3/4">
          {/* Cards 1 */}
          <div className="space-y-12">
            <div className="flex gap-2">
              <div>
                <img
                  className="w-[200px]"
                  src="https://bighearts.wgl-demo.net/wp-content/uploads/2020/08/icon-box_05.png"
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-poetsen text-2xl mb-2">Healthy Food</h1>
                <p className="font-mono">
                  We help local nonprofits access the funding, tools, training,
                  and support they need to become more.
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <div>
                <img
                  className="w-[200px]"
                  src="https://bighearts.wgl-demo.net/wp-content/uploads/2020/08/icon-box_07.png"
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-poetsen text-2xl mb-2">Medical Help</h1>
                <p className="font-mono">
                  We help local nonprofits access the funding, tools, training,
                  and support they need to become more.
                </p>
              </div>
            </div>
          </div>
          {/* Cards 2 */}
          <div>
            <div className="space-y-12">
              <div className="flex gap-2">
                <div>
                  <img
                    className="w-[200px]"
                    src="https://bighearts.wgl-demo.net/wp-content/uploads/2020/08/icon-box_06.png"
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="font-poetsen text-2xl mb-2">Clean Water</h1>
                  <p className="font-mono">
                    We help local nonprofits access the funding, tools,
                    training, and support they need to become more.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <div>
                  <img
                    className="w-[200px]"
                    src="https://bighearts.wgl-demo.net/wp-content/uploads/2020/08/icon-box_08.png"
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="font-poetsen text-2xl mb-2">Education</h1>
                  <p className="font-mono">
                    We help local nonprofits access the funding, tools,
                    training, and support they need to become more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Need Volunteer Now Section */}
      <div className="container mx-auto px-4 mt-12">
        <div className="mb-10 container mx-auto px-6 space-y-3">
          <h1 className="uppercase font-poetsen text-orange-400 text-sm">WE help Around the World</h1>
          <p className={` font-poetsen text-3xl md:text-5xl ${darkMode? "text-white": ""}`}>Volunteer Needs Now</p>
        </div>
        <Carousel />

        <div  className="flex justify-center ">
        <Link to="/needVolunteer">
        <button className="btn border-2 bg-transparent text-orange-400 font-poetsen mt-8 border-orange-400 hover:bg-orange-600 hover:text-2xl">See All Post</button>
        </Link>
        </div>
       
      </div>
      
    </div>
  );
};

Home.propTypes = {};

export default Home;
