import { useEffect } from "react";

const HomePage = () => {
    useEffect(() => {
      document.title = "Trang chủ";
    }, []);
  return (
    <div>
      Đây là Trang chủ
    </div>
  );
};

export default HomePage;