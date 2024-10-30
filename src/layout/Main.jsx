import { Outlet } from "react-router-dom";

import Footer from "../shared/Footer/Footer";
import TopHeader from "../shared/Header/TopHeader";

const Main = () => {
  return (
    <div>
      <TopHeader />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
