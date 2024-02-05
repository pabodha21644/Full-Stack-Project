import React, {useState} from "react";
export const Login = (props) => {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return(
        <>
        
        <form onSubmit={handleSubmit}>
            <tr>
            <label htmlFor="Email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="Email"/>
            </tr>
            <tr>
            <label htmlFor="Password">Password</label>
            <input value= {pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="Password"/>
            </tr>
            <tr>
            <button type="submit">Login</button>
            </tr>
        </form>
        
        <button onClick={() => props.onFormswitch('register')}>Don't have an account? Register here</button>
      </>  
    )
        
    }
