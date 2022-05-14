import type { NextPage } from "next";
import { Dispatch, SetStateAction, useRef } from "react";
import { Tasks } from "./model";
interface Props {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  setTasks: Dispatch<SetStateAction<Tasks[]>>;
  tasks: Tasks[];
}
const InputField: NextPage<Props> = ({ input, setInput, setTasks, tasks }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  inputRef.current?.blur;
  return (
    <>
      <input
        ref={inputRef}
        type='text'
        placeholder='enter task here. . .'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={(e) => {
          input != "" &&
            setTasks([
              { id: Date.now(), title: input, isDone: false },
              ...tasks,
            ]);
          setInput("");
          e.preventDefault;
        }}
      >
        Add to tasks
      </button>
    </>
  );
};

export default InputField;
