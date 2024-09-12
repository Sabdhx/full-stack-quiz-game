import React, { useContext } from 'react'
import { MyContext } from '../useContext/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Deleting() {
  const {data,quize,id} = useContext(MyContext)

  const navigate = useNavigate()

  
  const deleteData = async (id) => {

    const response = await axios.delete(
      `http://localhost:5000/form/deleteData/${id}`
    );
   
    window.location.reload();
  }; 


  return (
    <>
    <div className=''>
  
    </div>
    {quize.map((item, index) => {
      return (
        <div key={index} className="p-6 bg-white rounded-lg shadow-md my-4">
               <button className="bg-red-500 px-4 rounded ml-[92%] " onClick={()=>deleteData(item._id)}>X</button>
          <h1 className="text-2xl font-semibold text-blue-600 mb-4">
            {item.question}
          </h1>
          <div className="space-y-2">
            {item.options.map((option, idx) => {
              return (
                <button
                  key={idx}
                  className="block w-full py-2 px-4 text-left bg-gray-100 rounded-md hover:bg-blue-50 border border-gray-300 transition-all duration-300 ease-in-out text-center"
                >
                  {option}
                </button>
              );
            })}
          </div>
          <h1 className="mt-6 text-lg font-medium text-green-500 bg-gray-100 p-2 rounded-md">
            Correct Answer: {item.answer}
          </h1>
        
        </div>
      );
    })}
      <button   className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-300 ease-in-out"
 onClick={()=>navigate("/home")}>home</button>
  </>
  
  )
}

export default Deleting