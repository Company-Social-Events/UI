import { useMyAccount } from "../context/MyAccountContext";

const Signup = () => {
    const context = useMyAccount();
    const [username, setUsername] = context.username;

    return (<>
        signup, hello {username}
    </>);
}

export default Signup;