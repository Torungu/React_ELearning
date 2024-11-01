import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import { path } from "../../common/path";
import LetStarted from "../../components/UI/LetStarted";
import Discover from "../../components/UI/Discover";
import Prepare from "../../components/UI/Prepare";
import WhyLearn from "../../components/UI/WhyLearn";
import Ecourse from "../../components/UI/Ecourse";
import PopularCourse from "../../components/UI/PopularCourse";
import SuccessStory from "../../components/UI/SuccessStory";

const HomePage = () => {
  const location = useLocation();
  return (
    <>
      <Header />
      <div className="space-y-10">
        {location.pathname === path.homePage && (
          <div className="space-y-10">
            <Banner />
            <Prepare />
            {/* <Ecourse /> */}
            {/* <WhyLearn /> */}
            <PopularCourse />
          </div>
        )}
        <main className="">
          <Outlet />
        </main>
        {location.pathname === path.homePage && (
          <>
            {/* <Discover /> */}
            <SuccessStory />
            {/* <LetStarted /> */}
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
