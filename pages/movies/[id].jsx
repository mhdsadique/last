import { Button, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import React from 'react'
const sigleMovie = ({movie}) => {
      return (
      <>
        <Heading>movieSingle</Heading>
        <Heading>{movie.title}</Heading>
        <Image width={500} height={500} src={movie.posterUrl} alt={movie.titile} srcset="" />
      </>
      )
    }
    export async function getStaticPaths(){
      let response =await fetch (`https://vercel-deploy-jade-one.vercel.app/movies`)
      let data=await response.json()
      return{
        paths:data.map((movie)=>({
          params:{id:movie.id.toString()}
        })),
        fallback:false
      }
    }
    export const  getStaticProps=async(context)=>{
        const {  params:{id}}=context
        let response=await fetch(`https://vercel-deploy-jade-one.vercel.app/movies/${id}`)
        let data=await response.json()
        return{
            props:{
                movie:data
            }
        }
    }
export default sigleMovie
