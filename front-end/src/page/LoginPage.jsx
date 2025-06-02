import { useEffect } from "react";
const LoginPage = () => {
  useEffect(() => {
    document.title = "Đăng nhập";
  }, []);
  return (
    <div>
     
      <h1>Trang đăng nhập</h1>
    </div>
  );
}
export default LoginPage;
