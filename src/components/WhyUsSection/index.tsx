import React from 'react'
import FLexLayout from '../FlexLayout'
import { Image}  from 'react-bootstrap'


export default function _WhyUSComponent(){

    return(
        <FLexLayout rowORColumn='row' style={{width:'100%',marginTop:'40px'}} >
            <Image height='600px' src='/whyUs.svg'   />
            <div style={{height:'600px',backgroundColor:'#A16AE8',width:'100%'}} >
                 <div  style={{backgroundColor:'red', width:'150px',height:'10git 0px',borderRadius:'50%'  }}  >

                 </div>
            </div>
        </FLexLayout>
    )

}
