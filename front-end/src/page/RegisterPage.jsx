import { useEffect } from "react";

const RegisterPage = () => {
    useEffect(() => {
      document.title = "Đăng ký";
    }, []);
  return (
    <div>
        Đây là trang đăng ký
    </div>
  );
};

export default RegisterPage;