import { useContext, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddVolunteer = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);

  // handle Form Submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const thumbnail = form.picture.value;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const numberOfVolunteersNeeded = form.numberOfVolunteersNeeded.value;
    const deadline = startDate;
    const volunteerData = {
      thumbnail,
      title,
      description,
      category,
      location,
      numberOfVolunteersNeeded,
      deadline,
      organizerName: user?.displayName,
      organizerEmail: user?.email,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/volunteer",
        volunteerData
      );
      if (response.data) {
        Swal.fire({
          icon: "success",
          title: "Success...",
          text: "Successfully Posted",
        });
      }
      form.reset();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${error?.message}`,
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md my-8">
      <h2 className="text-4xl  font-bold mb-12 text-orange-400 text-center font-pacifico ">
        Post a Volunteer Opportunity
      </h2>
      <form onSubmit={handleFormSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 font-poetsen">
              Thumbnail URL
            </label>
            <input
              name="picture"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 font-poetsen">
              Post Title
            </label>
            <input
              name="title"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 font-poetsen">
            Description
          </label>
          <textarea
            name="description"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500"
          ></textarea>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 font-poetsen">
              Category
            </label>
            <select
              name="category"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500"
            >
              <option value="">Select a category</option>
              <option value="healthcare">Healthcare</option>
              <option value="education">Education</option>
              <option value="social-service">Social Service</option>
              <option value="animal-welfare">Animal Welfare</option>
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 font-poetsen">
              Location
            </label>
            <input
              name="location"
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 font-poetsen">
              Number of Volunteers Needed
            </label>
            <input
              name="numberOfVolunteersNeeded"
              type="number"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 font-poetsen">
              Deadline
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700 font-poetsen">
              Organizer Name
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              readOnly
              className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">
              Organizer Email
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              readOnly
              className="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-orange-600 text-white font-semibold rounded-md shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Add Post
          </button>
        </div>
      </form>
    </div>
  );
};

AddVolunteer.propTypes = {};

export default AddVolunteer;
