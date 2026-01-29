import React from "react"
import AddNewTask from "./components/AddNewTask"

interface ITaskList {
  id: string,
  task: string,
  complete: boolean
}
function App() {
  const [taskList, settaskList] = React.useState<ITaskList[]>([])

  const handleAddNewTask = (value: string) => {
    settaskList([...taskList, { id: (taskList.length + 1).toString(), task: value, complete: false }])
  }

  return (
    <>
      <AddNewTask
        onAdd={handleAddNewTask}
      />

      <ul style={{listStyle: 'none'}}>
        {taskList && taskList.map((task) => (
          <li>{task.id}. {task.task}</li>
        ))}
      </ul>
      
    </>
  )
}

export default App
