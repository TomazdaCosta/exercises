import type { ITaskList } from '../App'

interface ITaskItemProps extends ITaskList {
  onComplete(): void
  onRemove(): void
}
const TaskItem = ({id, task, complete, onComplete, onRemove}: ITaskItemProps) => {
  return (
    <div>
      <li style={{display: 'flex', gap: '0.5rem'}}>
        {id}. {task}
        {complete
          ?
          <span style={{backgroundColor: 'green', color: 'white'}}>Completa!</span>
          :
          <button
            onClick={onComplete}
          >
            Completar
          </button>
        }
        <button
          onClick={onRemove}
        >
          Remover
        </button>
      </li>
    </div>
  )
}

export default TaskItem
