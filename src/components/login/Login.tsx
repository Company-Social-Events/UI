import { useMyAccount } from "../context/MyAccountContext";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
const Login = () => {
    const context = useMyAccount();
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = context.isAuthenticated;
    const [username, setUsername] = context.username;
    const handleLogin = () =>{
        setUsername("alex");
        setIsAuthenticated(true);
        console.log(1)
        navigate('/UI');
    }
    return ( <>
    <Button colorScheme='blue' onClick={handleLogin}>SET USERNAME</Button>
     login, hello {username}
    </> );
}
 
export default Login;