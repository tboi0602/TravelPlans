import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../src/page/LoginPage";
import RegisterPage from "../src/page/RegisterPage";
import HomePage from "../src/page/HomePage";
import LoadingPage from "../src/page/LoadingPage";
import PageNotFound from "../src/page/PageNotFound";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<LoadingPage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
