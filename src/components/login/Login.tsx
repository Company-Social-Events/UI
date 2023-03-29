import {
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Input,
    Stack,
    Text,
    Avatar
} from '@chakra-ui/react';
import { FormErrorMessage, FormHelperText } from '@chakra-ui/react';
import { PasswordField } from './PasswordField'
import { useMyAccount } from "../context/MyAccountContext";
import { useNavigate } from "react-router-dom";
import AvatarIcon from "../../assets/fox.png"
import { useState } from 'react';
const Login = () => {
    const context = useMyAccount();
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = context.isAuthenticated;
    const [username, setUsername] = context.username;
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const handleLogin = () => {
        setUsername("alex");
        setIsAuthenticated(true);
        console.log(1)
        navigate('/UI');
    }

    const handleEmailChanged = (e: React.FormEvent<HTMLInputElement>) => {
        setInputEmail(e.currentTarget.value);
    }

    const handlePasswordChanged = (e: React.FormEvent<HTMLInputElement>) => {
        setInputPassword(e.currentTarget.value);
    }


    return (<>
        <div className='h-full w-full' style={{ backgroundColor: '#f7fafc' }}>
            <Container maxW="lg" py={{ base: '12', md: '24' }} px={{ base: '0', sm: '8' }}>
                <div style={{ backgroundColor: 'white' }}>
                    <LoginHeader />
                    <Box
                        py={{ base: '0', sm: '8' }}
                        px={{ base: '4', sm: '10' }}
                        bg={{ base: 'transparent', sm: 'bg-surface' }}
                        boxShadow={{ base: 'none', sm: 'md' }}
                        borderRadius={{ base: 'none', sm: 'xl' }}
                    >
                        <Stack spacing="6">
                            <LoginForm
                                inputEmail={inputEmail}
                                handleEmailChanged={handleEmailChanged}
                                inputPassword={inputPassword}
                                handlepasswordChanged={handlePasswordChanged}
                            />
                            <LoginFunctions 
                            handleLogin={handleLogin}
                            />
                        </Stack>
                    </Box>
                </div>
            </Container>
        </div>

    </>);
}

const LoginHeader = () => {
    return (
        <Stack >
            <Stack spacing={{ base: '2', md: '3' }} textAlign="center" className='items-center'>
                <Avatar src={AvatarIcon} />
                <Heading size={{ base: 'xs', md: 'sm' }}>Log in to your account</Heading>
                <HStack spacing="1" justify="center">
                    <Text color="muted">Don't have an account?</Text>
                    <Button variant="link" colorScheme="blue">
                        Sign up
                    </Button>
                </HStack>
            </Stack>
        </Stack>
    )
}


const LoginForm = ({ inputEmail, handleEmailChanged, inputPassword, handlePasswordChanged }: any) => {
    const isEmailError = (inputEmail === '')

    return (<Stack spacing="5">
        <FormControl isInvalid={isEmailError}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" type="email" value={inputEmail} onChange={handleEmailChanged} />
            {!isEmailError ? (
                <FormHelperText>
                    Introdu email-ul tau.
                </FormHelperText>
            ) : (
                <FormErrorMessage>Va rugam completati email-ul</FormErrorMessage>
            )}
        </FormControl>
        <PasswordField value={inputPassword} onChange={handlePasswordChanged} />
    </Stack>)
}

const LoginFunctions = ({handleLogin} : any) => {
    return (
        <>
            <HStack justify="space-between">
                <Checkbox defaultChecked>Remember me</Checkbox>
                <Button variant="link" colorScheme="blue" size="sm">
                    Forgot password?
                </Button>
            </HStack>
            <Stack spacing="6">
                <Button variant="solid" onClick={handleLogin}>Sign in</Button>
            </Stack>
        </>
    )
}
export default Login;