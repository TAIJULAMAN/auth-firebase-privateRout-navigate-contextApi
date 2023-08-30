import React, { useContext, useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Signup = () => {

    const [error, setError] = useState('');
    const {createUser} =useContext(AuthContext);
    // console.log(createUser);

    const handleSignUp =event =>{
        event.preventDefault();
        const form = event.target;
        const email =form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,confirm);

        setError('');
        if(password !== confirm){
            setError('your password is incorrect');
            return 
        }
        else if(password.length < 6){
            setError('must be at least 6 characters');
            return 
        }

        createUser(email,password)
        .then((result) => {
         const loggedUser = result.user;
            console.log(loggedUser);
            
          })
          .catch((error) => {
           console.log(error);
           setError(error.message);
          });
    }
    return (
        <div className='form-container'>
        <h2 className='form-title'>Sign up</h2>
        <form onSubmit={handleSignUp}>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required />
            </div>
            <div className="form-control">
                <label htmlFor="password">Password</label>

                <input type={show ? "text" : "password"} name="password" id="" required />
                <p onClick={() => setShow(!show)}><small>
                    {
                        show ? <span>Hide Password</span>: <span>Show Password</span>
                    }
                    </small></p>
            </div>
            <div className="form-control">
                <label htmlFor="confirm">Confirm Password</label>
                <input type={show ? "text" : "password"} name="password" id="" required />
                <p onClick={() => setShow(!show)}><small>
                    {
                        show ? <span>Hide Password</span>: <span>Show Password</span>
                    }
                    </small></p>
            </div>
            <input className='btn-submit' type="submit" value="Sign Up" />
        </form>
        <p><small>have a account? <Link to="/login">sign in</Link></small></p>

        <p className='text-error' >{error}</p>
      
    </div>
    );
};

export default Signup;
 