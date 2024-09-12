import React, { useContext } from "react";
import { MyContext } from "../useContext/UserContext";
import { useNavigate } from "react-router-dom";

function Result() {
  const { marks } = useContext(MyContext);
  const navigate = useNavigate();

  const back = () => {
    navigate("/home");
    window.location.reload();
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center mt-10 mb-6 text-gray-800">
        Result of Quiz Game is Given Below
      </h1>
      <div className="flex items-center justify-center mb-6">
        <div className="bg-blue-100 text-blue-700 font-bold text-4xl p-6 rounded-lg shadow-lg">
          {marks}
        </div>
      </div>
      <h1 className="text-2xl text-center text-green-600 font-semibold">
        Thanks for playing the game!
      </h1>
      <button
        onClick={back}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
      >
        home
      </button>
    </>
  );
}

export default Result;
