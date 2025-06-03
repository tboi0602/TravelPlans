import { useNavigate } from "react-router-dom";
import home from "../assets/svg/home.svg";
import back from "../assets/svg/back.svg";
import plan from "../assets/svg/plan.svg";
const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="container px-10">
        <div className="flex flex-col items-center max-w-lg mx-auto text-center">
          <h1 className="text-9xl font-bold mb-4 relative">404
          <img src={plan} alt="plan.svg" className="w-14 absolute top-1 right-1 rotate-90" />
          </h1>
          <p className="text-xl mb-2 font-bold">Oops! Page Not Found</p>
          <p className="text-md font-semibold mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col lg:flex-row items-center w-full mt-4 gap-4 lg:gap-3">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center justify-center w-[80%] lg:w-2/5 px-5 py-3 text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 hover:bg-gray-100 border-gray-300 "
              aria-label="Go back to previous page"
            >
              <img src={back} alt="back.svg" />

              <span className="text-blue-600 font-bold">Go back</span>
            </button>

            <button
              onClick={() => navigate("/")}
              className="flex items-center justify-center w-[80%] lg:w-1/2 px-5 py-3 text-white transition-colors duration-200 bg-blue-600 rounded-lg gap-x-2 hover:bg-blue-500"
              aria-label="Go to home page"
            >
              <img src={home} alt="home icon" className="w-6 " />
              Take me home
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
