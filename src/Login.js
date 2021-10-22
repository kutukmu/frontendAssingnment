import React, {useState} from 'react'
import { Button, Checkbox, Form,Message } from 'semantic-ui-react'
import { userSignInAction } from "./redux/userActions.js";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

const LoginForm = (props) => {

    const userData = useSelector(state => state.signInUser);
    const errorUser = userData.error
    const [formInput, setFromInput] = useState({
        username:"",
        password:""
    })
    const history = useHistory();
    const dispatch = useDispatch()

    const handleSubmit = async(e) =>{
        try{
            await dispatch(userSignInAction(formInput))
            history.push(`/user/${formInput.username}`)
        }catch(err){
            console.log("error")
        }
    }

    return (
        <div className="form-container">
            <Form className="form" onSubmit={handleSubmit} error = {errorUser}>
        <Form.Field>
          <label>Username</label>
          <input placeholder='Username' name="username" value={formInput.username} onChange={(e) => setFromInput({...formInput, [e.target.name]: e.target.value})}/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder='Password' type="password" name="password" value={formInput.password} onChange={(e) => setFromInput({...formInput, [e.target.name]: e.target.value})}/>
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        {errorUser && <Message
      error
      header='Authentication Error'
      content='Username or Password is wrong'
    />}
        <Button primary type='submit'>Submit</Button>
      </Form>
        </div>
    
    )
}

export default LoginForm