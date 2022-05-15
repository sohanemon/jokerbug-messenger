import { addDoc } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
import { collectionRef } from "../pages";
import { IoMdSend } from "react-icons/io";
const Input = ({ input, setInput, user }) => {
  const handleSubmit = (e) => {
    {
      input.trim() !== "" &&
        addDoc(collectionRef, {
          id: Date.now(),
          username: user,
          messege: input,
          timestamp: serverTimestamp(),
        });
      setInput("");
      e.preventDefault;
    }
  };
  return (
    <>
      <style jsx>{`
        .input__input {
          @apply w-2/3 outline-none  border-b-2 tracking-wider border-gray-200 focus:border-gray-400 transition-all duration-500 px-5 py-1 text-gray-700;
        }
        .btn {
          @apply mx-3  disabled:hover:bg-red-100 duration-500 ease-out disabled:cursor-not-allowed;
        }
      `}</style>
      <div className='w-full flex pb-6 items-center justify-center fixed bg-white bottom-0  z-10 '>
        <input
          className='input__input'
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
          className='btn'
          onClick={(e) => handleSubmit(e)}
        >
          <IoMdSend size={25} color={"grey"} />
        </button>
      </div>
      <br />
    </>
  );
};

export default Input;
