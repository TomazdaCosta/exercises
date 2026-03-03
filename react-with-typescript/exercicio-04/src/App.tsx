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

  const handleRemoveTask = (taskId: string) => {
    setTaskList(taskList.filter(task => task.id !== taskId))
  }

  const handleChangeTaskTitle = (id: string, newTitle: string) => {
    setTaskList(taskList.map(task => {
      if(task.id === id) {
        return { id: task.id, title: newTitle, complete: task.complete }
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

      {taskList.length !== 0 ? <div>
        {taskList.map(({id, title, complete}) => {
          return(
            <ItemTask key={id} id={id} title={title} complete={complete} completeTask={handleCompleteTask} removeTask={handleRemoveTask} changeNewTitle={handleChangeTaskTitle} />
          )
        })}
      </div> : <div><p>Sem tarefas no momento!</p></div>}
      
    </div>
  )
}

export default App
