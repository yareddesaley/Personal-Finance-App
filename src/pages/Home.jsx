import React from "react";
import LeftSideBar from "../components/LeftSideBar";
import Main from "../components/Main";

const Home = () => {
  return (
    <div className="flex mb-20 overflow-x-clip">
      <LeftSideBar />
      <Main />
    </div>
  );
};

export default Home;
