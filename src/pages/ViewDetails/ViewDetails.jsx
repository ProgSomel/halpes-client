import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";

const ViewDetails = () => {
  const { id } = useParams();
  const [volunteerPost, setVolunteerPost] = useState(null);
  const { user } = useContext(AuthContext);

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

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const thumbnail = form.picture.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const numberOfVolunteersNeeded = form.numberOfVolunteersNeeded.value;
    const deadline = form.deadline.value;
    const organizerName = form.organizerName.value;
    const organizerEmail = form.organizerEmail.value;
    const volunteerEmail = form.volunteerEmail.value;
    const volunteerName = form.volunteerName.value;
    const suggestion = form.suggestion.value;
    const status = form.status.value;
    const beAVolunteerData = {
      volunteerPostId: volunteerPost?._id,
      thumbnail,
      title,
      description,
      category,
      location,
      numberOfVolunteersNeeded,
      deadline,
      organizerName,
      organizerEmail,
      volunteerName,
      volunteerEmail,
      suggestion,
      status,
    };

    if (user?.email === organizerEmail) {
      toast.error("You Are the Organizer");
      return;
    }
    if(parseInt(volunteerPost?.numberOfVolunteersNeeded) <=0) {
      toast.error("Already Filled Up. No More Volunteer Needed");
      return;
    }

    try {
      const {data} = await axios.post(
        "http://localhost:5000/beAvolunteer",
        beAVolunteerData
      );
      if (data) {
        toast.success("Successfully Requested");

      }
     
    } catch (error) {
      toast.error(`Already Requested: ${error.message}`);
    }
  };

  const closeModal = (e) => {
    e.preventDefault(); // Prevent form submission
    document.getElementById("my_modal_3").close();
  };

  return (
    <div className="container mx-auto p-6">
      <div className="card bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-lg rounded-lg overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-100">
        <figure className="w-full h-[200px] sm:h-[400px] overflow-hidden">
          <img
          
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
            src={volunteerPost?.thumbnail}
            alt={volunteerPost?.title}
          />
        </figure>
        <div className="p-6">
          <h2 className="text-4xl font-semibold mb-3 text-white animate-pulse font-poetsen">
            {volunteerPost?.title}
          </h2>
          <p className="text-2xl mb-4 font-pacifico text-orange-300">
            {volunteerPost?.category}
          </p>
          <p className="text-xl text-red-500 mb-6">
            <span className="font-pacifico">Deadline</span>:{" "}
            <span className="font-poetsen">{volunteerPost?.deadline}</span>
          </p>
          <p className="text-lg leading-relaxed text-gray-100 mb-6 font-poetsen">
            {volunteerPost?.description}
          </p>
          <div className="flex justify-center ">
            <button
              className="btn bg-orange-400 font-bold py-3 px-6 rounded-xl border-none transition duration-300 ease-in-out transform hover:bg-orange-500 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-opacity-50 text-white font-poetsen"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Be A Volunteer
            </button>
            <dialog id="my_modal_3" className="modal mt-7">
              <div className="modal-box bg-gradient-to-r from-purple-200 via-pink-200 to-red-200 rounded-lg shadow-xl">
                <div className="">
                  <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-3xl font-semibold mb-5 font-poetsen text-orange-400">
                      Volunteer Request Form
                    </h2>

                    <form
                      onSubmit={handleSubmit}
                      className="space-y-4"
                      method="dialog"
                    >
                      <button
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={closeModal}
                      >
                        ✕
                      </button>
                      {/* Post Details */}
                      <div>
                        <label className="block text-lg font-medium text-gray-700 font-pacifico">
                          Thumbnail URL
                        </label>
                        <input
                          type="text"
                          name="picture"
                          className="p-2 border rounded w-full bg-gray-100"
                          value={volunteerPost?.thumbnail}
                          readOnly
                        />
                      </div>
                      <div>
                        <label className="block text-lg font-medium text-gray-700 font-pacifico">
                          Post Title
                        </label>
                        <input
                          type="text"
                          name="title"
                          className="p-2 border rounded w-full bg-gray-100"
                          value={volunteerPost?.title}
                          readOnly
                        />
                      </div>

                      <div>
                        <label className="block text-lg font-medium text-gray-700 font-pacifico">
                          Description
                        </label>
                        <textarea
                          className="p-2 border rounded w-full bg-gray-100 "
                          name="description"
                          value={volunteerPost?.description}
                          readOnly
                        />
                      </div>

                      <div>
                        <label className="block text-lg font-medium text-gray-700 font-pacifico">
                          Category
                        </label>
                        <input
                          type="text"
                          name="category"
                          className="p-2 border rounded w-full bg-gray-100"
                          value={volunteerPost?.category}
                          readOnly
                        />
                      </div>

                      <div>
                        <label className="block text-lg font-medium text-gray-700 font-pacifico">
                          Location
                        </label>
                        <input
                          type="text"
                          name="location"
                          className="p-2 border rounded w-full bg-gray-100"
                          value={volunteerPost?.location}
                          readOnly
                        />
                      </div>

                      <div>
                        <label className="block text-lg font-medium text-gray-700 font-pacifico">
                          No. of Volunteers Needed
                        </label>
                        <input
                          type="text"
                          name="numberOfVolunteersNeeded"
                          className="p-2 border rounded w-full bg-gray-100"
                          value={volunteerPost?.numberOfVolunteersNeeded}
                          readOnly
                        />
                      </div>

                      <div>
                        <label className="block text-lg font-medium text-gray-700 font-pacifico">
                          Deadline
                        </label>
                        <input
                          type="text"
                          name="deadline"
                          className="p-2 border rounded w-full bg-gray-100"
                          value={volunteerPost?.deadline}
                          readOnly
                        />
                      </div>

                      <div>
                        <label className="block text-lg font-medium text-gray-700 font-pacifico">
                          Organizer Name
                        </label>
                        <input
                          type="text"
                          name="organizerName"
                          className="p-2 border rounded w-full bg-gray-100"
                          value={volunteerPost?.organizerName}
                          readOnly
                        />
                      </div>

                      <div>
                        <label className="block text-lg font-medium text-gray-700 font-pacifico">
                          Organizer Email
                        </label>
                        <input
                          type="text"
                          name="organizerEmail"
                          className="p-2 border rounded w-full bg-gray-100"
                          value={volunteerPost?.organizerEmail}
                          readOnly
                        />
                      </div>

                      {/* Volunteer Details */}
                      <div>
                        <label className="block text-lg font-medium text-gray-700 font-pacifico">
                          Volunteer Name
                        </label>
                        <input
                          type="text"
                          name="volunteerName"
                          className="p-2 border rounded w-full bg-gray-100"
                          value={user?.displayName}
                          readOnly
                        />
                      </div>

                      <div>
                        <label className="block text-lg font-medium text-gray-700 font-pacifico">
                          Volunteer Email
                        </label>
                        <input
                          type="email"
                          name="volunteerEmail"
                          className="p-2 border rounded w-full bg-gray-100"
                          value={user?.email}
                          readOnly
                        />
                      </div>

                      {/* Suggestion */}
                      <div>
                        <label className="block text-lg font-medium text-gray-700 font-pacifico">
                          Suggestion
                        </label>
                        <textarea
                          name="suggestion"
                          className="p-2 border rounded w-full"
                          placeholder="Your suggestion"
                        />
                      </div>

                      {/* Status */}
                      <div>
                        <label className="block text-lg font-medium text-gray-700 font-pacifico">
                          Status
                        </label>
                        <input
                          name="status"
                          className="p-2 border rounded w-full bg-gray-100"
                          placeholder="Status"
                          value="requested"
                          readOnly
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="flex justify-center w-full">
                        <button
                          type="submit"
                          className="btn w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-xl transition duration-300 ease-in-out transform hover:bg-orange-600 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-opacity-50"
                        >
                          Request
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
