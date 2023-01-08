import { Button, Center, Heading } from '@chakra-ui/react'
import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
 const Todo = ({post}) => {
    const router=useRouter()
    const handleClick=(id)=>{
      router.push(`/${id}`) }
     return (  
         <div>
    <Head>
  <title>post pages</title>
  <meta title='decription' content="blogs,react,js,typecript" />
  <link rel="ico" href="/favicon.ico" />
    </Head>
    <main>
        <Center flexDirection={'column'}>
        {
    post.map((blog)=>(<div key={blog.id}>
   <Button bg='orange'  onClick={()=>handleClick(blog.id)} >{blog.title}</Button>
        </div>  ))  
        }
        </Center>
        </main>
    </div>
  )
}
export const  getServerSideProps=async()=>{
    const res=await fetch(`https://vercel-deploy-jade-one.vercel.app/todo`)
    let data=await res.json()
    return{
        props:{
            post:data
        } }   }
export default Todo
