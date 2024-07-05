import React from 'react'
import {Container} from '@chakra-ui/react'
import FeedPost from './FeedPost'

function FeedPsots() {
  return (
    <Container py={10} px={2} maxW={"container.sm"}>
      <FeedPost/>
    </Container>
  )
}

export default FeedPsots
