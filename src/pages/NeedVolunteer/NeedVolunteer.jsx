import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NeedVolunteer = () => {
  const [volunteerPosts, setVolunteerPosts] = useState([]);
  const [searchedVolunteerPosts, setsearchedVolunteerPosts] = useState([]);
  const [changeLayout, setChangeLayout] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:5000/volunteer");
      setVolunteerPosts(data);
    };
    fetchData();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    const form = e.target;
    const searchText = form.search.value;

    const { data } = await axios.get(
      `http://localhost:5000/volunteer?search=${searchText}`
    );

    setsearchedVolunteerPosts(data);
    form.reset();
  };

  return (
    <div className="my-12 container mx-auto px-4 md:px-8">
      <form
        onSubmit={handleSearch}
        action=""
        className="flex justify-center mb-8 gap-y-4 lg:gap-y-0 lg:gap-2 flex-col lg:flex-row"
      >
        <div className="join  flex justify-center lg:justify-normal">
          <input
            name="search"
            className="input input-bordered join-item"
            placeholder="title"
          />
          <button
          
            type="submit"
            className="btn join-item rounded-r-lg bg-orange-300 text-white font-poetsen"
          >
            Search
          </button>
        </div>

        <div className="flex justify-center lg:justify-normal"><button onClick={()=>setChangeLayout(!changeLayout)} className="btn border border-orange-400 bg-transparent font-poetsen text-orange-400">Change Layout</button></div>
      </form>

      {changeLayout ? (
        <div>
          {searchedVolunteerPosts.length > 0 ? (
             <div className="overflow-x-auto flex justify-center text-center">
             <table className="table">
               {/* head */}
               <thead>
                 <tr>
                  
                   <th>Image</th>
                   <th>Title</th>
                   <th>Category</th>
                   <th>Deadline</th>
                   <th>Details</th>
                 </tr>
               </thead>
               <tbody>
                
                {
                 searchedVolunteerPosts?.map((volunteerPost) =>(
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
                   <td>{volunteerPost?.title}</td>
                   <td>{volunteerPost?.category}</td>
                   <td>{new Date(volunteerPost?.deadline).toLocaleDateString()}</td>
                   <td>
                   <Link
                         className=""
                         to={`/viewDetails/${volunteerPost?._id}`}
                       >
                         <button className="btn w-[70px]  bg-orange-400 text-white font-poetsen  hover:bg-orange-600  border-1">
                           View Details
                         </button>
                       </Link>
                   </td>
                 </tr>
                 ))
                }
               
              
               
               </tbody>
             
              
             </table>
           </div>
          ) : (
            <div className="overflow-x-auto flex justify-center text-center">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                 
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Deadline</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
               
               {
                volunteerPosts?.map((volunteerPost) =>(
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
                  <td>{volunteerPost?.title}</td>
                  <td>{volunteerPost?.category}</td>
                  <td>{new Date(volunteerPost?.deadline).toLocaleDateString()}</td>
                  <td>
                  <Link
                        className=""
                        to={`/viewDetails/${volunteerPost?._id}`}
                      >
                        <button className="btn w-[70px]  bg-orange-400 text-white font-poetsen  hover:bg-orange-600  border-1">
                          View Details
                        </button>
                      </Link>
                  </td>
                </tr>
                ))
               }
              
             
              
              </tbody>
            
             
            </table>
          </div>
          )}
        </div>
      ) : (
        <div>
          {searchedVolunteerPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {searchedVolunteerPosts?.map((volunteerPost) => (
                <div
                  key={volunteerPost._id}
                  className="card h-[530px] pt-4  bg-base-100 shadow-xl"
                >
                  <figure className="px-6 py-6 rounded-lg">
                    <img
                      className="rounded-xl h-[200px] lg:h-[250px]"
                      src={volunteerPost?.thumbnail}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title font-poetsen mb-5">
                      {volunteerPost?.title}
                    </h2>

                    <div className="flex justify-between">
                      <p className="font-pacifico text-orange-500">
                        {volunteerPost?.category}
                      </p>
                      <p className="font-pacifico">
                        <span className="text-red-400">Deadline</span> :{" "}
                        {volunteerPost?.deadline}
                      </p>
                    </div>
                    <div className=" w-full mt-12">
                      <Link
                        className="w-full"
                        to={`/viewDetails/${volunteerPost?._id}`}
                      >
                        <button className="btn bg-orange-400 text-white font-poetsen w-full hover:bg-orange-600  border-1">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {volunteerPosts?.map((volunteerPost) => (
                <div
                  key={volunteerPost._id}
                  className="card h-[530px] pt-4  bg-base-100 shadow-xl"
                >
                  <figure className="px-6 py-6 rounded-lg">
                    <img
                      className="rounded-xl h-[200px] lg:h-[250px]"
                      src={volunteerPost?.thumbnail}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title font-poetsen mb-5">
                      {volunteerPost?.title}
                    </h2>

                    <div className="flex justify-between">
                      <p className="font-pacifico text-orange-500">
                        {volunteerPost?.category}
                      </p>
                      <p className="font-pacifico">
                        <span className="text-red-400">Deadline</span> :{" "}
                        {volunteerPost?.deadline}
                      </p>
                    </div>
                    <div className=" w-full mt-12">
                      <Link
                        className="w-full"
                        to={`/viewDetails/${volunteerPost?._id}`}
                      >
                        <button className="btn bg-orange-400 text-white font-poetsen w-full hover:bg-orange-600  border-1">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

NeedVolunteer.propTypes = {};

export default NeedVolunteer;
