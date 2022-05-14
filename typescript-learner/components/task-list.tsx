import type { NextPage } from "next";
import { Dispatch, SetStateAction } from "react";
import { Tasks } from "../components/model";
import TaskCard from "./task-card";
interface Props {
  tasks: Tasks[];
  setTasks: Dispatch<SetStateAction<Tasks[]>>;
}
const TaskList: NextPage<Props> = ({ tasks, setTasks }) => {
  return (
    <>
      {tasks.map((i: Tasks) => (
        <TaskCard i={i} setTasks={setTasks} />
      ))}
    </>
  );
};

export default TaskList;
