import React from 'react'

interface Props{
    className?: string;
    children: React.ReactNode;  
}
const Container = ({children , className} : Props) => {
  return (
      <div className={`${className} max-w-[1177px] mx-auto`}>
          {children}
    </div>
  )
}

export default Container