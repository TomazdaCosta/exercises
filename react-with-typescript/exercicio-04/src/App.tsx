import React from "react"
import AddTask from "./components/AddTask"
import type { ITask } from "./types/types"

const App = () => {
  const [taskList, setTaskList] = React.useState<ITask[]>([])

  const handleAddTask = (newTask: ITask) => {
    setTaskList([...taskList, newTask])
  }

  return (
    <div>
      <div>
        <AddTask funcAdd={handleAddTask} />
      </div>

      <div>
        {taskList.map((task) => {
          return(
            <div key={task.id}>
              {task.title} - {task.complete ? 'Completa' : 'Pendente'}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
