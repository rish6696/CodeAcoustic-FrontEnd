import React,{useEffect,useState} from 'react'
import { Navbar,Nav,NavDropdown,Form,FormControl } from 'react-bootstrap'
import FLexLayout from '../FlexLayout'
import Button from '../Button'
import { isBrowser } from '../../utilities'


export default function _HeaderComponent(){


  const [windowWidth,setWindowWidth]= useState(window.innerWidth)
   
  useEffect(()=>{

    const updateWindowSize=()=>{
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize',updateWindowSize)

    return ()=>{
      window.removeEventListener('resize',updateWindowSize)
    }

  },[])

  return(
    <Navbar style={{backgroundColor:'black'}}  expand={ windowWidth > 692  }    >
    <Navbar.Brand href="#home">
    <img
        src="/logoLarge.svg"
        width="105px"
        height="38px"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"  />
    <Navbar.Collapse className='flex-row-reverse' id="basic-navbar-nav">

      <FLexLayout rowORColumn={  windowWidth > 692 ? 'row': 'column' } >
        
      <Button text='Why Us'/> 
      <Button text='About Us'/> 
      <Button text='Community'/> 
      <Button text='SignIn'/> 

      
      </FLexLayout>

    </Navbar.Collapse>
  </Navbar>
  )
}

