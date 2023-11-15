import "./App.css";
import { useState, useEffect } from "react";
import TodoClock from "./Components/TodoClock";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const weekday = time.toLocaleDateString(undefined, { weekday: "short" });
  const monthDay = time.getDate();

  // const listWeek = new Date().toLocaleDateString(undefined, {
  //   weekday: "short",
  // });
  // const listDay = new Date().getDate();
  // const listTime = new Date().toLocaleTimeString([], {
  //   hour: "2-digit",
  //   minute: "2-digit",
  // });

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
      const fixedTodoDate = new Date();
      const todoCreatingDate = fixedTodoDate.toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    }
  };

  const toggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className=" min-w-[100vw] min-h-[100vh] flex justify-center items-center flex-col ">
      <h1 className=" text-[96px] text-blue-500">Todo</h1>
      <div className=" relative">
        <TodoClock
          weekday={weekday}
          monthDay={monthDay}
          formattedTime={formattedTime}
        />

        <img
          className=" w-[430px] "
          src="/assets/cover-photo.png"
          alt="flowers"
        />

        <div className=" flex flex-row justify-center pt-[17px] relative">
          <input
            className=" w-[275px] pl-[40px] rounded-[5px] bg-slate-200"
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Note"
          />
          <button
            className=" bg-green-300  w-[88px] h-[49px] flex justify-center items-center ml-[10px] rounded-[5px]"
            onClick={addTask}
          >
            <img src="/assets/Vector-plus.png" alt="plus" />
          </button>
          <div className=" w-[24px] h-[24px] rounded-[50px] bg-green-300 absolute left-[8%] top-[44%] flex justify-center items-center ">
            <img src="/assets/Vector.png" alt="tic" />
          </div>
        </div>
      </div>
      <ul className=" mt-[20px]">
        {tasks.map((task) => (
          <li
            className=" flex flex-row justify-between mb-[20px] "
            key={task.id}
          >
            <div className="flex flex-col">
              <p className=" mr-[140px] w-[149px] h-[22px] text-[18px] leading-[22px]  text-[#0D0D0D]">
                {task.text}
              </p>
              <span className=" text-[12px]">{todoCreatingDate} </span>
              <span className=" text-[12px]"> </span>
            </div>
            <div className=" w-[62px] flex justify-between items-center">
              <div
                className={`rounded-full ${
                  task.completed ? "bg-green-300" : "bg-white"
                } w-[20px] h-[20px] appearance-none border-[2px]  border-solid-[2px] border-green-300  flex justify-center items-center `}
                onClick={() => toggleTask(task.id)}
              >
                <img
                  className=" w-[9px] h-[7px]"
                  src="/assets/Vector.png"
                  alt="tic"
                />
              </div>

              <img
                className=" w-[24px] h-[24x]"
                onClick={() => deleteTask(task.id)}
                src="/assets/akar-icons_trash-can.png"
                alt="delet"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
