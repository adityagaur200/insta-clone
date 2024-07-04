import React from 'react'
import {Box,calc,Flex} from '@chakra-ui/react'
import { useLocation } from 'react-router-dom'

import SideBar from '../components/SideBar'
function PageLayout({children}) {
    const {pathname} = useLocation()
  return (
    <Flex>
        {pathname !== '/AuthPage' ? (
            <Box w={'270px'}>
            <SideBar/>
           </Box>
   
        ) : null}
        <Box flex={1} w={'calc(100%-240px)'}>
            {children}
        </Box>
    </Flex>
  )
}

export default PageLayout
