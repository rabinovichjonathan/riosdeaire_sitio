import Head from "next/head"
import Header from "../components/Header"
import Footer from "../components/Footer"

//import { Route, Routes } from "react-router-dom"



export default function Layout({children, title}) {
 
  
    return (
      <>
        <Head>
            <title>Ríos de aire - {title}</title>
            <meta name="description" content="Ríos de aire"></meta>
        </Head>
        <div>
            <Header />
            <main>
              
                {children}
              
            </main>
            <Footer />
        </div>
      </>
    )
    
}