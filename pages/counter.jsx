import { Button, Center, Heading, Stack } from '@chakra-ui/react'
import { useState } from 'react'
 const Counter = () => {
    const [count,setCount]=useState(0)
  return (<>
    <h1>COUNTER</h1>
    <Center>
    <Stack style={{height:"100px", display:"flex",justifyContent:"center"}}>
      <Heading style={{height:"100px"}}>Counter:{count} </Heading>
<Button bg='red' w='150px' h={'100px'} onClick={()=>setCount(count+1)}>+</Button>
    <Button bg='red' w='150px' h={'100px'} onClick={()=>setCount(count-1)}>-</Button>
    </Stack>
    </Center>
  </>
  )
}

export default Counter


