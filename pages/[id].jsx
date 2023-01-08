import { Button, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
  const Singlepage = ({post}) => {
    const router=useRouter()
  return (<>
    <Button bg='red' onClick={()=>router.back()}>Go Back</Button>
    <div>Singlepage</div>
    <Heading>id:{router.query.id}</Heading>
    <Heading>{post.title}</Heading>
  </>
  )
}

export const getStaticPaths=async()=>{
  const res=await fetch(`https://vercel-deploy-jade-one.vercel.app/todo`)
  let data=await res.json()
  return{
    paths:data.map((post)=>({params:{id:post.id.toString()}})),
    fallback:false
  }
}

export const  getStaticProps=async(context)=>{
  const {params:{id}}=context
  const res=await fetch(`https://vercel-deploy-jade-one.vercel.app/todo/${id}`)
  let data=await res.json()
  return{
      props:{
          post:data
      } }   }
export default Singlepage


