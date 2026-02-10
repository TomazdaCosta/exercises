interface ISelectComponentProps {
  labelTitle: string,
  selectId: string,
  selectValue: string,
  options: string[],
  selectChange: (value: string) => void
}
const SelectComponent = ({ labelTitle, selectId, selectValue, options, selectChange }: ISelectComponentProps) => {
  return (
    <div style={{display: 'grid', maxWidth: '300px', gap: '5px'}}>
      <label htmlFor={selectId}>{labelTitle}</label>
      <select
        style={{padding: '3px'}}
        id={selectId}
        value={selectValue}
        onChange={({ target }) => selectChange(target.value)}
      >
        <option value='' disabled>--Escolha a opção--</option>
        {options.map((option) => {
          return(
            <option value={option}>{option}</option>
          )
        })}
      </select>
    </div>
  )
}

export default SelectComponent
