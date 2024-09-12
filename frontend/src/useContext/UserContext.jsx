import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

export const MyContext = createContext();
axios.defaults.withCredentials = true;
function UserContext({ children }) {
  const [data, setData] = useState( JSON.parse(localStorage.getItem("user")) || null );
  const [marks , setMarks] = useState(0)
  const [token,setToken] = useState("")
  const [ quize , setQuize ] = useState([])
  const [id , setId] = useState(null)
  const  [count , setCount ] = useState(0)
  useEffect(() => {
    const fetchingData = async () => {
      // console.log("first");
      const response = await axios.get("http://localhost:5000/form/allData");
      setId(response.data.data[count]);
      setQuize(response.data.data);
      // console.log(response.data);
    };
    fetchingData();
  }, []);

  return (
    <MyContext.Provider 
    value={{ data, setData , marks , setMarks , setToken,quize,setQuize , id,setCount,count}}>
      {children}
    </MyContext.Provider>
  );
}
export default UserContext