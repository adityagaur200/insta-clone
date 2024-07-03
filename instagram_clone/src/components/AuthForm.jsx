import React, { useState } from 'react'
import {Box, VStack,Image, Input, Button} from '@chakra-ui/react'
function AuthForm() {
  const [isLogin,setIsLogin] = useState(true)
  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5} w={"150%"}>
        <VStack spacing={4}>
        <Image src='/logo.png' h={75} cursor={"pointer"}/>
        <Input
          placeholder='Email'
          fontSize={15}
          type='email'
        />

        <Input
          placeholder='Password'
          fontSize={15}
          type='password'
        />

        {!isLogin ? (
          <Input
          placeholder='Password'
          fontSize={15}
          type='password'
          />
        ) :null}

        <Button colorScheme={'blue'} width={'150px'} variant={'outline'} fontSize={15}>
          {isLogin?"Log in" : "Sign up"}
        </Button>
        </VStack>
      </Box>
    </>
  )
}

export default AuthForm
