import React ,{useState} from "react";
import {Form ,Label ,FormGroup ,Input ,Button} from 'reactstrap';
import { editUser, getUser } from "../Service/api";
import { useNavigate,useParams  } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const defaultValue ={
  Username :'',
  email:'',
  password:'',
  contact:'',
}
function EditUser() {
 
  const {id} = useParams();

  const [user,setUser]  = useState(defaultValue);
  const naviagte = useNavigate();
  const onvaluechange = (e) =>{
    console.log(e.target.name ,e.target.value);
    setUser({...user,[e.target.name] : e.target.value})
    console.log(user)
  }

  useEffect(()=>{
    loadUserDetails();
}, [ ] )

const loadUserDetails = async()=>{
    const response = await getUser(id);
    setUser(response.data);
}
   const editserdetail =async()=>{
    await editUser(user,id);
    naviagte("/")
}
  return <div>
  <div className="container mt-5">
    <Form inline className="form1">
    <FormGroup>
      <Label for="exampleUsername"  ><h2>EDIT USER</h2></Label>
    </FormGroup>
    {' '}
    <FormGroup>
      <Label for="exampleUsername" hidden >Username</Label>
      <Input id="exampleUsername" name="Username" placeholder="Username" onChange={(e)=> onvaluechange(e)} type="text"  value={user.Username}/>
    </FormGroup>
    {' '}
      <FormGroup>
      <Label for="exampleEmail" hidden >Email</Label>
      <Input id="exampleEmail" name="email" placeholder="Email"  onChange={(e)=> onvaluechange(e)}  type="email"  value={user.email}/>
     </FormGroup>
    {' '}
    <FormGroup>
      <Label for="examplePassword" hidden >Password</Label>
      <Input id="examplePassword" name="password" placeholder="Password"  onChange={(e)=> onvaluechange(e)}   type="password" value={user.password} />
    </FormGroup>
    {' '}
    <FormGroup>
      <Label for="examplecontact" hidden >Contact</Label>
      <Input id="examplecontact" name="contact" placeholder="contact"   onChange={(e)=> onvaluechange(e)}  type="text" value={user.contact} />
    </FormGroup>
    {' '}
    {/* <FormGroup>
    <Label for="exampleText" hidden>Address </Label>
    <Input id="exampleText" name="Address" type="textarea"  onChange={(e)=> onvaluechange(e)}  placeholder="Enter your Address...."/>
  </FormGroup>
   */}
    <div>
    <Button onClick={()=>editserdetail()}>EDIT</Button>
    <Link to={`/`}><Button color="success"  className="float-right" >BACK</Button></Link>
    </div>
  </Form>
</div>

  </div>;
}

export default EditUser;
