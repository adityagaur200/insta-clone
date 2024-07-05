import React from 'react'
import { WrapItem,Avatar,Box,Flex, Text } from '@chakra-ui/react'

function FeedHeader() {
  return (
    <Flex mb={3} justifyContent={'space-between'} alignItems={'center'} w={'full'}>
        <Flex alignItems={'center'}  gap={2}>
            <Avatar src='/img1.png' size={'sm'}/>
            <Flex fontSize={12} fontWeight={"bold"} gap={2}>
                User1
            </Flex>
        </Flex>
        <Box cursor={"pointer"}>
            <Text
            fontSize={12}
            color={"blue.500"}
            fontWeight={'bold'}
            _hover={{
                color:'white',
            }}
            transition={'0.2s ease-in-out'}>
                Unfollow
            </Text>
        </Box>
    </Flex>
  )
}

export default FeedHeader
