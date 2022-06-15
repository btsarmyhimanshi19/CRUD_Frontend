import React from "react";
import { useEffect ,useState } from "react";
import {Button, Table} from 'reactstrap'
import {getUsers , deleteUser} from '../Service/api';
import { Link } from "react-router-dom";
// import { useNavigate  } from "react-router-dom";
const AllUser = () => {
  // const naviagte = useNavigate();
const [users,setusers] = useState

([]);

  useEffect(()=>{
    getallUsers();
  },[]);

  const getallUsers = async()=>{
   const res = await getUsers();
   setusers(res.data);
   console.log(res);
  }

  const deleteUserdeaails = async(id)=>{
    await deleteUser(id);
    getallUsers();
    // naviagte("/")
  }
  return <div className="container mt-5">
    <div>
    <Table>
        <thead>
          <tr>
            <th>SR no</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Contact</th>
            <th>Action</th>
     
          </tr>
        </thead>
        <tbody>
          {
            users.map(user =>(
              <tr key={user._id}>
               {/* </tr><tr key={user}>           */}
                 <td>{user._id }</td>
                           <td>{user.Username}</td>
                           <td>{user.email}</td>
                           <td>{user.password}</td>
                           <td>{user.contact}</td>
                           <td> <Link to={`/edit/${user._id}`}><Button color="success"  >EDIT</Button></Link></td>
                           <td><Button color="danger" onClick={()=> deleteUserdeaails(user._id)}>DELETE</Button></td>
                          
              </tr>
              
 
            ))
          }
          
        </tbody>
      </Table>
    </div>

  </div>;
}

export default AllUser;
