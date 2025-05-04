import React from 'react'
import { useId } from 'react'
import { forwardRef } from 'react'

function Input({
    type,
    placeholder = "design your place holder",
    className,
    ...props
},ref) {
    const id = useId()
  return (
    <div>
      <input id={id} type={type}placeholder={placeholder}className={`border m-2 p-1 px-5 rounded-md border-black ${className}`} ref={ref} {...props}/>
    </div>
  )
}

export default React.forwardRef(Input)
