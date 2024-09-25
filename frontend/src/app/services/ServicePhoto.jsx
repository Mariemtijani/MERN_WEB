import React from 'react'

export default function ServicePhoto() {
  return (
    <div className=' mt-1'>
      <img 
      src={process.env.PUBLIC_URL+`/Images/service.jpg`} 
      alt=""
      className='w-full h-full'
      style={{
        aspectRatio: "300/400",
        objectFit: "fill",
      }}
       />
    </div>
  )
}
