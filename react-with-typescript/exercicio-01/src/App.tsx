import React from "react"
import AddNewTask from "./components/AddNewTask"
import TaskItem from "./components/TaskItem"

export interface ITaskList {
  id: string,
  task: string,
  complete: boolean
}
function App() {
  const [taskList, setTaskList] = React.useState<ITaskList[]>([])

  const handleAddNewTask = (value: string) => {
    setTaskList([...taskList, { id: (taskList.length + 1).toString(), task: value, complete: false }])
  }

  const handleComplete = (id: string) => {
    setTaskList([...taskList.map(task => ({...task, complete: task.id === id ? true : task.complete}))])
  }

  const handleRemove = (id: string) => {
    setTaskList([...taskList.filter(task => task.id !== id)])
  }

  return (
    <>
      <AddNewTask
        onAdd={handleAddNewTask}
      />

      <ul style={{listStyle: 'none'}}>
        {taskList && taskList.map(({ id, task, complete }) => (
          <TaskItem
            key={id}
            id={id}
            task={task}
            complete={complete}
            onComplete={() => handleComplete(id)}
            onRemove={() => handleRemove(id)}
          />
        ))}
      </ul>
    </>
  )
}

export default App
