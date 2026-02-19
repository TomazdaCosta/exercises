import React from 'react'
import type { IAddTaskProps, ITask } from '../types/types'

const AddTask = ({ funcAdd }: IAddTaskProps) => {
  const [taskTitle, setTaskTitle] = React.useState('')


  return (
    <div>
      <input
        type="text"
        value={taskTitle}
        onChange={({target}) => setTaskTitle(target.value)}
      />

      <button
        onClick={() => {
          if(taskTitle) {
            const newTask: ITask = {
              id: taskTitle + (Math.floor(Math.random() * 1000)),
              title: taskTitle,
              complete: false
            }

            funcAdd(newTask)
            setTaskTitle('')
          }
        }}
      >
        Adicionar tarefa
      </button>
    </div>
  )
}

export default AddTask
