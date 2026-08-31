import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Usercard from "./Components/Usercard";
import Form from "./Components/Form";

const App = () => {
   const [toggle, setToggle] = useState(true);  
   const [user, setUser] = useState([]);

  //  const deleteProduct = (id) => {
  //    const product = user.filter((elem) => elem.id !== id);
  //    setUser(product);
  //  }

  const deleteUser = (id)=>{
    const updatedUser = user.filter((elem, index) => index !== id);
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  }

  return (
    <div className="p-3 h-screen flex flex-col gap-4" >
      <Navbar setToggle={setToggle}/>

      {toggle ? (
        <div className="flex flex-wrap gap-10  ">
       {
       user.map((elem, index)=>
        <Usercard user={elem} deleteUser={deleteUser} ind ={index}/>)
       }  
      </div>
      ) : (
        <div className="flex justify-center h-[70%] items-center">
          <Form setToggle={setToggle} setUser={setUser} user={user}/>
        </div>
      ) 
      }

    </div>
  );
};

export default App;
