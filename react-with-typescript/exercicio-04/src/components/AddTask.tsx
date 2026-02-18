import React from 'react'

interface IAddTaskProps {
  funcAdd: (value: string) => void
}
const AddTask = ({ funcAdd }: IAddTaskProps) => {
  const [task, setTask] = React.useState('')

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={({target}) => setTask(target.value)}
      />

      <button
        onClick={() => {
          if(task) {
            funcAdd(task)
            setTask('')
          }
        }}
      >
        Adicionar tarefa
      </button>
    </div>
  )
}

export default AddTask
