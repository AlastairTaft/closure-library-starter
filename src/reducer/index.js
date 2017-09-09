import tasksReducer from './tasks'
import actionablesReducer from './actionables'

export default function(state = {}, action){

  const tasks = tasksReducer(state.tasks, action)
  if (tasks !== state.tasks)
    state = Object.assign({}, state, { tasks })

  const actionables = actionablesReducer(state.actionables, action)
  if (actionables !== state.actionables)
    state = Object.assign({}, state, { actionables })

  return state
}