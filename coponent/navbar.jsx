import { Flex, Heading, } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
export const Navbar = () => {
  return (
    <Flex gap={4} bgColor='yellow'>
        <Heading>
            <Link href={'/'}>Home</Link>
        </Heading>
        <Heading>
            <Link href={'/counter'}>Counter</Link>
        </Heading>
        <Heading>
            <Link href={'/todo'}>Todo</Link>
        </Heading>
        <Heading>
            <Link href={'/movies'}>Movies</Link>
        </Heading>
    </Flex>
  )
}
