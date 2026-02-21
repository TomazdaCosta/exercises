import React from "react"
import type { ITaskItem } from "../types/types"

const ItemTask = ({id, title, complete, completeTask, removeTask}: ITaskItem) => {
  const [newTaskTitle, setNewTaskTitle] = React.useState('')
  const [changeTitle, setChangeTitle] = React.useState(false)
  const completeStatus = complete ? 'green' : 'red'

  return (
    <div key={id}>
      <div style={{display: 'flex', gap: '4px', alignItems: 'center'}}>
        <span style={{width: '8px', height: '8px', backgroundColor: completeStatus, display: 'inline-block', borderRadius: '50%'}}></span>

        <p>{title}</p>

        {complete ? null :
          <div style={{display: 'flex', gap: '4px'}}>
            <button
              onClick={() => setChangeTitle(currentValue => !currentValue)}
            >
              Alterar
            </button>
            
            <button
              onClick={() => completeTask(id)}
            >
              Completar
            </button>

            <button
              onClick={() => removeTask(id)}
            >
              Excluir
            </button>
          </div>
        }
        </div>

        <div>
          {changeTitle &&
            <div>
              <input
                type="text"
                placeholder="novo título"
                value={newTaskTitle}
                onChange={({ target }) => setNewTaskTitle(target.value)}
              />

              <button>Salvar</button>
            </div>
          }
        </div>
    </div>
  )
}

export default ItemTask
