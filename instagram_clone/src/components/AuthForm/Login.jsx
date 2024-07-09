import {React,useState} from 'react'
import { Button, Input } from '@chakra-ui/react'
function Login() {
  const[input,setInput] = useState({
    email : "",
    password : "",
    confirmpassword : "",
  });
  return (
    <>
     <Input
          placeholder='Email'
          fontSize={15}
          type='email'
          value={input.email}
          onChange={(e)=> setInput({...input,email:e.target.value})}
        />

        <Input
          placeholder='Password'
          fontSize={15}
          type='password'
          value={input.password}
          onChange={(e)=> setInput({...input,password:e.target.value})}
        />

        <Button colorScheme={'blue'} width={'150px'} variant={'outline'} fontSize={15} >
          Log in
        </Button>
    </>
  )
}

export default Login
