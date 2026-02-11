import React from 'react'

interface IFromComponentProps {
  children: React.ReactNode,
  onSubmitHandle: (ev: React.SubmitEvent<HTMLFormElement>) => void
}
const FormComponent = ({ children, onSubmitHandle }: IFromComponentProps) => {
  return (
    <form
      onSubmit={onSubmitHandle}
      style={{display: 'grid', gap: '10px'}}
    >
      {children}

      <button
        type="submit"
        style={{width: 'max-content', textTransform: 'uppercase', marginTop: '15px', backgroundColor: 'rgba(0, 99, 199, 1)', color: 'white', border: 'none', borderRadius: '4px', padding: '5px 10px', cursor: 'pointer'}}
      >
        Adicionar item
      </button>
    </form>
  )
}

export default FormComponent
