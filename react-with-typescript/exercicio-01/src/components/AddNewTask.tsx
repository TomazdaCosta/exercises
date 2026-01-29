import React from 'react'

interface IAddNewTaskProps {
  onAdd(value: string): void
}
const AddNewTask = (props: IAddNewTaskProps) => {
  const [inputValue, setInputValue] = React.useState('')

  const handleInputValue = (value: string) => {
    setInputValue(value)
  }

  const handleButtonAdd = () => {
    if(inputValue !== '') {
      props.onAdd(inputValue)
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
