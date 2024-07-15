import {useToast} from '@chakra-ui/react'

function useShowToast() {
    const toast = useToast();
    const showToast =(title,description,status)=>
    {
    toast({
        title :title,
        description:description,
        status : status,
        isCloseable :true,
        duration:3000,
        
    })
}
    return showToast
}

export default useShowToast

