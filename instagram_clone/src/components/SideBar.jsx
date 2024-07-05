import React from 'react'
import {Avatar, Box,Flex,flexbox,Image,Link, Tooltip} from '@chakra-ui/react'
import {Link as RouterLink} from 'react-router-dom'
import {AiFillHome} from "react-icons/ai"
import {BiLogOut} from 'react-icons/bi'
import { CreatePostLogo, InstagramLogo, NotificationsLogo, SearchLogo } from '../assests/logos'
function SideBar() {
  const sidebarItems =[
    {
      icon: <AiFillHome size ={25}/>,
      text : 'Home',
      link: '/',
    },
    
    {
      icon: <SearchLogo/>,
      text :"Search",
    },
    {
      icon: <NotificationsLogo/>,
      text:'Notifications',
    },
    {
      icon:<CreatePostLogo/>,
      text:'Create',
    },
    {
      icon:<Avatar size={'sm'} name='Aditya' src='/profilepic.png'/>,
      text:"Profile",
      link:"/Aditya",
    },
  ]
  return (
    <Box
    height={'100vh'}
    borderRight={'1px solid'}
    borderColor={'whiteAlpha.300'}
    py={8}
    top={0}
    left={0}
    px={4}
    position={'sticky'}
    >
      <Flex direction={'column'} gap={10} w='full' height={'full'}>
        <Link to = {'/'} as={RouterLink} display={'block'} cursor={'pointer'}>
        <InstagramLogo/>
        </Link>
        
        <Flex direction={'column'} gap={5} cursor={'pointer'}>
          {sidebarItems.map((item,index)=>
          (
            <Tooltip
            key={index}
            hasArrow
            label={item.text}
            placement='right'
            ml={1}
            openDelay={500}
            display={{md:"none"}}
            >
              <Link
              display={"flex"}
              to={item.link || null}
              as={RouterLink}
              gap={4}
              _hover={{bg:"whiteAlpha.400"}}
              borderRadius={6}
              p={2}
              w={'full'}
              >
                {item.icon}
                <Box display={{base:'none',md:"block"}}>
                   {item.text}
                </Box>
              </Link>
            </Tooltip>
          )
          )}
        </Flex>
        <Tooltip
            hasArrow
            label={'Log Out'}
            placement='right'
            ml={1}
            openDelay={500}
            display={{md:"none"}}
            >
              <Link
              display={"flex"}
              to={'/AuthPage'}
              as={RouterLink}
              gap={4}
              _hover={{bg:"whiteAlpha.400"}}
              borderRadius={6}
              p={2}
              w={'full'}
              mt={'auto'}
              >
                <BiLogOut size={25}/>
                <Box display={{base:'none',md:"block"}}>
                  Log Out
                </Box>
              </Link>
            </Tooltip>
         
      </Flex>
    </Box>
  )
}

export default SideBar
