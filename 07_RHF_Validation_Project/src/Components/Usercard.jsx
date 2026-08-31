import React from 'react'

const Usercard = ({user, deleteUser, ind}) => {
  return (
    <div className='p-4 border border-black rounded'>
      
      <div className='h-40 w-40'>
        <img className='object-fit h-full w-full' src={user.image} alt={user.name} />
      </div>

      <div className='flex flex-col gap-1'>
        <h1>{user.name}</h1>
        <p className='text-sm'>{user.email}</p>
        <p className='text-sm'>{user.mobile}</p>
      </div>

      <div className='flex w-full justify-between gap-4'>
        <button onClick={()=> {}} className='bg-yellow-700 text-white py-2 px-3 rounded'>Update</button>
        <button onClick={() => deleteUser(ind)} className='bg-red-700 text-white py-2 px-3 rounded' >Delete</button>
      </div>

    </div>
  )
}

export default Usercard
