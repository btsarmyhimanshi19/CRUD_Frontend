import axios from 'axios';

const URL = 'http://localhost:8000';

// const URL ='https://crud-react-backend1.herokuapp.com';

export const addUser = async(data) =>{
        try{
          return await axios.post(`${URL}/add`,data);
        }
        catch(error){
            console.log("Error while calling  add user APi : " ,error)
        }
}

export const getUsers = async()=>{
  try{
       return   await axios.get(`${URL}/all`)
  }catch(error)
  {
     console.log("Error while calling get request.",error)
  }
}

export const getUser = async(id)=>{
  try{
       return await axios.get(`${URL}/${id}`);
  }catch(error)
  {
     console.log("Error while calling get request.",error)
  }
}

export const editUser = async(user,id) =>{
  try{
    return await axios.put(`${URL}/${id}`,user);
  }
  catch(error){
      console.log("Error while calling  edit user APi : " ,error)
  }
}

export const deleteUser = async (id)=>{
  try{
     return await axios.delete(`${URL}/${id}`)
  }catch(error)
  {
    console.log("Error while calling delete request.",error)
  }
}