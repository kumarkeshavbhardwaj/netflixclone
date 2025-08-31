import React from 'react'

const Row = ({title, fetchUrl}) => {
  return (
    <>
    <h2 className='text-white font-bold md:text-xl p-4'>
        {title}
        <div className='flex relative items-center'>
        </div>
        </h2>
        </>
  )
}

export default Row