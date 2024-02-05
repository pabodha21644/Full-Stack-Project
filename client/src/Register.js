import React, {useState} from "react";
export const Register = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [FullName, setFullName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return(
        <>
        
        <form onSubmit={handleSubmit}>
          <h>File Sharing System</h>
        <tr>
            <label htmlfor="Full Name">Full Name</label>
            <input value= {FullName} onChange={(e) => setFullName(e.target.value)} type="FullName" placeholder="Your Name" id="fullName" name="First Name"/>
            </tr>
        
            <tr>
            <label htmlfor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="Email"/>
            </tr>
            <tr>
            <label htmlfor="password">Password</label>
            <input value= {pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*********" id="password" name="Password"/>
            </tr>
            <tr>
            <button type="submit">Login</button>
            </tr>
        </form>
        
        <button onClick={() => props.onFormswitch('login')}>Already have an account? Register here</button>
      </>  
    )
        
    }

    