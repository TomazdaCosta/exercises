export interface IAddTaskProps {
  funcAdd: (newTask: ITask) => void
}

export interface ITask {
  id: string,
  title: string,
  complete: boolean
}

export interface ITaskItem extends ITask {
  completeTask: (taskId: string) => void
}