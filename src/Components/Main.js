import React from "react";
import Header from "./Header";

const Main = ({ user }) => {
  return (
    <div className="main">
      <Header user={user} />
    </div>
  );
};

export default Main;
