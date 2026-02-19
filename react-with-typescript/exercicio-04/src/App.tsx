import React from "react"
import AddTask from "./components/AddTask"
import type { ITask } from "./types/types"
import ItemTask from "./components/ItemTask"

const App = () => {
  const [taskList, setTaskList] = React.useState<ITask[]>([])

  const handleAddTask = (newTask: ITask) => {
    setTaskList([...taskList, newTask])
  }

  const handleCompleteTask = (taskId: string) => {
    setTaskList(taskList.map(task => {
      if(task.id === taskId) {
        return { id: task.id, title: task.title, complete: true }
      } else {
        return task
      }
    }))
  }

  return (
    <div>
      <div>
        <AddTask funcAdd={handleAddTask} />
      </div>

      <div>
        {taskList.map(({id, title, complete}) => {
          return(
            <ItemTask id={id} title={title} complete={complete} completeTask={handleCompleteTask} />
          )
        })}
      </div>
    </div>
  )
}

export default App
