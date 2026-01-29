import React from 'react'

interface IAddNewTaskProps {
  onAdd(value: string): void
}
const AddNewTask = ({ onAdd }: IAddNewTaskProps) => {
  const [inputValue, setInputValue] = React.useState('')

  const handleInputValue = (value: string) => {
    setInputValue(value)
  }

  const handleButtonAdd = () => {
    if(inputValue !== '') {
      onAdd(inputValue)
      setInputValue('')
    } 
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
        onClick={handleButtonAdd}
      >
        Adicionar
      </button>
    </div>
  )
}

export default AddNewTask
