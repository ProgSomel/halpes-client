/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import DatePicker from "react-datepicker";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const ManageMyPost = () => {
  const { user } = useContext(AuthContext);
  const [myVolunteerPosts, setMyVolunteerPosts] = useState([]);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    fetchData();
  }, [user?.email]);

  const fetchData = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/volunteer/volunteerByEmail/${user?.email}`
    );
    setMyVolunteerPosts(data);
  };

  //!   handle Update
  const handleUpdate = async (e, id) => {
    e.preventDefault();
    const form = e.target;
    const thumbnail = form.picture.value;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const location = form.location.value;
    const numberOfVolunteersNeeded = form.numberOfVolunteersNeeded.value;
    const deadline = startDate;
    const updateVolunteerData = {
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
      const response = await axios.put(
        `http://localhost:5000/volunteer/updatePost/${id}`,
        updateVolunteerData
      );
      if (response) {
        toast.success("Successfully updated");
        fetchData();
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };

  //!   handle Delete
  const handleDelete = async (id) => {
    try {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn bg-red-500 hover:bg-red-600",
          cancelButton: "btn bg-green-400 hover:bg-green-500",
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then(async (result) => {
          if (result.isConfirmed) {
            await axios.delete(`http://localhost:5000/volunteer/${id}`);
      toast.success(`Post Successfully Deleted`);
      fetchData();
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Your Post has been deleted.",
              icon: "success",
            });
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire({
              title: "Cancelled",
              text: "Your Post  is safe :)",
              icon: "error",
            });
          }
        });
      
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <div className="flex lg:justify-center my-8 overflow-auto ">
      <Tabs>
        <TabList className=" flex  md:justify-center  mb-12 border-b-2">
          <div className="flex bg-orange-200 ">
            <Tab>
              <h1 className="font-poetsen text-orange-600">
                My Need Volunteer Post
              </h1>
            </Tab>
            <Tab>
              <h1 className="font-poetsen text-orange-600">
                My Need Volunteer Post
              </h1>
            </Tab>
          </div>
        </TabList>

        <TabPanel className="">
          {myVolunteerPosts.length <= 0 ? (
            <div className="flex justify-center mt-8">
              <h1 className="font-poetsen text-2xl">You don't have any post</h1>
            </div>
          ) : (
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
                      <td className="font-poetsen">{volunteerPost?.title}</td>
                      <td className="font-pacifico">
                        {volunteerPost?.organizerName}
                      </td>
                      <td className="font-poetsen">
                        {volunteerPost?.organizerEmail}
                      </td>
                      <td>
                        <button
                          className="btn bg-green-500 hover:bg-green-600 text-white font-poetsen"
                          onClick={() =>
                            document
                              .getElementById(`my_modal_${volunteerPost?._id}`)
                              .showModal()
                          }
                        >
                          Update
                        </button>
                        <dialog
                          id={`my_modal_${volunteerPost?._id}`}
                          className="modal mt-7"
                        >
                          <div className="modal-box bg-gradient-to-r from-purple-200 via-pink-200 to-red-200 rounded-lg shadow-xl">
                            <form method="dialog">
                              {/* if there is a button in form, it will close the modal */}
                              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                              </button>
                            </form>

                            <form
                              onSubmit={(e) =>
                                handleUpdate(e, volunteerPost?._id)
                              }
                              className="space-y-4"
                            >
                              <h2 className="text-3xl font-semibold mb-6 text-center text-orange-600 font-poetsen">
                                Update Volunteer Spot
                              </h2>
                              {/* Post Details */}
                              <div>
                                <label className="block text-lg font-medium text-gray-700 font-pacifico">
                                  Thumbnail URL
                                </label>
                                <input
                                  type="text"
                                  name="picture"
                                  className="p-2 border rounded w-full bg-gray-100"
                                  defaultValue={volunteerPost?.thumbnail}
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
                                  defaultValue={volunteerPost?.title}
                                />
                              </div>

                              <div>
                                <label className="block text-lg font-medium text-gray-700 font-pacifico">
                                  Description
                                </label>
                                <textarea
                                  className="p-2 border rounded w-full bg-gray-100 "
                                  name="description"
                                  defaultValue={volunteerPost?.description}
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
                                  defaultValue={volunteerPost?.category}
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
                                  defaultValue={volunteerPost?.location}
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
                                  defaultValue={
                                    volunteerPost?.numberOfVolunteersNeeded
                                  }
                                />
                              </div>

                              <div>
                                <label className="block text-lg font-medium text-gray-700 font-pacifico">
                                  Deadline
                                </label>
                                <DatePicker
                                  selected={volunteerPost?.deadline}
                                  onChange={(date) => setStartDate(date)}
                                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500"
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
                                  defaultValue={volunteerPost?.organizerName}
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
                                  defaultValue={volunteerPost?.organizerEmail}
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

                              {/* Submit Button */}
                              <div className="flex justify-center w-full">
                                <button
                                  type="submit"
                                  className="btn w-full bg-orange-500 text-white font-bold py-3 px-6 rounded-xl transition duration-300 ease-in-out transform hover:bg-orange-600 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-opacity-50"
                                >
                                  Update Post
                                </button>
                              </div>
                            </form>
                          </div>
                        </dialog>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDelete(volunteerPost?._id)}
                          className="btn bg-red-500 text-white font-pacifico hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
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
