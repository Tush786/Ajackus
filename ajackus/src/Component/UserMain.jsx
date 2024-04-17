import React from 'react'

import UserForm from './UserForm'
import Users from './Users'

function Usermain() {
  return (
    <div className='sm:flex sm:gap-4 sm:w-[60%] m-auto  mt-4 w-[100%] '>
      <div className='mb-4'>
        <UserForm/>
      </div>
      <div>
    <Users/>
      </div> 
    </div>
  )
}

export default Usermain

