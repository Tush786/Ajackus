import React from 'react'

import UserForm from './UserForm'
import Users from './Users'

function Usermain() {
  return (
    <div className='flex gap-4 w-[60%] m-auto mt-4 '>
      <div>
        <UserForm/>
      </div>
      <div>
    <Users/>
      </div> 
    </div>
  )
}

export default Usermain

