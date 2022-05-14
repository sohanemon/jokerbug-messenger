const Messeges = ({ messeges, user }) => {
  return (
    <div className=''>
      {messeges?.map((i) => (
        <MessegesList
          key={i.id}
          messege={i.messege}
          username={i.username}
          user={user}
        />
      ))}
    </div>
  );
};

const MessegesList = ({ messege, username, user }) => {
  return (
    <div
      className={`rounded-xl bg-sky-500 p-6  m-2 max-w-max ${
        user === username && "ml-auto"
      } `}
    >
      <p className='text-xl font-mono break-words'>
        {username}:{messege}
      </p>
    </div>
  );
};

export default Messeges;
