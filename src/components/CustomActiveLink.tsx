import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { CSSProperties, FC } from 'react'


interface Props{
  text : string,
  href : string
}

export const CustomActiveLink : FC<Props> = ({ text , href }) => {

   const style : CSSProperties = {
     color  : '#0070f3',
     textDecoration : 'underline'
   } 
   const router = useRouter();
  return (
      <Link style={ router.asPath == href ? style : undefined }  href={href} >{text}</Link>
  )
}
