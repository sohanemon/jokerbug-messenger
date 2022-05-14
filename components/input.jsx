import { addDoc } from "firebase/firestore";
import { firestore } from "firebase/firestore";
import { collectionRef } from "../pages";
const Input = ({ input, setInput, setMesseges, messeges, user }) => {
  const handleSubmit = (e) => {
    {
      input.trim() !== "" &&
        addDoc(collectionRef, {
          id: Date.now(),
          username: user,
          messege: input,
          timestamp: firestore.FieldValue.serverTimestamp,
        });
      setInput("");
      e.preventDefault;
    }
  };
  return (
    <>
      <div className='w-full flex items-center justify-center  '>
        <input
          className='w-2/3 h-8 my-10  outline-none  border-b-2 border-blue-100 focus:border-blue-300 transition-all duration-500 px-3 py-1 text-blue-400'
          type='text'
          value={input}
          placeholder={"type ur messege 💨"}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyUp={(e) => e.key === "Enter" && handleSubmit(e)}
        />
        <button
          disabled={!input}
          className='rounded-lg bg-blue-200 py-1 px-3 mx-3 hover:bg-blue-400 disabled:hover:bg-red-100 duration-500 ease-out disabled:cursor-not-allowed'
          onClick={(e) => handleSubmit(e)}
        >
          send
        </button>
      </div>
      <br />
    </>
  );
};

export default Input;
