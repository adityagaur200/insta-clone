import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {Box, VStack,Image, Input, Button, Flex, Text} from '@chakra-ui/react'
function AuthForm() {
  const [isLogin,setIsLogin] = useState(true)
  const navigate = useNavigate();
  const[input,setInput] = useState({
    email : "",
    password : "",
    confirmpassword : "",
  });
  const handleAuth = ()=>
    {
        if(!input.email || !input.password || !input.confirmpassword)
          {
            alert("fill all fields");
            return;
          }
          navigate('/');
    };
  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5} w={"150%"}>
        <VStack spacing={4}>
        <Image src='/logo.png' h={75} cursor={"pointer"}/>
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

        {!isLogin ? (
          <Input
          placeholder='Confirm Password'
          fontSize={15}
          type='password'
          value={input.confirmpassword}
          onChange={(e)=> setInput({...input,confirmpassword:e.target.value})}
          />
        ) :null}

        <Button colorScheme={'blue'} width={'150px'} variant={'outline'} fontSize={15} onClick={handleAuth}>
          {isLogin?"Log in" : "Sign up"}
        </Button>

        <Flex alignItems={'center'} justifyContent={'center'} gap={1} w={"full"} my={4}>
          <Box flex={2} h={'1px'} bg={'gray.400'}/>
          <Text mx={1} color={'white'}>OR</Text>
          <Box flex={2} h={'1px'} bg={'gray.400'}/>
        </Flex>
        <Flex justifyContent={'center'} alignItems={'center'}>
          <Image src='/google.png' w={5}/>
          <Text mx={4} color={'blue'}>
            Login with Google
          </Text>
        </Flex>
        </VStack>
      </Box>
      <Box border={'1px solid gray'} borderRadius={4} padding={5} w={'150%'}>
        <Flex alignItems={'center'} justifyContent={'center'}>
          <Box mx={2} fontSize={14}>
            {isLogin? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box onClick={()=>setIsLogin(!isLogin)} color={'blue.500'} cursor={'pointer'}>
            {isLogin ? "Sign Up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default AuthForm
