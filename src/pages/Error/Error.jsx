import React from 'react';
import errorImg from "../../assets/404.gif";

const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <img
        src={errorImg}
        alt="404 Error"
        className="max-w-full h-auto w-[80%] md:w-[60%] lg:w-[40%]"
      />
    </div>
  );
};

export default Error;
