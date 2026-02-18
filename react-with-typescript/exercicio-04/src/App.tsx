import React from "react"
import AddTask from "./components/AddTask"

const App = () => {
  const [taskList, setTaskList] = React.useState<string[]>([])

  const handleAddTask = (value: string) => {
    setTaskList([...taskList, value])
  }

  return (
    <div>
      <div>
        <AddTask funcAdd={handleAddTask} />
      </div>

      <div>
        {taskList.map((task) => {
          return(
            <div key={task}>
              {task}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
