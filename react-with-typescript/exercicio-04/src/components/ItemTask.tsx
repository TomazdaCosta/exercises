import type { ITaskItem } from "../types/types"

const ItemTask = ({id, title, complete, completeTask}: ITaskItem) => {
  const completeStatus = complete ? 'green' : 'red'

  return (
    <div key={id} style={{display: 'flex', gap: '4px', alignItems: 'center'}}>

      <span style={{width: '8px', height: '8px', backgroundColor: completeStatus, display: 'inline-block', borderRadius: '50%'}}></span>

      <p>{title}</p>

      {complete ? null :
        <div style={{display: 'flex', gap: '4px'}}>
          <button>Alterar</button>
          
          <button
            onClick={() => completeTask(id)}
          >
            Completar
          </button>
          <button>Excluir</button>
        </div>
      }
      
    </div>
  )
}

export default ItemTask
