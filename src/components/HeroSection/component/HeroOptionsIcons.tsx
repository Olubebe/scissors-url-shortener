import React from 'react'

interface Props {
    image: string;
    title: string;
    description: string;
}

const HeroOptionsIcons = ({image, title, description}: Props) => {
  return (
    <div>   
    <div>
      <img src={image} alt="" />
      <div>
          <h2 className='text-2xl '>{title}</h2>
          <p className='text-black w-1/2'>{description}</p>
      </div>
    </div>
  </div>
  )
}

export default HeroOptionsIcons