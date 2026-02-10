interface IInputComponentProps {
  labelTitle: string,
  inputId: string,
  inputType: string,
  inputValue: string,
  inputChange: (value: string) => void
}
const InputComponent = ({ labelTitle, inputId, inputType, inputValue, inputChange }: IInputComponentProps) => {
  return (
    <div style={{display: 'grid', maxWidth: '300px', gap: '5px'}}>
      <label htmlFor={inputId}>{labelTitle}</label>
      <input
        style={{padding: '3px'}}
        id={inputId}
        type={inputType}
        value={inputValue}
        onChange={({ target }) => inputChange(target.value)}
      />
    </div>
  )
}

export default InputComponent
