import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminPanel() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate()

  // console.log(quize);

  useEffect(() => {}, []);

  const handleSubmit = async () => {
    console.log("submit");
    const response = await axios.post("http://localhost:5000/form/newForm",{question,options,answer});
    navigate("/home")
    console.log(response.data);
  };

  return (
    <div className="grid grid-cols-1 gap-6 px-8 py-6 md:px-[15%] bg-white rounded-lg shadow-lg">
    <input
      type="text"
      placeholder="Enter your question"
      className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-[80%] mx-auto"
      onChange={(e) => setQuestion(e.target.value)}
    />
  
    <input
      type="text"
      placeholder="Option 1"
      className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-[80%] mx-auto"
      onChange={(e) =>
        setOptions((prevOption) => [e.target.value, ...prevOption.slice(0)])
      }
    />
  
    <input
      type="text"
      placeholder="Option 2"
      className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-[80%] mx-auto"
      onChange={(e) =>
        setOptions((prevOption) => [
          options[0],
          e.target.value,
          ...prevOption.slice(1),
        ])
      }
    />
  
    <input
      type="text"
      placeholder="Option 3"
      className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-[80%] mx-auto"
      onChange={(e) =>
        setOptions((prevOption) => [
          options[0],
          options[1],
          e.target.value,
          ...prevOption.slice(2),
        ])
      }
    />
  
    <input
      type="text"
      placeholder="Option 4"
      className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-[80%] mx-auto"
      onChange={(e) =>
        setOptions((prevOption) => [
          options[0],
          options[1],
          options[2],
          e.target.value,
        ])
      }
    />
  
    <input
      type="text"
      placeholder="Correct Answer"
      className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 w-full md:w-[80%] mx-auto"
      onChange={(e) => setAnswer(e.target.value)}
    />
  
    <button
      className="w-full md:w-[80%] mx-auto bg-blue-500 text-white rounded-lg py-3 mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={handleSubmit}
    >
      Submit
    </button>
    <button
      className="w-full md:w-[80%] mx-auto bg-blue-500 text-white rounded-lg py-3 mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onClick={()=>navigate("/home")}
    >
      back
    </button>
  </div>
  
  );
}

export default AdminPanel;
