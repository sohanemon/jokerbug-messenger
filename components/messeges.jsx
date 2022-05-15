import { forwardRef, useEffect, useState } from "react";
import FlipMove from "react-flip-move";
import { BsPersonCircle } from "react-icons/bs";
const Messeges = ({ messeges, user }) => {
  // const messegeBody = useRef();
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, [messeges]);
  return (
    <div className='mb-10 mx-4 sm:mx-12 md:mx-36'>
      <FlipMove>
        {messeges?.map((i) => (
          <MessegesList
            key={i.id}
            messege={i.messege}
            username={i.username}
            user={user}
          />
        ))}
      </FlipMove>
    </div>
  );
};

// eslint-disable-next-line react/display-name
const MessegesList = forwardRef(({ messege, username, user }, ref) => {
  let isUser = user === username;
  return (
    <div
      ref={ref}
      className={`rounded-xl text-md  bg-white drop-shadow-lg  px-4 py-2  m-2 max-w-[70%] w-max ${
        isUser && "ml-auto"
      } `}
    >
      {!isUser && (
        <>
          <div className='flex gap-1 items-center'>
            <BsPersonCircle />
            <p className='text-sm capitalize font-mono'>{username}</p>
          </div>
        </>
      )}
      <p
        className={`tracking-wider text-gray-700 ${
          !isUser ? "text-gray-500" : null
        }`}
      >
        {messege}
      </p>
    </div>
  );
});

export default Messeges;
