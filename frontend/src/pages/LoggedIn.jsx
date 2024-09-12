import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../useContext/UserContext";

function HomePage() {
  const {
    data,
    marks,
    setMarks,
    setData,
    quize,
    setQuize,
    id,
    count,
    setCount,
  } = useContext(MyContext);
  const [rightAnswer, setRightAnswer] = useState("");
  const navigate = useNavigate();
  const [minutes, setMinutes] = useState(7);
  const [disable, setDisable] = useState(false);


   console.log(data)

   
  useEffect(() => {
    const interval = setInterval(() => {
      setMinutes((prevMinutes) => {
        if (prevMinutes <= 1) {
          clearInterval(interval);
          setDisable(true);
          return 0;
        }
        return prevMinutes - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const logout = async () => {
    const response = await axios.post("http://localhost:5000/delete");
    navigate("/signIn");
  };
  const submit = async () => {
    // Update marks if the answer is correct
    let finalMarks = marks;
    if (quize[count].answer === rightAnswer) {
      finalMarks = marks + 1; // Increment marks locally, don't wait for state update
      setMarks(finalMarks); // Update marks in state as well
    }

    // Submit the score
    try {
      const response = await axios.post("http://localhost:5000/scores/score", {
      
        name: data.username,
        score: finalMarks, // Use the final marks (whether updated or not)
      });
      console.log("Score submitted:", response.data);
    } catch (error) {
      console.error("Error submitting score:", error);
    }

    // Navigate to result page after posting the score
    navigate("/result");
  };

  const nextQuestion = () => {
    if (quize[count].answer == rightAnswer) {
      setMarks((prev) => prev + 1);
      console.log("marks");
      setCount(count + 1);
    }
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <nav className="bg-gray-800 p-4">
          <div className="flex items-center justify-between">
            <h1 className="text-white text-2xl">Welcome to Quiz Website</h1>
            <div>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={logout}
              >
                Logout
              </button>

              {
                data.email === "syedaliabdullahshah5@gmail.com" ? (
                  <>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
                      onClick={() => navigate("/adminPanel")}
                    >
                      Admin Panel
                    </button>

                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
                      onClick={() => navigate("/deleting")}
                    >
                      Deleting Data
                    </button>
                  </>
                ) : null // Fixing the incomplete logic
              }
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4"
                onClick={() => {
                  navigate("/chartBoard");
                }}
              >
                board
              </button>
            </div>
          </div>
        </nav>
        <div className="rounded bg-gray-200 mt-4 p-4">
          {quize.length > 0 && (
            <>
              <h1>{`Ques(${count + 1}) ` + quize[count].question}</h1>

              {quize[count].options.map((item, index) => (
                <button
                  key={index}
                  className="bg-green-500 m-4 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
                  value={item}
                  onClick={(e) => setRightAnswer(e.target.value)}
                  disabled={disable}
                >
                  {item}
                </button>
              ))}
              <h1 className="text-2xl font-semi-bold text-center text-pink-600 mt-8">
                Marks: {marks}
              </h1>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                onClick={nextQuestion}
                disabled={disable}
              >
                Next Question
              </button>
              {count === quize.length - 1 && (
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                  onClick={submit}
                  disabled={disable}
                >
                  submit
                </button>
              )}
              {disable === true && <h1 className="text-red-500">time up</h1>}
            </>
          )}
        </div>
        <p>Minutes: {minutes}</p>
      </div>
    </>
  );
}
export default HomePage;
