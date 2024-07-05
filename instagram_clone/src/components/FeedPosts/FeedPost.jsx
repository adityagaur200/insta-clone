import React from 'react'
import { Box, Image } from '@chakra-ui/react'
import FeedHeader from './FeedHeader'
import FeedFooter from './FeedFooter'
import { px } from 'framer-motion'

function FeedPost() {
  return (
    <>
    <FeedHeader/>
    <Box>
    <Image src='../public/img1.png' w={'300px'}></Image>
    </Box>
    <FeedFooter/>
    </>
    
  )
}

export default FeedPost
