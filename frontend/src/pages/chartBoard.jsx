import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Leaderboard = () => {

  const [players, setPlayers] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/scores/getTheLeaderBoardData');
        setPlayers(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchingData();
  }, []);



  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-blue-600">Leaderboard</h1>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white border border-gray-200 divide-y divide-gray-300">
          <thead className="bg-gray-50 text-gray-800 uppercase text-sm">
            <tr>
              <th className="py-4 px-6 text-center">Rank</th>
              <th className="py-4 px-6 text-center">Name</th>
              <th className="py-4 px-6 text-center">Score</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {players.map((user, index) => (
              <tr key={index} className="hover:bg-gray-100 transition-colors duration-200">
                <td className="py-3 px-6">{index + 1}</td>
                <td className="py-3 px-6">{user.name}</td>
                <td className="py-3 px-6 font-semibold">{user.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="my-7 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4" onClick={()=>navigate("/home")}>home</button>
    </div>
  );
};

export default Leaderboard;