import React from 'react'
import Dynamic from 'next/dynamic'

const Navbar = Dynamic(
    ()=>import('../components/Navbar/index'),
    {ssr:false}
)
export function _HomeScreen(){
   return(
       <Navbar></Navbar>
   ) 
}