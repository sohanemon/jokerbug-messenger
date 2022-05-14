import type { NextPage } from "next";
import { Dispatch, SetStateAction } from "react";
import { Tasks } from "./model";

interface Props {
  i: Tasks;
  setTasks: Dispatch<SetStateAction<Tasks[]>>;
}

const TaskCard: NextPage<Props> = ({ i }) => {
  return (
    <>
      <div className=''>
        <p>{i.title}</p>
        <p>{i.id}</p>
        <button>Remove task</button>
      </div>
    </>
  );
};

export default TaskCard;
