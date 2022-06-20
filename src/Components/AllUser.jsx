import React from "react";
import { useEffect ,useState } from "react";
import {Button,Table} from 'reactstrap'
import {getUsers , deleteUser} from '../Service/api';
import { Link } from "react-router-dom";
import { Modal} from 'react-bootstrap';

const AllUser = (props) => {
  // const naviagte = useNavigate();
const [users,setusers] = useState([]);
const [show, setShow] = useState(false);
// const [deletedata,setdelete] = useState([])
const handleClose = () => setShow(false);
const handleShow = () => {setShow(true);}

const handleClick = (i)=>{
  handleShow();
  console.log(i)
}
// const deletedata1 = id =>{
//   setdelete(user.filter(p)=>p.id !==id))
// }
//pagination
//model style
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
        <thead >
          <tr>
            <th>SR no</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Contact</th>
            <th >Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user =>(
              <tr key={user._id}>
                <td>{user._id }</td>
                <td>{user.Username}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.contact}</td>
                <td  > <Link to={`/edit/${user._id}`}><Button color="success" style={{marginRight: 4}} >EDIT</Button></Link>
                <Button color="danger" onClick={()=> deleteUserdeaails(user._id)}  style={{marginRight: 4}}>DELETE</Button>   
              {/* <Button variant="primary" onClick={()=>{handleClick(user._id)}} >INFO</Button> */}
              </td>
              
                <Modal show={show} onHide={handleClose} {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" >

                <Modal.Header style={{background : '#204b5e',color:'white'} } closeButton>
                  <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Table>
                    <thead>
                      <tr>
                        <th>Sr no</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Contact</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr key={user._id}>
                    <td>{user._id }</td>
                    <td>{user.Username}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.contact}</td>
                    </tr>
                    </tbody>
                </Table>
                </Modal.Body>
            
              </Modal>
        {/* <Modal show={show} onHide={handleClose} {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>

          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Table>
                    <thead>
                      <tr>
                        <th>Sr no</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Contact</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr key={user._id}>
                    <td>{user._id }</td>
                    <td>{user.Username}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.contact}</td>
                    </tr>
                    </tbody>
                </Table>
          </Modal.Body>
         </Modal> */}
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>

  </div>;
}

export default AllUser;
