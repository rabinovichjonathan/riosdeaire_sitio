//import Head from 'next/head'
//import Image from 'next/image'
import { Inter } from '@next/font/google'
//import styles from '../styles/Home.module.css'
import { PrismaClient } from '@prisma/client'
import Layout from '../layout/Layout'
//import { Routes, Route } from 'react-router-dom'
//import { BrowserRouter } from 'react-router-dom'
const inter = Inter({ subsets: ['latin'] })

export default function Home({fechas}) {
 
  
  return (
    <>
      
        <Layout />
      
      
    
    </>
  )
  
}

export const getServerSideProps = async () => {
  const prisma = new PrismaClient()
  const fechas = await prisma.fecha.findMany()
  
  console.log(fechas)
  return {
    props: {
      fechas,
    }  
  }
}
