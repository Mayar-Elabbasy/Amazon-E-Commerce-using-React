import { Link } from 'react-router-dom';
import '../../public/css/Login.css';

function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo img-fluid" alt="Logo" src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png" />
            </Link>
            <div className="login__container">
                <h1>Sign-In</h1>
                <form>
                    <div>
                        <label>E-mail</label>
                        <input type="email" />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" />
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
