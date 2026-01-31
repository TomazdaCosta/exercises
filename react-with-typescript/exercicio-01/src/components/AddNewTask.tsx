import React from 'react'

interface IAddNewTaskProps {
  onAdd(value: string): void
}
const AddNewTask = ({ onAdd }: IAddNewTaskProps) => {
  const [inputValue, setInputValue] = React.useState('')
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleInputValue = (value: string) => {
    setInputValue(value)
  }

  const handleButtonAdd = () => {
    if(inputValue !== '') {
      onAdd(inputValue)
      setInputValue('')
      inputRef.current?.focus()
    } 
  }

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
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
