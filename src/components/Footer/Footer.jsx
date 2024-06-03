/* eslint-disable react/no-unescaped-entities */
import logo from "../../assets/Icon/heart.png"

const Footer = () => {
    return (
        <div className="mt-8">
             <footer className="bg-gray-800 text-white py-2">
      <div className="max-w-6xl mx-auto px-5 md:px-2">
        <div className="flex flex-col md:flex-row md:px-4 justify-between items-center  gap-8">
          <div className="w-full space-y-3 md:w-1/2 lg:w-1/4 mb-8">
            <img className="text-white" src={logo} alt="" />
            <p>At Halpes, we believe in the power of community and the impact of collective action. Our platform connects passionate volunteers with meaningful opportunities to contribute to causes they care about. Whether you’re looking to lend a hand in local events, support educational programs, or participate in environmental conservation projects, there’s a place for you here.</p>
            <p className="text-green-500 font-bold">Working Day: Monday - Friday (9AM - 5PM)</p>


            <nav>
        <h6 className="text-white font-bold text-2xl mb-3">Follow us On :</h6>
        <div className="grid grid-flow-col gap-4">
          <a className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-gray-200"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-gray-200"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current text-gray-200"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>

          </div>


         
          <div className="">
            <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
            <ul>
             
              <li>Blog</li>
              <li>Contact Us</li>
              <li>Volunteer Need Post</li>
              <li>FAQ</li>
              <li>Gallery</li>
            </ul>
          </div>
          <div className="">
            <h3 className="text-2xl font-bold mb-4">Volunteer Need Type</h3>
            <ul>
              <li>Education</li>
              <li>Healthcare</li>
              <li>Social Service</li>
              <li>Animal Welfare</li>
              <li>Cleaning</li>
              
            </ul>
          </div>
          <div className=" text-center">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p>+880-566-1111-985</p>
          <p>+880-657-1111-576</p>
          <p>info@halpes.com</p>
          <p>support@halpes.com</p>
          <p>168/170, Avenue 01</p>
          <p>Mirpur DOHS, Bangladesh</p>
        </div>
        </div>
        
      </div>
    
    </footer>
    <div className="footer footer-center p-4 bg-base-300 text-base-content">
  <aside>
    <p>Copyright © 2024 - All right reserved by Turio</p>
  </aside>
</div>
        </div>
    );
};


Footer.propTypes = {

};


export default Footer;
