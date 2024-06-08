import React from 'react'

const Navbar = ({data}) => {
  return (
    <div className='w-full px-4 py-3 flex justify-between items-center'>
      <h3>orange</h3>
      <div className='flex p-2 px-4 text-white text-sm rounded-md gap-3 bg-orange-600'>
        <h3>Favourites</h3>
        <h4>{data.filter(item => item.added).length}</h4>
      </div>

    </div>
  )
}

export default Navbar
