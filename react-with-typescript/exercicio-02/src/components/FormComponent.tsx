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
    </form>
  )
}

export default FormComponent
