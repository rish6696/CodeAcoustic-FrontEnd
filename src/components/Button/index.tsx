import React from 'react'
import styles from './Button.module.css'


interface Props{
    style?:React.CSSProperties,
    text:string
}
export default function _Button({ text,style }:Props){
    return(
        <button className={styles.Button}  >
          {text}
        </button>
    )
}