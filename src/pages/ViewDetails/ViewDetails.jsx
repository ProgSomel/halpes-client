import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewDetails = () => {
  const { id } = useParams();
  const [volunteerPost, setVolunteerPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/volunteer/${id}`
        );
        setVolunteerPost(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="container mx-auto p-6">
      <div className="card bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg rounded-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-100">
        <figure className="w-full h-[400px] overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
            src={volunteerPost?.thumbnail}
            alt={volunteerPost?.title}
          />
        </figure>
        <div className="p-6">
          <h2 className="text-4xl font-semibold mb-3 text-white animate-pulse font-poetsen">{volunteerPost?.title}</h2>
          <p className="text-2xl  mb-4  font-pacifico text-orange-300">{volunteerPost?.category}</p>
          <p className="text-xl text-red-500 mb-6">
            <span className="font-pacifico">Deadline</span> : <span className="font-poetsen">{volunteerPost?.deadline}</span>
          </p>
          <p className="text-lg leading-relaxed text-gray-100 mb-6 font-poetsen">
            {volunteerPost?.description}
          </p>
          <div className="flex justify-center">
            <button className="btn bg-orange-400 font-bold py-3 px-6 rounded-xl border-none transition duration-300 ease-in-out transform hover:bg-orange-500 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-opacity-50 text-white font-poetsen">
              Be a Volunteer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
