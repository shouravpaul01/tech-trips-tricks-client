import { Spinner } from '@nextui-org/spinner'
import React from 'react'

export default function TTTZLoading({className}:{className?:string}) {
  return (
    <div className={`${className} flex justify-center overflow-hidden`}>
      
      <Spinner  color="secondary" size="lg" labelColor="secondary"/>
      
    </div> 
  )
}
