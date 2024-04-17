import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../Redux/action';
import UserCard from './UserCard';
import { Button } from 'flowbite-react';

export default function Users() {
  const [page, setPage] = useState(1);
  const pageSize = 6; // Number of items per page
  const dispatch = useDispatch();
  const userdata = useSelector((state) => state.user.userData);
  const totalPages = Math.ceil(userdata.length / pageSize); // Calculate total pages

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPageData = userdata.slice(startIndex, endIndex);

  const handlenext = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrev = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
     

      <div className="w-[100%] grid sm:grid-cols-2 gap-4 grid-cols-1">
        {currentPageData.map((user, index) => (
          <UserCard key={index} {...user} />
        ))}
      </div>

      <div className="mt-5 mb-5 flex items-center justify-center">
        <Button onClick={handlePrev} disabled={page === 1}  >Prev</Button>
        <span className="font-bold mx-1 px-4">{page}</span>
        <Button className='' onClick={handlenext} disabled={userdata.length <= page*pageSize} >Next</Button>
      </div>
    </>
  );
}
