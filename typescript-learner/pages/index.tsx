import type { NextPage } from "next";
import { useState } from "react";
import InputField from "../components/input-field";
import { Tasks } from "../components/model";
import TaskList from "../components/task-list";

const Home: NextPage = () => {
  const [input, setInput] = useState<string>("");
  const [tasks, setTasks] = useState<Tasks[]>([]);
  console.log(tasks);

  return (
    <div className='text-center text-xl'>
      <h1>checking the typeScript either working or not! 🚀</h1>
      <br />
      <InputField
        input={input}
        setInput={setInput}
        setTasks={setTasks}
        tasks={tasks}
      />
      <br />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default Home;
