import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addUser } from "./redux/slices/userSlice";
import { useSaveUserMutation } from './redux/api/api'
import { useGetSaveUserQuery} from './redux/api/api';
import {useDeleteSaveUserMutation} from './redux/api/api';
import {useEditSaveUserMutation } from './redux/api/api';




function Counter() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [editUserId, setEditUserId] = useState("")


 
  // const userN = useSelector((state) => state.user.userName);

  
  const dispatch = useDispatch();
  const [saveUser, { isLoading }] = useSaveUserMutation();
  const [deleteSaveUser] = useDeleteSaveUserMutation();
  const [editSaveUser] = useEditSaveUserMutation();
  const { data ,isLoading: fetchUserLoading, isSuccess: fetchUserSuccess, refetch} = useGetSaveUserQuery();
  


useEffect (()=>{
  refetch();
},[name])

const handleEdit = async (id) => {
  try {
    const userToEdit = data.find((user) => user._id === id);
    if (userToEdit) {
      setEditUserId(id);
      setName(userToEdit.user);
      setEmail(userToEdit.email);
 
    }
  } catch (error) {
    
    console.log(error)
  }
};

const saveEditUser = async (e) => {
  e.preventDefault();
  try {
   await editSaveUser({user : name, email : email, id : editUserId});
    setName("")
    setEmail(""); 
    setEditUserId(null);
    
  } catch (error) {
    
    console.log(error)
  }
};

const handleDelete = async (id) => {
  try {
   
    await deleteSaveUser(id);
    setName("")
    await refetch(); 
   
   
  } catch (error) {
    
    console.log(error)
  }
};

  const handleSaveUser = async (e) => {
    try {
     e.preventDefault();
      await saveUser({user : name, email : email});
      setName("")
      setEmail("")

     
     
    } catch (error) {
      
      console.log(error)
    }
  };

  return (
    <div>
    <div className="container">
      <form onSubmit={editUserId ? saveEditUser : handleSaveUser}>
        <label>Name</label>
    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
    <br/>
    <label>Email</label>
    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <br/>
    <button className="button" type="submit">{editUserId ? "Update" : "Submit"}</button>
    {/* <button className="button" type="submit" onClick={handleSaveUser}>Submit</button> */}
    {/* <button onClick={() => dispatch(addUser({userName : name}))}>Submit</button> */}
    </form>
  
   </div>
      
      <table >
        <thead>
          <tr>
          <th>Name</th>
          <th>Email</th>
          </tr>
        </thead>
        <tbody>
        {data && data.map((data)=>(
          <tr key={data._id}>
          <td>{data.user}</td>
          <td>{data.email}</td>
          <td  className="edit" onClick={()=>handleEdit(data._id)}>Edit</td>
          <td className="delete" onClick={()=>handleDelete(data._id)}>Delete</td>
          
        </tr>
        
    
  
))}
</tbody>
      </table>
      
    </div>
  );
}

export default Counter;








