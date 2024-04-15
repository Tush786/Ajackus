import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../Redux/action'
import UserCard from './UserCard'


export default function Users() {
    const userdata=useSelector(state=>state.user.userData)
    console.log(userdata)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getUser())
    },[])
  return (
    <>
    <div className="w-[65%] m-auto grid grid-cols-3 gap-4">
      {userdata?.map((task, index) => (
        <UserCard key={index} {...task} />
      ))}
    </div>

    {/* {totalPages > 1 && (
      <div className="mt-8">
        <Button disabled={page == 1}  onClick={() => setPage(page - 1)}>
          Prev
        </Button>
        <Button>{page}</Button>
        <Button disabled={page == totalPages} onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </div>
    )} */}
  </>
  )
}
