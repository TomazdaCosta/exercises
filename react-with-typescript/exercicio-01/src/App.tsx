import React from "react"
import AddNewTask from "./components/AddNewTask"

interface ITaskList {
  id: string,
  task: string,
  complete: boolean
}
function App() {
  const [taskList, settaskList] = React.useState<ITaskList[]>([])

  return (
    <>
      <AddNewTask
      onAdd={() => {
        settaskList([...taskList, { id: (taskList.length + 1).toString(), task: 'teste', complete: false }])
      }}
      />

      <ul>
        {taskList && taskList.map((task) => (
          <li>{task.id}. {task.task}</li>
        ))}
      </ul>
      
    </>
  )
}

export default App
