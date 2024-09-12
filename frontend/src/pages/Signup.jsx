import React, { useState } from 'react';
import axios from "axios"
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
const SignUp = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(()=>{
      const fetchingData =async ()=>{
       const reponse = await axios.get('http://localhost:5000/get')
        console.log(reponse.data)
      }
      fetchingData()
  },[])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
   

    console.log("response1")
      // Assuming signup API call
      const response = await axios.post('http://localhost:5000/signup', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      console.log(response)
   
     

      // Reset form
      setFormData({
        name: '',
        email: '',
        password: '',
        
      });
     console.log(formData)
     navigate("/signIn")
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create Your Account</h2>

  

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Create a password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
