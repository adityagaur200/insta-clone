import React from 'react'
import{Box, Container, Flex} from '@chakra-ui/react'
function HomePage() {
  return (
    <Container maxW={"container.lg"}>
        <Flex gap={20}>
            <Box flex={2} py={10} border={"1px solid blue"} >
              <FeedPosts/>
            </Box>
            <Box flex={3} mr={20} border={"1px solid red"} maxW={"300px"} display={{base:"none",lg:"block"}}>
            Suggestion
            </Box>
        </Flex>
    </Container>
  )
}

export default HomePage
