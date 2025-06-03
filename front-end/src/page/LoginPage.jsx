import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from "../components/inputs/InputForm";
import logo from "../assets/png/logo-main.png";
import img_frame_login from "../assets/png/img_frame_login.png";
import chevronLeft from "../assets/svg/chevronLeft.svg";
import emailIcon from "../assets/svg/emailIcon.svg";
import lockIcon from "../assets/svg/lockIcon.svg";
import googleLogo from "../assets/svg/googleLogo.svg";
import facebookLogo from "../assets/svg/facebookLogo.svg";
import angle from "../assets/svg/angle.svg";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    document.title = "Đăng nhập";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng nhập ở đây
  };

  return (
    <>
      <div className="w-full h-screen absolute overflow-hidden">
        <img src={angle} alt="angle.svg" className="bottom-[-130px] absolute" />
      </div>

      <div className="flex justify-center items-center min-h-screen px-4 py-10 bg-gray-100 ">
        <div
          className="bg-white rounded-xl shadow-xl w-full max-w-[866px] flex flex-col lg:flex-row overflow-hidden"
        >

          <div
            className="hidden lg:block lg:w-1/2 z-10"
          >
          <img src={img_frame_login} alt="img_frame_login" className="w-full h-full object-cover object-center" />
          </div>

          {/* Cột bên phải (form) */}
          <div className="w-full lg:w-1/2 p-6 sm:p-10 bg-white bg-opacity-90 backdrop-blur-sm ">
            <div className="flex items-center justify-center mb-6 relative">
              <img src={logo} alt="logo" className="w-[140px]" />
              <div
                onClick={() => navigate("/")}
                className="flex items-center text-gray-600 hover:text-black cursor-pointer absolute top-0 right-0"
              >
                <img src={chevronLeft} alt="back" className="w-6 h-6  " />

              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <InputForm
                placeholder="Email"
                icon={emailIcon}
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                inputClassName="text-right"
              />
              <InputForm
                placeholder="Mật khẩu"
                icon={lockIcon}
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                inputClassName="text-right"
              />
              <p className="text-sm text-right text-gray-500 hover:text-blue-600 cursor-pointer">
                Quên mật khẩu?
              </p>
              <button
                type="submit"
                className="bg-black text-white font-bold text-lg py-2 rounded-xl hover:bg-black/70 transition-all"
              >
                Đăng nhập
              </button>
            </form>

            {/* Social login */}
            <div className="flex items-center my-4">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="mx-4 text-sm text-gray-500">Hoặc</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <button className="flex items-center justify-center gap-2 border w-full py-3 rounded-xl bg-white hover:bg-gray-100 transition-all">
                <img src={googleLogo} alt="Google" className="w-6" />
                Google
              </button>
              <button className="flex items-center justify-center gap-2 border w-full py-3 rounded-xl bg-white hover:bg-gray-100 transition-all">
                <img src={facebookLogo} alt="Facebook" className="w-6" />
                Facebook
              </button>
            </div>

            {/* Register */}
            <div className="text-center mt-4 text-sm">
              Không có tài khoản? |
              <button
                onClick={() => navigate("/register")}
                className="ml-1 font-semibold text-black hover:underline"
              >
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
