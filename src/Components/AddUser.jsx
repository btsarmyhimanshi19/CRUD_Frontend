import React ,{useState} from "react";
import {Form ,Label ,FormGroup ,Input ,Button} from 'reactstrap';
import { addUser } from "../Service/api";
import { useNavigate } from "react-router-dom";

const defaultValue ={
  Username :'',
  email:'',
  password:'',
  contact:'',
  Address:''

}
function AddUser() {
 

  const [user,setUser]  = useState(defaultValue);
  const naviagte = useNavigate();
  const onvaluechange = (e) =>{
    console.log(e.target.name ,e.target.value);
    setUser({...user,[e.target.name] : e.target.value})
    console.log(user)
  }
  const adduserdetail =async()=>{
         await addUser(user);
         naviagte("/")
  }
  return <div>
  <div className="container mt-5 main-add">
    <Form inline className="form1">
    <FormGroup>
      <Label for="exampleUsername"  ><h2>ADD USER</h2></Label>
    </FormGroup>
    {' '}
    <FormGroup>
      <Label for="exampleUsername" hidden >Username</Label>
      <Input id="exampleUsername" name="Username" placeholder="Username" onChange={(e)=> onvaluechange(e)} type="text"/>
    </FormGroup>
    {' '}
      <FormGroup>
      <Label for="exampleEmail" hidden >Email</Label>
      <Input id="exampleEmail" name="email" placeholder="Email"  onChange={(e)=> onvaluechange(e)}  type="email"/>
     </FormGroup>
    {' '}
    <FormGroup>
      <Label for="examplePassword" hidden >Password</Label>
      <Input id="examplePassword" name="password" placeholder="Password"  onChange={(e)=> onvaluechange(e)}   type="password"/>
    </FormGroup>
    {' '}
    <FormGroup>
      <Label for="examplecontact" hidden >Contact</Label>
      <Input id="examplecontact" name="contact" placeholder="contact"   onChange={(e)=> onvaluechange(e)}  type="text"/>
    </FormGroup>
    {' '}

    <Button className="btn-secondary" onClick={()=>adduserdetail()}>Submit</Button>
  </Form>


  
</div>

  </div>;
}

export default AddUser;
