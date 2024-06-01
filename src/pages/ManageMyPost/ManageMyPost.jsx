/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";

const ManageMyPost = () => {
  const { user } = useContext(AuthContext);
  const [myVolunteerPosts, setMyVolunteerPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/volunteer/volunteerByEmail/${user?.email}`
      );
      setMyVolunteerPosts(data);
    };
    fetchData();
  }, [user?.email]);
  return (
    <div className="flex lg:justify-center my-8 overflow-auto ">
      <Tabs>
        <TabList className="bg-red-300  ">
          <Tab>
            <h1 className="font-poetsen text-orange-600">
              My Need Volunteer Post
            </h1>
          </Tab>
          <Tab>
            <h1 className="font-poetsen text-orange-600">
              My Volunteer Request Post
            </h1>
          </Tab>
        </TabList>

        <TabPanel className="">
         {
            myVolunteerPosts.length <= 0 ? 
            (
                <div className="flex justify-center mt-8">
                    <h1 className="font-poetsen text-2xl">You don't have any post</h1>

                    
                    
                </div>
            )
             : 
            (
                <div className="overflow-x-auto mt-5 ">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr className="font-pacifico font-bold text-xl ">
                    
                      <th>Image</th>
                      <th>Title</th>
                      <th>Organizer Name</th>
                      <th>Organizer Email</th>
                      <th>Update</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {myVolunteerPosts?.map((volunteerPost) => (
                      <tr key={volunteerPost?._id}>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img
                                  src={volunteerPost?.thumbnail}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="font-poetsen">
                          {volunteerPost?.title}
                          
                        </td>
                        <td className="font-pacifico">{volunteerPost?.organizerName}</td>
                        <td className="font-poetsen">
                            {volunteerPost?.organizerEmail}
                        </td>
                        <td>
                        <div className=" ">
            <button
              className="btn bg-green-300 hover:bg-green-600 text-white font-poetsen"
              onClick={() => document.getElementById(`my_modal_${volunteerPost?._id}`).showModal()}
            >
              Update
            </button>
            <dialog id={`my_modal_${volunteerPost?._id}`} className="modal mt-7">
              <div className="modal-box bg-gradient-to-r from-purple-200 via-pink-200 to-red-200 rounded-lg shadow-xl">
                <div className="container mx-auto p-6">
                  <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-3xl font-semibold mb-5 font-poetsen text-orange-400">
                      Update Volunteer Post
                    </h2>

                    <form
                    //   onSubmit={handleSubmit}
                      className="space-y-4"
                      method="dialog"
                    >
                      <button
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        // onClick={closeModal}
                      >
                        ✕
                      </button>
                      {/* Post Details */}
                      <div>
                        <label className="block text-lg font-medium text-gray-700 font-pacifico">
                          Post Title
                        </label>
                        <input
                          type="text"
                          name="title"
                          className="p-2 border rounded w-full bg-gray-100"
                          value={volunteerPost?.title}
                          
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
                        </td>
                        <td>
                            <button className="btn bg-red-300 text-white font-pacifico hover:bg-red-700">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
         }
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

ManageMyPost.propTypes = {};

export default ManageMyPost;
