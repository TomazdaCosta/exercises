import React from 'react'

interface IAddNewTaskProps {
  onAdd(): void
}
const AddNewTask = (props: IAddNewTaskProps) => {
  const [inputValue, setInputValue] = React.useState('')

  const handleInputValue = (value: string) => {
    setInputValue(value)
  }

  return (
    <div>
      <input
        type="text"
        placeholder='nova tarefa'
        value={inputValue}
        onChange={({target}) => handleInputValue(target.value)}
      />

      <button
        onClick={() => props.onAdd()}
      >
        Adicionar
      </button>
    </div>
  )
}

export default AddNewTask
