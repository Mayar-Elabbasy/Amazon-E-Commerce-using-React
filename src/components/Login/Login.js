import '../../public/css/Login.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {

    const { register, handleSubmit, errors } = useForm();

    const [state, setState] = useState({
        email: '',
        password: ''
	});

    const handleFields = ({ target }) => {
        setState({ ...state, [target.name]: target.value });
        // console.log(target.name, target.value);
    };
    
    const signIn = (e) => {
        console.log("data: ",e);
    }
console.log(state);
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo img-fluid" alt="Logo" src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png" />
            </Link>
            <div className="login__container">
                <h1>Sign-In</h1>
                <form onSubmit={handleSubmit(signIn)}>
                    <div>
                        <label>E-mail</label>
                        <input type="email" name="email" onChange={handleFields}
                               ref={register({ required: true, 
                                               pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })} />
                        <span className="form__errors">
							{errors.email && errors.email.type === 'required' &&
								'This field is required, you have to fill it!' }
							{errors.email && errors.email.type === 'pattern' &&
								'Invalid email format' }
						</span>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" onChange={handleFields}
                               ref={register({ required: true, minLength: 6})} />
                        <span className="form__errors">
							{errors.password && errors.password.type === 'required' &&
								'This field is required, you have to fill it!' }
							{errors.password && errors.password.type === 'minLength' &&
								'Password must be 6 characters at least' }
						</span>
                    </div>
                    <button className="login__signInButton">Sign In</button>
                    <br />
                    <br />
                    <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                </form>
            </div>

            <br />
            <div>New to Amazon?</div>
            <button className="login__signUpButton">Create Your Amazon Account</button>
        </div>
    )
}

export default Login;