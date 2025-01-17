import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import './login.css';
import Eye from '../loginpage/eye-off.png';
import { useNavigate } from 'react-router-dom'; 
const Login =()=>{
    const [email,setEmail]=useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); 
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = () => {
        navigate('/details'); 
    };


    return (
        <div className='login'>
            <div className='main'>
            <div>
            <h2>RJ Connect</h2>
            <p>Log in to Your Account</p>
            <div className='email'>
            <label> Email address</label>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='password'>
            <label> Password</label>
            <input  type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)}/>
            <img src={Eye} alt='eyelogo' className='eye' onClick={togglePasswordVisibility} />
            </div>
            <p1>Forgot your Password</p1>
            <Button variant="contained"
        color="primary" onClick={handleLogin} >Login</Button>
            </div>
            </div>
        </div>
    )
}
export default Login;