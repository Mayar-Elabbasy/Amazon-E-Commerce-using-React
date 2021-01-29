import '../../public/css/Register.css';
import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { auth } from '../../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {

    const history = useHistory();
    const { register, handleSubmit, errors, watch } = useForm();
    const password = useRef({});
    password.current = watch("password", "");

    const [state, setState] = useState({
        email: '',
        password: '',
        reEnterPassword: ''
	});

    const handleFields = ({ target }) => {
        setState({ ...state, [target.name]: target.value });
        // console.log(target.name, target.value);
    };
    
    const registerNewUser = (e) => {
        // console.log("data: ",e);
        auth.createUserWithEmailAndPassword(state.email, state.password)
        .then((response) => {
            // console.log(response);
            if(response) {
                history.push("/");
            }
        }).catch((error) => {
            // console.log(error);
            toast.error(error.message, {
                position: "top-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            }); 
        })
    };

    return (
        <div className="register">
            <ToastContainer />
            <Link to="/">
                <img className="register__logo img-fluid" alt="Logo" src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png" />
            </Link>
            <div className="register__container">
                <h1>Create account</h1>
                <form onSubmit={handleSubmit(registerNewUser)}>
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
                    <div>
                        <label>Re-enter password</label>
                        <input type="password" name="reEnterPassword" onChange={handleFields}
                               ref={register({ required: true, minLength: 6, 
                                               validate: value => value === password.current})} />
                        <span className="form__errors">
                            {errors.reEnterPassword && errors.reEnterPassword.type === 'required' &&
                                'This field is required, you have to fill it!'}
                            {errors.reEnterPassword && errors.reEnterPassword.type === 'minLength' &&
                                'Re-enter Password must be 6 characters at least'}
                            {errors.reEnterPassword &&
                                errors.reEnterPassword.type === 'validate' &&
                                'Passwords must match'}
						</span>
                    </div>
                    <button type="submit" className="register__signInButton">
                        Create Your Amazon Account
                    </button>
                    <br />
                    <br />
                    <p>
                        By creating an account, you agree to Amazon's Conditions of 
                        Use and Privacy Notice.
                    </p>
                    <br />

                    <span>Already have an account? </span>   
                    <Link to="/login">
                        <span>Sign-In</span>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Register;